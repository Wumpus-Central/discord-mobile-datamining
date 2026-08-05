// discord_app/modules/guild_antiraid/GuildReportRaidModalConstants.tsx
import { getSystemLocale } from "../../intl/index.native.tsx";
const obj = { DM_SPAM: "DM_SPAM", MESSAGE_SPAM: "MESSAGE_SPAM", MENTION_SPAM: "MENTION_SPAM", SUSPICIOUS_USERS: "SUSPICIOUS_USERS", SETTINGS_SPAM: "SETTINGS_SPAM" };
const items = [, , , , ];
({ MESSAGE_SPAM: arr[0], DM_SPAM: arr[1], MENTION_SPAM: arr[2], SUSPICIOUS_USERS: arr[3], SETTINGS_SPAM: arr[4] } = obj);
const result = require("set").fileFinishedImporting("modules/guild_antiraid/GuildReportRaidModalConstants.tsx");

export const COMMUNITY_PORTAL_SERVER_SAFETY_PAGE = "https://discord.com/community/securing-your-server";
export const ReportRaidTypes = obj;
export const REPORT_RAID_OPTIONS = items;
export const getReportRaidTypeLabel = function getReportRaidTypeLabel(arg0) {
  if (obj.DM_SPAM === arg0) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.string(getSystemLocale /* getSystemLocale */.t["9CYNmS"]);
  } else if (tmp.MENTION_SPAM === arg0) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.string(getSystemLocale /* getSystemLocale */.t["hR/IdO"]);
  } else if (tmp.MESSAGE_SPAM === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.fwloj2);
  } else if (tmp.SETTINGS_SPAM === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.ETFVFw);
  } else if (tmp.SUSPICIOUS_USERS === arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["lKXu+n"]);
  } else {
    return null;
  }
};