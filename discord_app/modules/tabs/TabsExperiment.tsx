// discord_app/modules/tabs/TabsExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { CONTROL: 0, [0]: "CONTROL", ENABLED: 1, [1]: "ENABLED" };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-07-desktop-channel-tabs",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { [obj.ENABLED]: { enabled: true } },
});
const result = set.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export const TabsVariant = obj;
