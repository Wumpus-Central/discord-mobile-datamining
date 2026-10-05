// discord_app/modules/guild/TidaWebformExperiment.tsx
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items;
const obj = {
  kind: "user",
  id: "2025-11_tida_webform",
  label: "Tida Webform",
  defaultConfig: { tidaWebformEnabled: false },
  treatments: items,
};
items = [{ id: 1, label: "Enabled", config: { tidaWebformEnabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/guild/TidaWebformExperiment.tsx");

export default experiment;
