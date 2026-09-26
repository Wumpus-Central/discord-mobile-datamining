// === Module 6938: AutomodFeedback ===

// Module 6938 (AutomodFeedback)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const Feedback = { BUG: "BUG", ALLOWED: "ALLOWED", MENTION_RAID_REMOVE_RESTRICTION: "MENTION_RAID_REMOVE_RESTRICTION" };
let obj2 = { LEGITIMATE_ACTIVITY: "LEGITIMATE_ACTIVITY", LEGITIMATE_ACCOUNTS: "LEGITIMATE_ACCOUNTS", LEGITIMATE_DMS: "LEGITIMATE_DMS", DM_SPAM: "DM_SPAM", JOIN_RAID: "JOIN_RAID", OTHER: "OTHER" };
const result = size.fileFinishedImporting("modules/guild_automod/AutomodFeedback.tsx");

export { Feedback };
export const generateFeedbackOptions = function generateFeedbackOptions() {
  const obj = { name: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["+MbOX4"]);
  obj.value = obj.BUG;
  const items = [obj, ];
  obj2 = { name: null, value: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(util.t.CRsCRC);
  obj2.value = obj.ALLOWED;
  items[1] = obj2;
  return items;
};
export const RaidAlertType = { JOIN_RAID: "JOIN_RAID", MENTION_RAID: "MENTION_RAID" };
export const RaidResolutionType = obj2;
export const getMostImportantRaidResolutionType = function getMostImportantRaidResolutionType(c3) {
  if (obj2.includes(obj2.LEGITIMATE_ACTIVITY)) {
    let DM_SPAM = obj2.LEGITIMATE_ACTIVITY;
  } else if (obj2.includes(obj2.DM_SPAM)) {
    DM_SPAM = obj2.DM_SPAM;
  } else {
    DM_SPAM = obj2.includes(obj2.JOIN_RAID) ? obj2.JOIN_RAID : obj2.OTHER;
  }
  return DM_SPAM;
};
export const RaidLockdownFeedbackType = { DM_SPAM: "DM_SPAM", MENTION_SPAM: "MENTION_SPAM", CHANNEL_SPAM: "CHANNEL_SPAM", SUS_NEW_MEMBERS: "SUS_NEW_MEMBERS", CHANGING_SETTINGS: "CHANGING_SETTINGS", OTHER: "OTHER" };