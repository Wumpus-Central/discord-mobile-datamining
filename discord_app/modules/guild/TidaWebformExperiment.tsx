// === Module 6609: TidaWebformExperiment ===

// Module 6609 (TidaWebformExperiment)
import createExperiment from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;