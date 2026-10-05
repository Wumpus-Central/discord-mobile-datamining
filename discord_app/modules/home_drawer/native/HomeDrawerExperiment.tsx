// discord_app/modules/home_drawer/native/HomeDrawerExperiment.tsx
import apex_ApexExperimentDefault from "../../experiments/apex/ApexExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2025-10-mobile-home-drawer",
  kind: "user",
  defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false },
  variations: obj2,
};
obj2 = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj2[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = tmp2;
