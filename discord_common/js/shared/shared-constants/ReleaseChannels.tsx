// === Module 5418: ReleaseChannels ===

// Module 5418 (ReleaseChannels)
import size from "module_2" /* 2 */;

const obj = { WEB_AND_IOS: new Set(["canary", "ptb", "stable"]), ANDROID: new Set(["betaRelease", "canaryRelease", "googleRelease"]), QUEST_VR: new Set(["questBetaRelease", "questCanaryRelease", "questProductionRelease"]), OTHER: new Set(["N/A", "adhoc", "development", "staging"]), ALL: new Set(["N/A", "adhoc", "betaRelease", "canary", "canaryRelease", "development", "googleRelease", "ptb", "questBetaRelease", "questCanaryRelease", "questProductionRelease", "stable", "staging"]) };
new Set(["canary", "ptb", "stable"]);
new Set(["betaRelease", "canaryRelease", "googleRelease"]);
new Set(["questBetaRelease", "questCanaryRelease", "questProductionRelease"]);
new Set(["N/A", "adhoc", "development", "staging"]);
new Set(["N/A", "adhoc", "betaRelease", "canary", "canaryRelease", "development", "googleRelease", "ptb", "questBetaRelease", "questCanaryRelease", "questProductionRelease", "stable", "staging"]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReleaseChannels.tsx");

export const ReleaseChannels = { CANARY_RELEASE: "canaryRelease", BETA_RELEASE: "betaRelease", GOOGLE_RELEASE: "googleRelease", CANARY: "canary", PTB: "ptb", STABLE: "stable", ADHOC: "adhoc", QUEST_CANARY_RELEASE: "questCanaryRelease", QUEST_BETA_RELEASE: "questBetaRelease", QUEST_PRODUCTION_RELEASE: "questProductionRelease", STAGING: "staging", DEVELOPMENT: "development", N_A: "N/A" };
export const ReleaseChannelsSets = obj;