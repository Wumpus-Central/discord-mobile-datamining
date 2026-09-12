// discord_app/modules/premium/gifting/experiments/GiftingBadgeComplexArtExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-09-gifting-badge-complex-art",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeComplexArtExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeComplexArtExperiment = apexExperiment;
