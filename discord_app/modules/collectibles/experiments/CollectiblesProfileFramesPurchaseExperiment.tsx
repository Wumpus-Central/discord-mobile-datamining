// === Module 8831: CollectiblesProfileFramesPurchaseExperiment ===

// Module 8831 (CollectiblesProfileFramesPurchaseExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { CONTROL: 0, [0]: "CONTROL", OPEN_PURCHASE: 1, [1]: "OPEN_PURCHASE", PAID_PREMIUM_SUBSCRIBERS_ONLY: 2, [2]: "PAID_PREMIUM_SUBSCRIBERS_ONLY" };
obj = { name: "2026-04-collectibles-profile-frames-purchase", kind: "user", defaultConfig: { bucket: obj.CONTROL }, variations: null };
obj = { 0: { bucket: obj.CONTROL }, 1: { bucket: obj.OPEN_PURCHASE }, 2: { bucket: obj.PAID_PREMIUM_SUBSCRIBERS_ONLY } };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");

export default apexExperiment;
export const ProfileFramesPurchaseBucket = obj;