// discord_app/modules/guild/TidaWebformExperiment.tsx
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  id: "2025-11_tida_webform",
  label: "Tida Webform",
  defaultConfig: { tidaWebformEnabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
