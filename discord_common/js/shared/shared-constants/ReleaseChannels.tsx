// discord_common/js/shared/shared-constants/ReleaseChannels.tsx
import set from "set" /* 2 */;

const obj = { WEB_AND_IOS: null, ANDROID: null, QUEST_VR: null, OTHER: null, ALL: null };
let set = new Set(["canary", "ptb", "stable"]);
obj[0] = set;
obj[1] = new Set(["betaRelease", "canaryRelease", "googleRelease"]);
const set1 = new Set(["betaRelease", "canaryRelease", "googleRelease"]);
obj[2] = new Set(["questBetaRelease", "questCanaryRelease", "questProductionRelease"]);
const set2 = new Set(["questBetaRelease", "questCanaryRelease", "questProductionRelease"]);
obj[3] = new Set(["N/A", "adhoc", "development", "staging"]);
const set3 = new Set(["N/A", "adhoc", "development", "staging"]);
obj[4] = new Set(["N/A", "adhoc", "betaRelease", "canary", "canaryRelease", "development", "googleRelease", "ptb", "questBetaRelease", "questCanaryRelease", "questProductionRelease", "stable", "staging"]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ReleaseChannels.tsx");

export const ReleaseChannels = { CANARY_RELEASE: "canaryRelease", BETA_RELEASE: "betaRelease", GOOGLE_RELEASE: "googleRelease", CANARY: "canary", PTB: "ptb", STABLE: "stable", ADHOC: "adhoc", QUEST_CANARY_RELEASE: "questCanaryRelease", QUEST_BETA_RELEASE: "questBetaRelease", QUEST_PRODUCTION_RELEASE: "questProductionRelease", STAGING: "staging", DEVELOPMENT: "development", N_A: "N/A" };
export const ReleaseChannelsSets = obj;