// discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx
import set from "../../../../_runtime/00002_set.js";

const obj = { PLAYSTATION_APPLICATION_IDS: null, IMPLICIT_IDENTIFY_PREMIUM_APPLICATION_IDS: null, ALL: null };
let set = new Set(["984193235868065795", "1008890872156405890"]);
obj[0] = set;
obj[1] = new Set(["622174530214821906"]);
const set1 = new Set(["622174530214821906"]);
obj[2] = new Set(["622174530214821906", "984193235868065795", "1008890872156405890"]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleOAuthApplications.tsx");

export const ConsoleOAuthApplications = {
  XBOX_APPLICATION_ID: "622174530214821906",
  PLAYSTATION_APPLICATION_ID: "1008890872156405890",
  PLAYSTATION_STAGING_APPLICATION_ID: "984193235868065795",
};
export const ConsoleOAuthApplicationsSets = obj;
