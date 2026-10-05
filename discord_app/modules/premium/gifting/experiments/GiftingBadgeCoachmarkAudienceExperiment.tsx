// discord_app/modules/premium/gifting/experiments/GiftingBadgeCoachmarkAudienceExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj2;
const obj = {
  name: "2026-09-gifting-badge-coachmark-audience",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/premium/gifting/experiments/GiftingBadgeCoachmarkAudienceExperiment.tsx",
);

export default apexExperiment;
export const GiftingBadgeCoachmarkAudienceExperiment = apexExperiment;
