// === Module 13425: COMMUNITY_PORTAL_SERVER_SAFETY_PAGE ===

// Module 13425 (COMMUNITY_PORTAL_SERVER_SAFETY_PAGE)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const obj = { DM_SPAM: "DM_SPAM", MESSAGE_SPAM: "MESSAGE_SPAM", MENTION_SPAM: "MENTION_SPAM", SUSPICIOUS_USERS: "SUSPICIOUS_USERS", SETTINGS_SPAM: "SETTINGS_SPAM" };
const items = [, , , , ];
({ MESSAGE_SPAM: arr[0], DM_SPAM: arr[1], MENTION_SPAM: arr[2], SUSPICIOUS_USERS: arr[3], SETTINGS_SPAM: arr[4] } = obj);
const result = set.fileFinishedImporting("modules/guild_antiraid/GuildReportRaidModalConstants.tsx");

export const COMMUNITY_PORTAL_SERVER_SAFETY_PAGE = "https://discord.com/community/securing-your-server";
export const ReportRaidTypes = obj;
export const REPORT_RAID_OPTIONS = items;
export const getReportRaidTypeLabel = function getReportRaidTypeLabel(arg0) {
  if (obj.DM_SPAM === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["9CYNmS"]);
  } else if (tmp.MENTION_SPAM === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["hR/IdO"]);
  } else if (tmp.MESSAGE_SPAM === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.fwloj2);
  } else if (tmp.SETTINGS_SPAM === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.ETFVFw);
  } else if (tmp.SUSPICIOUS_USERS === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["lKXu+n"]);
  } else {
    return null;
  }
};