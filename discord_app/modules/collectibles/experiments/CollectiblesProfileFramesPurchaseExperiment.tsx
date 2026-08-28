// === Module 12464: apexExperiment ===

// Module 12464 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { CONTROL: 0, [0]: "CONTROL", OPEN_PURCHASE: 1, [1]: "OPEN_PURCHASE", PAID_PREMIUM_SUBSCRIBERS_ONLY: 2, [2]: "PAID_PREMIUM_SUBSCRIBERS_ONLY" };
obj = { bucket: obj.CONTROL };
obj = { bucket: obj.CONTROL };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-collectibles-profile-frames-purchase", kind: "user", defaultConfig: obj, variations: { 0: obj, 1: { bucket: obj.OPEN_PURCHASE }, 2: { bucket: obj.PAID_PREMIUM_SUBSCRIBERS_ONLY } } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");

export default apexExperiment;
export const ProfileFramesPurchaseBucket = obj;