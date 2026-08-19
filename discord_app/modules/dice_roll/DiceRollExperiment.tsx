// === Module 12739: apexExperiment ===

// Module 12739 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-05-dice-roll-slash-command", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/dice_roll/DiceRollExperiment.tsx");

export default apexExperiment;