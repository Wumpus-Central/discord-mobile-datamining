// === Module 9404: apexExperiment ===

// Module 9404 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;