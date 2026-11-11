// discord_app/modules/pass_the_controller/PassTheControllerExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-11-pass-the-controller",
  kind: "guild",
  defaultConfig: { enabled: false, allowWrestling: false },
  variations: null,
};
const obj2 = { 1: null, 2: { enabled: true, allowWrestling: false } };
obj2[2] = { enabled: true, allowWrestling: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerExperiment.tsx");

export default apexExperiment;
