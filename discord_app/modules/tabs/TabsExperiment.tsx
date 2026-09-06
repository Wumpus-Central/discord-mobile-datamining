// discord_app/modules/tabs/TabsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { CONTROL: 0, [0]: "CONTROL", ENABLED: 1, [1]: "ENABLED" };
obj = {
  name: "2026-07-desktop-channel-tabs",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { [obj.ENABLED]: { enabled: true } },
};
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export const TabsVariant = obj;
