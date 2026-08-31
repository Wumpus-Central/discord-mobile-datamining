// === Module 7231: Feedback ===

// Module 7231 (Feedback)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

let obj = { BUG: "BUG", ALLOWED: "ALLOWED", MENTION_RAID_REMOVE_RESTRICTION: "MENTION_RAID_REMOVE_RESTRICTION" };
obj = { LEGITIMATE_ACTIVITY: "LEGITIMATE_ACTIVITY", LEGITIMATE_ACCOUNTS: "LEGITIMATE_ACCOUNTS", LEGITIMATE_DMS: "LEGITIMATE_DMS", DM_SPAM: "DM_SPAM", JOIN_RAID: "JOIN_RAID", OTHER: "OTHER" };
const result = set.fileFinishedImporting("modules/guild_automod/AutomodFeedback.tsx");

export const Feedback = obj;
export const generateFeedbackOptions = function generateFeedbackOptions() {
  obj = { name: null, value: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["+MbOX4"]);
  obj[1] = obj.BUG;
  const items = [obj, ];
  obj = { name: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.CRsCRC);
  obj[1] = obj.ALLOWED;
  items[1] = obj;
  return items;
};
export const RaidAlertType = { JOIN_RAID: "JOIN_RAID", MENTION_RAID: "MENTION_RAID" };
export const RaidResolutionType = obj;
export const getMostImportantRaidResolutionType = function getMostImportantRaidResolutionType(c3) {
  if (c3.includes(obj.LEGITIMATE_ACTIVITY)) {
    let DM_SPAM = tmp.LEGITIMATE_ACTIVITY;
  } else if (c3.includes(tmp.DM_SPAM)) {
    DM_SPAM = tmp.DM_SPAM;
  } else {
    DM_SPAM = c3.includes(tmp.JOIN_RAID) ? tmp.JOIN_RAID : tmp.OTHER;
  }
  return DM_SPAM;
};
export const RaidLockdownFeedbackType = { DM_SPAM: "DM_SPAM", MENTION_SPAM: "MENTION_SPAM", CHANNEL_SPAM: "CHANNEL_SPAM", SUS_NEW_MEMBERS: "SUS_NEW_MEMBERS", CHANGING_SETTINGS: "CHANGING_SETTINGS", OTHER: "OTHER" };