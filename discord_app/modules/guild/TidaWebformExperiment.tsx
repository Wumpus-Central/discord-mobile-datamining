// === Module 7166: experiment ===

// Module 7166 (experiment)
import obj132 from "obj132" /* 2 */;
import createExperiment from "createExperiment" /* 4286 */;

const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;