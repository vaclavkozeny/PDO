# Zprovoznění

Pro bezproblémový běh aplikace je ideální připravit izolované prostředí. Pro Linux je to dokonce nutnost.

::: warning UPOZORNĚNÍ PRO LINUX
Pokud používáte Debian, Ubuntu nebo jejich deriváty, systém může zakázat instalaci balíčků mimo virtuální prostředí s chybou error: externally-managed-environment. Ignorování tohoto varování může poškodit systémové knihovny. Vždy používejte aktivované virtuální prostředí.
:::

## Požadavky
* Python 3.9+
* Operační systém: Linux (doporučeno), macOS nebo Windows
* Přístup k testované síti (cílová IP musí být dostupná)

## Stažení projektu z GitHubu

Pokud projekt nemáte lokálně, nejprve ho naklonujte z GitHubu:

```bash
git clone https://github.com/vaclavkozeny/KMB_testSuite
```

## Instalace závislostí

1. Otevřete terminál ve složce s projektem
2. Vytvořte virtuální prostředí příkazem:
```bash
python3 -m venv venv
```

3. Aktivujte vytvořené prostředí:

::: code-group
```bash [Linux / macOS]
source venv/bin/activate
```
``` [Windows DOS]
venv\Scripts\activate.bat
```
```ps [Windows PS]
venv\Scripts\Activate.ps1
```
:::
4. Nainstalujte potřebné závislosti příkazem:

``` bash
pip install textual textual-dev aiofiles aiohttp pymodbus pysnmp python-nmap psutil matplotlib polars pandas seaborn
```

### K čemu balíčky slouží

Stručný přehled hlavních instalovaných balíčků:

* `textual` – tvorba textového uživatelského rozhraní aplikace
* `aiofiles` – asynchronní práce se soubory
* `aiohttp` – asynchronní HTTP klient/server pro síťovou komunikaci
* `pymodbus` – komunikace s Modbus zařízeními
* `pysnmp` – práce se SNMP zařízeními a jejich monitorování
* `python-nmap` – spouštění a zpracování výstupu nástroje Nmap
* `matplotlib` – vykreslování grafů a vizualizací
* `polars` – rychlá práce s tabulkovými daty
* `pandas` – zpracování a analýza dat v tabulkách
* `seaborn` – statistické vizualizace nad daty


## Ověření instalace

Po instalaci je vhodné zkontrolovat, že jsou balíčky skutečně dostupné:

```bash
pip list
```

V seznamu by se měly objevit instalované balíčky jako `textual`, `aiofiles`, `pymodbus` atd.


## Spuštění {#start}
1. Otevřete terminál ve složce s projektem
2. Aktivujte virtuální prostředí:

::: code-group
```bash [Linux / macOS]
source venv/bin/activate
```
``` [Windows DOS]
venv\Scripts\activate.bat
```
```ps [Windows PS]
venv\Scripts\Activate.ps1
:::

3. Spusťte aplikaci příkazem:
```bash
python app.py
```

## Ukončení virtuálního prostředí

Po dokončení práce můžete virtuální prostředí vypnout příkazem:

```bash
deactivate
```

---