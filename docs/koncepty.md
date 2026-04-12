# Koncept: Principy zátěžového testování

StressTestApp je terminálová aplikace určená k zátěžovému testování síťových zařízení, konkrétně analyzátorů výkonu. Aplikace simuluje síťové útoky a měří, jak testované zařízení reaguje z hlediska latence a dostupnosti.

Aplikace je postavena nad asynchronním TUI frameworkem Textual a využívá návrhový vzor Mixin pro oddělení uživatelského rozhraní od aplikační logiky.

## Podporované protokoly

* **HTTP:** Generování webových požadavků na zařízení. Aplikace nevyužívá běžné knihovny, ale nízkoúrovňovou práci se sockety pro obcházení chyb serverů (např. chybné `Transfer-Encoding`).
* **Modbus TCP:** Průmyslová komunikace. Simuluje klientská zařízení odesílající náhodné čtecí požadavky na registry.
* **SNMP:** Síťový management. Generuje zátěž pomocí UDP dotazů na náhodná OID.

## Režimy testování

1. **Scénářový režim (Scenario):** Spouštění předem definovaných sekvencí útoků, které postupně zvyšují zátěž.
2. **Manuální režim (Manual):** Nezávislé řízení zátěže pro jednotlivé protokoly s dynamickým nastavením souběžnosti.
3. **Burst režim (Burst):** Okamžité odeslání definovaného množství požadavků v co nejkratším čase.