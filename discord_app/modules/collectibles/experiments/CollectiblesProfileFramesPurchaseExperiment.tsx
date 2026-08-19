// discord_app/modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

let obj = { CONTROL: 0, [0]: "CONTROL", OPEN_PURCHASE: 1, [1]: "OPEN_PURCHASE", PAID_PREMIUM_SUBSCRIBERS_ONLY: 2, [2]: "PAID_PREMIUM_SUBSCRIBERS_ONLY" };
obj = { bucket: obj.CONTROL };
obj = { bucket: obj.CONTROL };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-collectibles-profile-frames-purchase", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { bucket: obj.OPEN_PURCHASE }, 2: { bucket: obj.PAID_PREMIUM_SUBSCRIBERS_ONLY } } });
const result = obj132.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");

export default apexExperiment;
export const ProfileFramesPurchaseBucket = obj;