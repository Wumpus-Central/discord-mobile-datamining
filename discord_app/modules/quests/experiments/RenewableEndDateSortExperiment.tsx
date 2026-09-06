// discord_app/modules/quests/experiments/RenewableEndDateSortExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-07-renewable-end-date-sort",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/quests/experiments/RenewableEndDateSortExperiment.tsx");

export default apexExperiment;
