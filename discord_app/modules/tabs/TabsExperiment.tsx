// discord_app/modules/tabs/TabsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-07-desktop-channel-tabs",
  kind: "user",
  defaultConfig: { enabled: false, newTabExperience: "popout" },
  variations: null,
};
const obj2 = { 1: null, 2: { enabled: true, newTabExperience: "popout" } };
obj2[2] = { enabled: true, newTabExperience: "friends" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
