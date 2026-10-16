// discord_app/modules/keyboard/native/KeyboardPreloadExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-mobile-keyboard-preload",
  kind: "user",
  defaultConfig: { disablePreload: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { disablePreload: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyboardPreloadExperiment.tsx");

export const KeyboardPreloadExperiment = apexExperiment;
