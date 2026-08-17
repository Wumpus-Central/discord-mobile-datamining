// discord_app/modules/guild/TidaWebformExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2025-11_tida_webform", label: "Tida Webform", defaultConfig: { tidaWebformEnabled: false }, treatments: items });
const result = set.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;