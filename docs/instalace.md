# Instalace

Pro bezproblémový běh aplikace je nutné připravit izolované prostředí. Postupujte podle následujících kroků.

## Požadavky
* Python 3.9+
* Operační systém: Linux (doporučeno), macOS nebo Windows
* Přístup k testované síti (cílová IP musí být dostupná)

## Postup

1. Otevřete terminál ve složce s projektem.
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
:::


Nainstalujte potřebné závislosti příkazem:

``` bash
pip install textual textual-dev aiofiles aiohttp scapy psutil matplotlib polars python-nmap pymodbus pysnmp pandas seaborn pyarrow
```

::: warning UPOZORNĚNÍ PRO LINUX
Pokud používáte Debian, Ubuntu nebo jejich deriváty, systém může zakázat instalaci balíčků mimo virtuální prostředí s chybou error: externally-managed-environment. Ignorování tohoto varování nebo obcházení přes systémový instalátor může poškodit systémové knihovny. Vždy používejte aktivované virtuální prostředí.
:::

::: info POZNÁMKA K PRÁVŮM
Některé síťové funkce (zejména skenování pomocí Nmap nebo manipulace s pakety přes Scapy) vyžadují oprávnění správce. V takovém případě spusťte aplikaci jako sudo python app.py (Linux/macOS) nebo terminál otevřete jako Správce (Windows).
:::

# Spuštění {#start}
1. Aktivujte virtuální prostředí:

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
2. Spusťte aplikaci příkazem:
```bash
python app.py
```
---