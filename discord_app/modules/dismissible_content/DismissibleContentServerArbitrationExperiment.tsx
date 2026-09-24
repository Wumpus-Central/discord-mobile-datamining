// discord_app/modules/dismissible_content/DismissibleContentServerArbitrationExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-dismissible-content-server-arbitration",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/dismissible_content/DismissibleContentServerArbitrationExperiment.tsx",
);

export const DismissibleContentServerArbitrationExperiment = apexExperiment;
