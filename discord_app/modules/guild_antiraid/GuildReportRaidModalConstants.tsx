// discord_app/modules/guild_antiraid/GuildReportRaidModalConstants.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";

const obj = { DM_SPAM: "DM_SPAM", MESSAGE_SPAM: "MESSAGE_SPAM", MENTION_SPAM: "MENTION_SPAM", SUSPICIOUS_USERS: "SUSPICIOUS_USERS", SETTINGS_SPAM: "SETTINGS_SPAM" };
const items = [, , , , ];
({ MESSAGE_SPAM: arr[0], DM_SPAM: arr[1], MENTION_SPAM: arr[2], SUSPICIOUS_USERS: arr[3], SETTINGS_SPAM: arr[4] } = obj);
const result = obj132.fileFinishedImporting("modules/guild_antiraid/GuildReportRaidModalConstants.tsx");

export const COMMUNITY_PORTAL_SERVER_SAFETY_PAGE = "https://discord.com/community/securing-your-server";
export const ReportRaidTypes = obj;
export const REPORT_RAID_OPTIONS = items;
export const getReportRaidTypeLabel = function getReportRaidTypeLabel(arg0) {
  if (obj.DM_SPAM === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["9CYNmS"]);
  } else if (obj.MENTION_SPAM === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["hR/IdO"]);
  } else if (obj.MESSAGE_SPAM === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.fwloj2);
  } else if (obj.SETTINGS_SPAM === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.ETFVFw);
  } else if (obj.SUSPICIOUS_USERS === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["lKXu+n"]);
  } else {
    return null;
  }
};