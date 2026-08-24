// === Module 15520: apexExperiment ===

// Module 15520 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { MEDIUM: "medium", LARGE: "large" };
obj = { enabled: true, bannerSize: obj.LARGE };
obj = { enabled: true, bannerSize: obj.MEDIUM };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-mobile-account-linking", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: obj, 2: obj } });
const result = set.fileFinishedImporting("modules/application_account_linking/experiments/mobileAccountLinkingExperiment.tsx");

export default apexExperiment;
export const MobileAccountLinkingBannerSize = obj;