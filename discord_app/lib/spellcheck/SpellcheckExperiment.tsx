// discord_app/lib/spellcheck/SpellcheckExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../../modules/experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enableElectronMultilangSpellcheck: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-05-electron-multilang-spellcheck",
  defaultConfig: { enableElectronMultilangSpellcheck: false },
  variations: obj,
});
const result = set.fileFinishedImporting("lib/spellcheck/SpellcheckExperiment.tsx");

export const SpellcheckExperiment = apexExperiment;
export const isElectronMultilangSpellcheckEnabled = function isElectronMultilangSpellcheckEnabled() {
  return apexExperiment.getConfig({ location: "isElectronMultilangSpellcheckEnabled" })
    .enableElectronMultilangSpellcheck;
};
