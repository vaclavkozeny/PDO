# Analýza výsledků a dat

Po dokončení testu ve Scénářovém, Manuálním nebo Burst režimu aplikace automaticky uloží naměřená data, zpracuje je a vygeneruje výstupní soubory ve složce s výsledky.

Tato kapitola popisuje, jaké soubory aplikace vytváří a jak z nich vyčíst výkon testovaného analyzátoru.

## 1. Surová data

Průběžně se ukládají do souborů s příponou `.jsonl` ve formátu JSON Lines.

Tento formát je vhodný pro velké objemy dat, protože každý řádek představuje samostatný JSON záznam a zápis je možné provádět průběžně bez zbytečného zatěžování paměti.

### Co surová data obsahují

* časové razítko odeslání požadavku
* dobu odezvy (RTT) v milisekundách
* stavový kód, například HTTP 200, 503 nebo specifické chyby Modbus a SNMP
* fázi případného selhání, například connection timeout nebo read error
* skutečný objem přenesených dat

::: tip Proč `.jsonl`?
Formát `.jsonl` se dobře zpracovává v analytických nástrojích. Lze jej snadno načíst například pomocí Pandas nebo Polars a dál s ním pracovat v Pythonu.
:::

## 2. Souhrnná tabulka

Po skončení testu aplikace vytvoří také souhrnný přehled.

Souhrnná tabulka obsahuje tyto metriky:

* celkový počet odeslaných požadavků
* počet a procento neúspěšných spojení
* průměrnou a maximální hodnotu RTT

Díky této tabulce lze rychle zjistit, při jaké úrovni zátěže začal analyzátor ztrácet pakety nebo zpomalovat odpovědi.

## 3. Vizualizace: boxploty

Pro rychlé vyhodnocení stability zařízení jsou nejpraktičtějším výstupem boxploty, tedy krabicové grafy. Jsou rozdělené podle úrovně zatížení, tedy podle počtu paralelních spojení.

### Jak boxplot číst

* **Osa X** představuje kategorii zátěže, například 1, 10, 50 nebo 100 paralelních spojení.
* **Osa Y** ukazuje naměřenou RTT v milisekundách.
* **Tělo krabice** znázorňuje středních 50 % naměřených hodnot. Čím je krabice užší, tím stabilnější bylo chování zařízení.
* **Čára uprostřed** představuje medián, tedy typickou dobu odezvy pro danou zátěž.
* **Body mimo krabici** ukazují odlehlé hodnoty, tedy extrémní výkyvy, kdy zařízení reagovalo výrazně pomaleji.

::: info Jak poznat bod zlomu
Při vyhodnocení sledujte okamžik, kdy začne latence výrazně růst nebo se značně zvětší rozptyl hodnot. To obvykle znamená, že analyzátor dosáhl svého hardwarového nebo softwarového limitu.
:::