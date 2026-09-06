// === Module 8081: MobileFriendAnniversaryExperiment ===

// Module 8081 (MobileFriendAnniversaryExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-06-mobile-friendship-anniversary", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/native/MobileFriendAnniversaryExperiment.tsx");

export default apexExperiment;