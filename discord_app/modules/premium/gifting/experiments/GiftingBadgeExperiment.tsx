// discord_app/modules/premium/gifting/experiments/GiftingBadgeExperiment.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../../experiments/apex/index.tsx";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-gifting-badge", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/premium/gifting/experiments/GiftingBadgeExperiment.tsx");

export default apexExperiment;
export const GiftingBadgeExperiment = apexExperiment;