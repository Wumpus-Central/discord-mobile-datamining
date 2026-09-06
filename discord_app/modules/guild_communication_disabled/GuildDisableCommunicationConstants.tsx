// === Module 2023: GuildDisableCommunicationConstants ===

// Module 2023 (GuildDisableCommunicationConstants)
import util from "util" /* 1114 */;
import HelpdeskUtils from "HelpdeskUtils" /* 2024 */;

require = fn;
function getFriendlyDurationString(arg0) {
  if (obj.DURATION_60_SEC === arg0) {
    const intl6 = util.intl;
    return intl6.formatToPlainString(util.t["4zv/jq"], { secs: 60 });
  } else if (tmp.DURATION_5_MIN === arg0) {
    const intl5 = util.intl;
    return intl5.formatToPlainString(util.t.opVZ9q, { mins: 5 });
  } else if (tmp.DURATION_10_MIN === arg0) {
    const intl4 = util.intl;
    return intl4.formatToPlainString(util.t.opVZ9q, { mins: 10 });
  } else if (tmp.DURATION_1_HOUR === arg0) {
    const intl3 = util.intl;
    return intl3.formatToPlainString(util.t.xCjYxK, { hours: 1 });
  } else if (tmp.DURATION_1_DAY === arg0) {
    const intl2 = util.intl;
    return intl2.formatToPlainString(util.t["k2UNz+"], { days: 1 });
  } else if (tmp.DURATION_1_WEEK === arg0) {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.EmoBD2, { weeks: 1 });
  }
}
const DisableCommunicationDuration = { DURATION_60_SEC: 60, [60]: "DURATION_60_SEC", DURATION_5_MIN: 300, [300]: "DURATION_5_MIN", DURATION_10_MIN: 600, [600]: "DURATION_10_MIN", DURATION_1_HOUR: 3600, [3600]: "DURATION_1_HOUR", DURATION_1_DAY: 86400, [86400]: "DURATION_1_DAY", DURATION_1_WEEK: 604800, [604800]: "DURATION_1_WEEK" };
const articleURL = HelpdeskUtils.getArticleURL(fn(1074).HelpdeskArticles.DISABLE_GUILD_COMMUNICATION);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx");

export { DisableCommunicationDuration };
export { getFriendlyDurationString };
export const getDisableCommunicationDurationOptions = () => {
  const keys = Object.keys(obj);
  const found = keys.filter((item) => isNaN(Number(item)));
  return found.map((id) => {
    const obj = { id, label: null, value: null };
    let str = getFriendlyDurationString(DisableCommunicationDuration[id]);
    if (str == null) {
      str = "";
    }
    obj.label = str;
    obj.value = DisableCommunicationDuration[id];
    return obj;
  });
};
export const GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK = articleURL;
export const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = "GuildCommunicationDisabledDismissedGuilds";
export const SET_COMMUNICATION_DISABLED_MODAL_NAME = "Set Communication Disabled Modal";
export const CLEAR_COMMUNICATION_DISABLED_MODAL_NAME = "Clear Communication Disabled Modal";
export const MAX_REASON_LENGTH = 512;