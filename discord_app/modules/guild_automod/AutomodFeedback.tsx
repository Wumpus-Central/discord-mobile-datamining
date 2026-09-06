// === Module 7518: AutomodFeedback ===

// Module 7518 (AutomodFeedback)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

let obj = { BUG: "BUG", ALLOWED: "ALLOWED", MENTION_RAID_REMOVE_RESTRICTION: "MENTION_RAID_REMOVE_RESTRICTION" };
obj = { LEGITIMATE_ACTIVITY: "LEGITIMATE_ACTIVITY", LEGITIMATE_ACCOUNTS: "LEGITIMATE_ACCOUNTS", LEGITIMATE_DMS: "LEGITIMATE_DMS", DM_SPAM: "DM_SPAM", JOIN_RAID: "JOIN_RAID", OTHER: "OTHER" };
const result = size.fileFinishedImporting("modules/guild_automod/AutomodFeedback.tsx");

export const Feedback = obj;
export const generateFeedbackOptions = function generateFeedbackOptions() {
  obj = { name: null, value: null };
  const intl = util.intl;
  obj.name = intl.string(util.t["+MbOX4"]);
  obj.value = obj.BUG;
  const items = [obj, ];
  obj = { name: null, value: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.CRsCRC);
  obj.value = obj.ALLOWED;
  items[1] = obj;
  return items;
};
export const RaidAlertType = { JOIN_RAID: "JOIN_RAID", MENTION_RAID: "MENTION_RAID" };
export const RaidResolutionType = obj;
export const getMostImportantRaidResolutionType = function getMostImportantRaidResolutionType(c3) {
  if (c3.includes(obj.LEGITIMATE_ACTIVITY)) {
    let DM_SPAM = obj.LEGITIMATE_ACTIVITY;
  } else if (c3.includes(obj.DM_SPAM)) {
    DM_SPAM = obj.DM_SPAM;
  } else {
    DM_SPAM = c3.includes(obj.JOIN_RAID) ? obj.JOIN_RAID : obj.OTHER;
  }
  return DM_SPAM;
};
export const RaidLockdownFeedbackType = { DM_SPAM: "DM_SPAM", MENTION_SPAM: "MENTION_SPAM", CHANNEL_SPAM: "CHANNEL_SPAM", SUS_NEW_MEMBERS: "SUS_NEW_MEMBERS", CHANGING_SETTINGS: "CHANGING_SETTINGS", OTHER: "OTHER" };