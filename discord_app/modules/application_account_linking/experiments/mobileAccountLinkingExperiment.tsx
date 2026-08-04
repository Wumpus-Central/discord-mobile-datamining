// discord_app/modules/application_account_linking/experiments/mobileAccountLinkingExperiment.tsx
import ApexExperiment from "ApexExperiment";

let obj = { MEDIUM: "medium", LARGE: "large" };
obj = { enabled: true, bannerSize: obj.LARGE };
obj = { enabled: true, bannerSize: obj.MEDIUM };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-mobile-account-linking", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: obj, 2: obj } });
const result = require("set").fileFinishedImporting("modules/application_account_linking/experiments/mobileAccountLinkingExperiment.tsx");

export default apexExperiment;
export const MobileAccountLinkingBannerSize = obj;