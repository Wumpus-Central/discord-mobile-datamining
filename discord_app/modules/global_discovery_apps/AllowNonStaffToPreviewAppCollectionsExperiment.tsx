// discord_app/modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2025-01-allow-nonstaff-to-preview-app-collections",
  defaultConfig: { enabled: false },
  variations: obj,
});
const result = set.fileFinishedImporting(
  "modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx",
);

export default apexExperiment;
