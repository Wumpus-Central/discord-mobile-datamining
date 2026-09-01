// discord_app/modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-01-mobile-action-sheet-killswitch",
  defaultConfig: { disabled: false },
  variations: { 0: { disabled: false }, 1: { disabled: true } },
});
const result = set.fileFinishedImporting(
  "modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx",
);

export default apexExperiment;
