// discord_app/modules/home_drawer/native/HomeDrawerExperiment.tsx
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";

let obj = {
  name: "2025-10-mobile-home-drawer",
  kind: "user",
  defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false },
  variations: null,
};
obj = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
obj.variations = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = apex_ApexExperimentDefault(obj);
