// === Module 11294: apexExperiment ===

// Module 11294 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-01-allow-nonstaff-to-preview-app-collections", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx");

export default apexExperiment;