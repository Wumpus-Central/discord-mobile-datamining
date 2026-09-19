// === Module 12368: AllowNonStaffToPreviewAppCollectionsExperiment ===

// Module 12368 (AllowNonStaffToPreviewAppCollectionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2025-01-allow-nonstaff-to-preview-app-collections", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx");

export default apexExperiment;