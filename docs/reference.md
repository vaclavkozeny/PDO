# Reference: Architektura a moduly

Tato část slouží pro vývojáře nebo pokročilé uživatele, kteří chtějí aplikaci dále rozšiřovat nebo hlouběji pochopit její vnitřní fungování.

## Hlavní aplikace
* **`app.py`** Hlavní řídicí komponenta. Koordinuje běh zátěžových modulů a zajišťuje vizualizaci dat v reálném čase. Využívá návrhový vzor Mixin pro oddělení jednotlivých logik do tříd (např. `HttpMixin`, `ScenarioMixin`).

## Pracovní moduly (Workers)
* **`http_worker.py`** Nástroj pro HTTP zátěž. Řízení zajišťuje třída `AttackOrchestrator`. Měří dobu odezvy (RTT), stavové kódy a objem přenesených dat. Využívá nízkoúrovňové asynchronní sockety (`asyncio.open_connection`) pro plnou kontrolu nad hlavičkami a chunked přenosy. Telemetrii ukládá asynchronně ve formátu JSONL.
  
* **`modbus_worker.py`** Slouží k testování protokolu Modbus TCP. Zajišťuje navazování spojení a výběr náhodných adres pro rovnoměrné pokrytí paměťového prostoru. Odesílá čtecí požadavky na registry (`read_holding_registers`) ve formátu Big-Endian.

* **`snmp_worker.py`** Modul pro testování SNMP. Dotazuje se na náhodná OID pomocí UDP. Manuálně započítává režii komunitního stringu i BER (Basic Encoding Rules) kódování pro přesné měření datové propustnosti v síti.

* **`nmap_worker.py`** Zajišťuje úvodní identifikaci otevřených TCP portů (1–9999). Využívá parametr `-Pn`, čímž úspěšně obchází firewallová pravidla blokující ICMP (ping). Výstupem je strukturovaný slovník obsahující IP adresu, hostname a nalezené služby.