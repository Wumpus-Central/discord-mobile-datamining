// discord_app/modules/guild_automod/AutomodFeedback.tsx
import intl3 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Feedback = { BUG: "BUG", ALLOWED: "ALLOWED", MENTION_RAID_REMOVE_RESTRICTION: "MENTION_RAID_REMOVE_RESTRICTION" };
let obj2 = {
  LEGITIMATE_ACTIVITY: "LEGITIMATE_ACTIVITY",
  LEGITIMATE_ACCOUNTS: "LEGITIMATE_ACCOUNTS",
  LEGITIMATE_DMS: "LEGITIMATE_DMS",
  DM_SPAM: "DM_SPAM",
  JOIN_RAID: "JOIN_RAID",
  OTHER: "OTHER",
};
const result = size.fileFinishedImporting("modules/guild_automod/AutomodFeedback.tsx");

export { Feedback };
export const generateFeedbackOptions = function generateFeedbackOptions() {
  let intl;
  let intl2;
  let obj;
  obj = { name: intl.string(intl3.t["+MbOX4"]), value: obj.BUG };
  intl = intl3.intl;
  const items = [obj];
  obj2 = { name: intl2.string(intl3.t.CRsCRC), value: obj.ALLOWED };
  intl2 = intl3.intl;
  items[1] = obj2;
  return items;
};
export const RaidAlertType = { JOIN_RAID: "JOIN_RAID", MENTION_RAID: "MENTION_RAID" };
export const RaidResolutionType = obj2;
export const getMostImportantRaidResolutionType = function getMostImportantRaidResolutionType(c3) {
  let DM_SPAM;
  if (obj2.includes(obj2.LEGITIMATE_ACTIVITY)) {
    DM_SPAM = obj2.LEGITIMATE_ACTIVITY;
  } else if (obj2.includes(obj2.DM_SPAM)) {
    DM_SPAM = obj2.DM_SPAM;
  } else {
    DM_SPAM = obj2.includes(obj2.JOIN_RAID) ? obj2.JOIN_RAID : obj2.OTHER;
  }
  return DM_SPAM;
};
export const RaidLockdownFeedbackType = {
  DM_SPAM: "DM_SPAM",
  MENTION_SPAM: "MENTION_SPAM",
  CHANNEL_SPAM: "CHANNEL_SPAM",
  SUS_NEW_MEMBERS: "SUS_NEW_MEMBERS",
  CHANGING_SETTINGS: "CHANGING_SETTINGS",
  OTHER: "OTHER",
};
