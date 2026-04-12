# Provedení testů

StressTestApp nabízí tři odlišné režimy pro generování zátěže.

## 1. Scénářový režim (Scenario Mode)

Tento režim využijete pro automatizované testování, kdy chcete postupně zvyšovat zátěž a přesně sledovat, při jakém počtu spojení začíná analyzátor reagovat se zvýšenou latencí nebo přestává odpovídat úplně.

**Postup spuštění:**
1. [Spusťte aplikaci](/instalace.md#start) a do pole **Target IP** zadejte IP adresu testovaného analyzátoru.
2. (Volitelné) Klikněte na tlačítka **START PING MONITOR** a **START VOLTAGE MONITOR** v horní liště pro spuštění sběru telemetrie.
3. V hlavním rozhraní se přepněte do záložky **Scenario Mode**.
4. Do textového pole vložte definici testu. Každý krok scénáře musí být na samostatném řádku ve formátu `DURATION TYPE CONCURRENCY`.
5. Klikněte na tlačítko **SAVE** pro uložení definovaného scénáře.
6. Klikněte na tlačítko **START SCENARIO**.
7. Aplikace nyní automaticky projde všechny kroky. Po dokončení si můžete prohlédnout vygenerovaný report v adresáři aplikace.

::: tip Příklad scénáře
Hodnota `30 http 100` znamená 30 sekund trvající test přes protokol HTTP se 100 paralelními spojeními. Pro postupné zvyšování zátěže zadejte pod sebe více řádků (např. 10, 50, 100, 200 spojení).
:::

---

## 2. Manuální režim (Manual Mode)

Manuální režim je ideální pro rychlé ověření funkčnosti nebo pro interaktivní testování, kdy chcete zátěž měnit dynamicky a spouštět jednotlivé typy flood útoků nezávisle na sobě.

**Postup spuštění:**
1. [Spusťte aplikaci](/instalace.md#start) a do pole **Target IP** zadejte IP adresu testovaného analyzátoru.
2. (Volitelné) Spusťte monitory v horní liště.
3. Přepněte se do záložky **Manual Mode**.
4. V sekci vybraného protokolu (HTTP, Modbus, nebo SNMP) najděte textové pole pro **Concurrency** (počet paralelních spojení) a zadejte požadovanou hodnotu.
5. Klikněte na příslušné tlačítko **Start** (např. *Start HTTP* nebo *Start Modbus*) pro zahájení kontinuálního flood útoku.
6. Zátěž bude generována, dokud u daného protokolu nekliknete na tlačítko **Stop**.

::: info Kombinace útoků
V manuálním režimu nejste omezeni pouze na jeden protokol. Můžete spustit například HTTP a Modbus testy současně a simulovat tak komplexní zátěž na síťové rozhraní analyzátoru.
:::

---

## 3. Burst režim (Burst Mode)

Tento režim slouží k simulaci náhlých špiček (tzv. spiků) v síťovém provozu. Na rozdíl od předchozích režimů neudržuje plynulou zátěž po určitý čas, ale okamžitě odešle definované množství požadavků v co nejkratším možném čase.

**Postup spuštění:**
1. [Spusťte aplikaci](/instalace.md#start) a do pole **Target IP** zadejte IP adresu testovaného analyzátoru.
2. Spusťte monitory latence a napětí (při burst útocích je obzvlášť důležité sledovat okamžité výpadky).
3. Přepněte se do záložky **Burst Mode**.
4. Vyberte cílový protokol (HTTP, Modbus, nebo SNMP).
5. Do textového pole zadejte celkový počet požadavků (např. 5000), které se mají jednorázově odeslat.
6. Klikněte na tlačítko **Start Burst**.
7. Aplikace se pokusí odeslat všechny požadavky okamžitě.
