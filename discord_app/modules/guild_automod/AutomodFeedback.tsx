// discord_app/modules/guild_automod/AutomodFeedback.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";

let obj = { LEGITIMATE_ACTIVITY: "LEGITIMATE_ACTIVITY", LEGITIMATE_ACCOUNTS: "LEGITIMATE_ACCOUNTS", LEGITIMATE_DMS: "LEGITIMATE_DMS", DM_SPAM: "DM_SPAM", JOIN_RAID: "JOIN_RAID", OTHER: "OTHER" };
const result = obj132.fileFinishedImporting("modules/guild_automod/AutomodFeedback.tsx");

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
  if (obj.includes(obj.LEGITIMATE_ACTIVITY)) {
    let DM_SPAM = obj.LEGITIMATE_ACTIVITY;
  } else if (obj.includes(obj.DM_SPAM)) {
    DM_SPAM = obj.DM_SPAM;
  } else {
    DM_SPAM = obj.includes(obj.JOIN_RAID) ? obj.JOIN_RAID : obj.OTHER;
  }
  return DM_SPAM;
};
export const RaidLockdownFeedbackType = { DM_SPAM: "DM_SPAM", MENTION_SPAM: "MENTION_SPAM", CHANNEL_SPAM: "CHANNEL_SPAM", SUS_NEW_MEMBERS: "SUS_NEW_MEMBERS", CHANGING_SETTINGS: "CHANGING_SETTINGS", OTHER: "OTHER" };