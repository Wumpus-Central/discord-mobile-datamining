// discord_app/modules/guild_antiraid/GuildReportRaidModalConstants.tsx
import Constants from "../../Constants.tsx";
import intl6 from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const ReportRaidTypes = {
  DM_SPAM: "DM_SPAM",
  MESSAGE_SPAM: "MESSAGE_SPAM",
  MENTION_SPAM: "MENTION_SPAM",
  SUSPICIOUS_USERS: "SUSPICIOUS_USERS",
  SETTINGS_SPAM: "SETTINGS_SPAM",
};
const items = [, , , ,];
({
  MESSAGE_SPAM: arr[0],
  DM_SPAM: arr[1],
  MENTION_SPAM: arr[2],
  SUSPICIOUS_USERS: arr[3],
  SETTINGS_SPAM: arr[4],
} = ReportRaidTypes);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildReportRaidModalConstants.tsx");

export const getReportRaidHelpArticleURL = function getReportRaidHelpArticleURL() {
  const obj = HelpdeskUtilsDefault;
  return obj.getArticleURL(HelpdeskArticles.GUILD_RAID);
};
export { ReportRaidTypes };
export const REPORT_RAID_OPTIONS = items;
export const getReportRaidTypeLabel = function getReportRaidTypeLabel(arg0) {
  if (obj.DM_SPAM === arg0) {
    const intl5 = intl6.intl;
    return intl5.string(intl6.t["9CYNmS"]);
  } else if (obj.MENTION_SPAM === arg0) {
    const intl4 = intl6.intl;
    return intl4.string(intl6.t["hR/IdO"]);
  } else if (obj.MESSAGE_SPAM === arg0) {
    const intl3 = intl6.intl;
    return intl3.string(intl6.t.fwloj2);
  } else if (obj.SETTINGS_SPAM === arg0) {
    const intl2 = intl6.intl;
    return intl2.string(intl6.t.ETFVFw);
  } else if (obj.SUSPICIOUS_USERS === arg0) {
    const intl = intl6.intl;
    return intl.string(intl6.t["lKXu+n"]);
  } else {
    return null;
  }
};
