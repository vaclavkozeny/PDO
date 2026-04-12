# Analýza výsledků a dat

Po úspěšném dokončení zátěžového testu (ať už ve Scénářovém, Manuálním nebo Burst režimu) StressTestApp automaticky shromáždí naměřené hodnoty, zpracuje je a vygeneruje sadu výstupních souborů ve složce s výsledky. 

Tato kapitola popisuje, jaké soubory aplikace vytváří a jak z nich správně interpretovat výkon vašeho analyzátoru.

## 1. Surová data (`.jsonl`)

Během testování se veškerá telemetrie ukládá průběžně a asynchronně do souborů s příponou `.jsonl` (JSON Lines). 

Tento formát byl zvolen záměrně, protože umožňuje bezpečný zápis obrovského množství dat bez rizika zahlcení paměti (každý řádek představuje jeden platný JSON objekt s výsledkem jednoho konkrétního požadavku).

**Co surová data obsahují:**
* Časové razítko odeslání požadavku.
* Dobu odezvy (RTT - Round Trip Time).
* Stavový kód (např. HTTP 200, 503, nebo specifické chybové kódy Modbus/SNMP).
* Fázi případného selhání (např. *connection timeout*, *read error*).
* Skutečný objem přenesených dat.

::: tip Proč `.jsonl`?
Tento formát je ideální pro další strojové zpracování. Můžete jej velmi snadno načíst do analytických knihoven, jako je Pandas nebo Polars v Pythonu, a provádět nad nimi vlastní pokročilou analytiku.
:::

## 2. Tabulka shrnutí (Summary Table)

Aby nebylo nutné vždy manuálně procházet tisíce řádků surových dat, aplikace po skončení testu automaticky vygeneruje přehlednou shrnující tabulku (např. ve formátu CSV nebo textového reportu).

**Tabulka typicky poskytuje agregované metriky pro každou fázi testu:**
* Celkový počet odeslaných požadavků.
* Počet a procento neúspěšných spojení (chybovost).
* Průměrnou a maximální latenci (RTT).s

Díky této tabulce na první pohled poznáte, při jaké zátěži (úrovni *concurrency*) začal analyzátor výkonu ztrácet pakety nebo prodlužovat dobu odezvy.

## 3. Vizualizace: Boxplot grafy

Nejužitečnějším výstupem pro rychlou analýzu stability zařízení jsou vygenerované grafy, konkrétně **krabicové grafy (Boxplots)**. Tyto grafy jsou rozdělené podle kategorií zatížení (podle počtu paralelních spojení - *concurrency*).

**Jak číst boxplot z naší aplikace:**
* **Osa X (horizontální):** Představuje kategorie zatížení (např. 1, 10, 50, 100 paralelních spojení).
* **Osa Y (vertikální):** Představuje naměřenou latenci v milisekundách.
* **Tělo "krabice":** Ukazuje, kde se nachází středních 50 % všech naměřených odezev. Čím je krabice užší, tím stabilněji analyzátor odpovídal.
* **Čára uprostřed (medián):** Ukazuje typickou dobu odezvy pro danou zátěž.
* **Tečky (Outliers):** Zobrazují extrémní výkyvy (spiky), kdy zařízení reagovalo nestandardně pomalu.

::: info Identifikace bodu zlomu
Při prohlížení boxplotů hledejte moment, kdy průměrná latence začne exponenciálně růst, nebo kdy se výrazně zvětší rozptyl grafu (velikost "krabice"). Tento bod značí hardwarový nebo softwarový limit testovaného analyzátoru.
:::