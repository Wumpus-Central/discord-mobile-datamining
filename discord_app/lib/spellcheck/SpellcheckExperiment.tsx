// === Module 5644: SpellcheckExperiment ===

// Module 5644 (SpellcheckExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-05-electron-multilang-spellcheck", defaultConfig: { enableElectronMultilangSpellcheck: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableElectronMultilangSpellcheck: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/spellcheck/SpellcheckExperiment.tsx");

export const SpellcheckExperiment = apexExperiment;
export const isElectronMultilangSpellcheckEnabled = function isElectronMultilangSpellcheckEnabled() {
  return apexExperiment.getConfig({ location: "isElectronMultilangSpellcheckEnabled" }).enableElectronMultilangSpellcheck;
};