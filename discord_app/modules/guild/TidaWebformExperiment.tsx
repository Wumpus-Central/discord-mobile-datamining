// === Module 7189: TidaWebformExperiment ===

// Module 7189 (TidaWebformExperiment)
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: null };
const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;