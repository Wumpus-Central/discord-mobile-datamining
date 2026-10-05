// discord_app/modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  kind: "user",
  name: "2025-01-allow-nonstaff-to-preview-app-collections",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx",
);

export default apexExperiment;
