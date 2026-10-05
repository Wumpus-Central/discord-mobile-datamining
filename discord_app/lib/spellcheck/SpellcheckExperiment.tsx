// discord_app/lib/spellcheck/SpellcheckExperiment.tsx
import ApexExperiment from "../../modules/experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  kind: "user",
  name: "2026-05-electron-multilang-spellcheck",
  defaultConfig: { enableElectronMultilangSpellcheck: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enableElectronMultilangSpellcheck: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("lib/spellcheck/SpellcheckExperiment.tsx");

export const SpellcheckExperiment = apexExperiment;
export const isElectronMultilangSpellcheckEnabled = function isElectronMultilangSpellcheckEnabled() {
  return apexExperiment.getConfig({ location: "isElectronMultilangSpellcheckEnabled" })
    .enableElectronMultilangSpellcheck;
};
