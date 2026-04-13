# Provedení testů

StressTestApp nabízí tři režimy pro generování zátěže.

## 1. Scénářový režim (Scenario Mode)

Tento režim se hodí pro automatizované testování, když chcete postupně zvyšovat zátěž a sledovat, při jakém počtu spojení začíná analyzátor reagovat se zvýšenou latencí nebo přestává odpovídat.

**Postup spuštění:**
1. [Spusťte aplikaci](/instalace.md#start) a do pole **Target IP** zadejte IP adresu testovaného analyzátoru.
2. Volitelně spusťte v horní liště tlačítka **START PING MONITOR** a **START VOLTAGE MONITOR**.
3. Přejděte na záložku **Scenario Mode**.
4. Do textového pole vložte definici testu. Každý krok scénáře musí být na samostatném řádku ve formátu `DURATION TYPE CONCURRENCY [TYPE2 CONCURRENCY2 ...]`. V jednom řádku můžete zadat více protokolů a jejich hodnot.
5. Klikněte na tlačítko **SAVE**.
6. Klikněte na tlačítko **START SCENARIO**.
7. Aplikace projde všechny kroky automaticky. Po dokončení si můžete prohlédnout vygenerovaný report v adresáři aplikace.

::: tip Příklad scénáře
Příklad scénáře s více řádky a více protokoly v jednom řádku:

```text
30 http 100
20 http 50 modbus 10
10 snmp 5
```

První řádek znamená 30 sekund testu přes HTTP se 100 paralelními spojeními. Druhý řádek spouští současně HTTP i Modbus zátěž. Třetí řádek přidává krátký SNMP test.
:::

---

## 2. Manuální režim (Manual Mode)

Manuální režim je vhodný pro rychlé ověření funkčnosti i pro interaktivní testování, když chcete zátěž měnit dynamicky a spouštět jednotlivé typy testů nezávisle na sobě.

**Postup spuštění:**
1. [Spusťte aplikaci](/instalace.md#start) a do pole **Target IP** zadejte IP adresu testovaného analyzátoru.
2. Volitelně spusťte monitory v horní liště.
3. Přejděte na záložku **Manual Mode**.
4. V části vybraného protokolu (HTTP, Modbus nebo SNMP) najděte pole **Concurrency** a zadejte požadovanou hodnotu.
5. Klikněte na příslušné tlačítko **Start**, například *Start HTTP* nebo *Start Modbus*.
6. Zátěž poběží, dokud u daného protokolu nekliknete na tlačítko **Stop**.

::: info Kombinace útoků
V manuálním režimu můžete spustit více protokolů současně. Tím nasimulujete komplexní zátěž síťového rozhraní analyzátoru.
:::

---

## 3. Burst režim (Burst Mode)

Tento režim slouží k simulaci náhlých špiček v síťovém provozu. Na rozdíl od předchozích režimů neudržuje plynulou zátěž po určitý čas, ale okamžitě odešle definované množství požadavků v co nejkratším čase.

**Postup spuštění:**
1. [Spusťte aplikaci](/instalace.md#start) a do pole **Target IP** zadejte IP adresu testovaného analyzátoru.
2. Spusťte monitory latence a napětí. Při burst testech je důležité sledovat okamžité výpadky.
3. Přejděte na záložku **Burst Mode**.
4. Vyberte cílový protokol: HTTP, Modbus nebo SNMP.
5. Do textového pole zadejte celkový počet požadavků, například 5000.
6. Klikněte na tlačítko **Start Burst**.
7. Aplikace se pokusí odeslat všechny požadavky okamžitě.
