// discord_app/modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-01-mobile-action-sheet-killswitch",
  defaultConfig: { disabled: false },
  variations: { 0: { disabled: false }, 1: { disabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx",
);

export default apexExperiment;
