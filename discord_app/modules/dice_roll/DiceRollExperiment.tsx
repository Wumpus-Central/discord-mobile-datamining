// === Module 9404: DiceRollExperiment ===

// Module 9404 (DiceRollExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;