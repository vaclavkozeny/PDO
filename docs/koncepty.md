# Principy zátěžového testování

StressTestApp je terminálová aplikace pro **zátěžové testování** síťových zařízení, zejména analyzátorů výkonu. Simuluje vysokou síťovou zátěž a sleduje, jak zařízení reaguje z hlediska **latence**, **chybovosti** a **dostupnosti**.

Aplikace je postavena na asynchronním **TUI frameworku Textual** a využívá oddělení **uživatelského rozhraní (UI)** od **aplikační logiky**.

## Hlavní koncept: oddělení UI a logiky

Klíčovým architektonickým konceptem je oddělení prezentační vrstvy (**UI**) od vrstvy, která provádí samotné testy a sběr dat.

V praxi to znamená, že uživatelské rozhraní pouze přijímá vstup od uživatele a zobrazuje výsledky. Veškerá testovací logika, jako je generování požadavků, řízení **souběžnosti (concurrency)** a sběr metrik, běží nezávisle v asynchronních úlohách (**workers**). Komunikace mezi těmito dvěma vrstvami probíhá pomocí zpráv a událostí (**Textual messaging**), nikoli přímým voláním funkcí. UI tedy „neví", jak test probíhá – pouze reaguje na výsledky, které mu logická vrstva průběžně posílá.

### Proč je to důležité

* změny v uživatelském rozhraní neovlivní testovací logiku
* testovací logiku lze snadněji testovat a rozšiřovat
* aplikace je přehlednější a lépe udržovatelná

### Praktický tok

1. Uživatel v **UI** spustí akci, například start scénáře.
2. Řídicí logika vytvoří testovací úlohy pro zvolené protokoly.
3. Během běhu se průběžně sbírají metriky, například **latence** a chybové stavy.
4. Výsledky se ukládají a po dokončení se vygeneruje souhrn a grafy.



## Podporované protokoly

* **HTTP:** Generování webových požadavků na cílové zařízení.
* **Modbus TCP:** Simulace průmyslové komunikace pomocí čtecích požadavků na registry.
* **SNMP:** Generování management dotazů přes UDP pro zátěž transportní vrstvy.

## Režimy testování

1. **Scénářový režim:** Spouští předem definované kroky, které postupně mění úroveň zátěže.
2. **Manuální režim:** Umožňuje samostatně řídit zátěž pro jednotlivé protokoly.
3. **Burst režim:** Odesílá definované množství požadavků jednorázově v co nejkratším čase.

## Přehled klíčových pojmů

| Pojem | Stručný význam | Kde se používá |
|---|---|---|
| UI | Uživatelské rozhraní aplikace | Ovládání režimů testu a zobrazení výsledků |
| Worker | Asynchronní úloha vykonávající část testu | Generování požadavků a sběr metrik |
| Concurrency | Počet paralelně běžících požadavků | Nastavení intenzity zátěže |
| Latence (RTT) | Doba mezi odesláním požadavku a odpovědí | Vyhodnocení výkonu zařízení |
| Chybovost | Podíl neúspěšných požadavků | Identifikace bodu přetížení |
| Burst | Jednorázové odeslání velkého počtu požadavků | Simulace náhlé špičky provozu |