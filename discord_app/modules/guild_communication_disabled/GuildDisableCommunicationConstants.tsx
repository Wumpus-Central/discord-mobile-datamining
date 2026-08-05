import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx
import importDefaultResult from "combined";

const require = arg1;
function getFriendlyDurationString(arg0) {
  if (obj.DURATION_60_SEC === arg0) {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    return intl6.formatToPlainString(getSystemLocale /* getSystemLocale */.t["4zv/jq"], { secs: 60 });
  } else if (tmp.DURATION_5_MIN === arg0) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.formatToPlainString(getSystemLocale /* getSystemLocale */.t.opVZ9q, { mins: 5 });
  } else if (tmp.DURATION_10_MIN === arg0) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.formatToPlainString(getSystemLocale /* getSystemLocale */.t.opVZ9q, { mins: 10 });
  } else if (tmp.DURATION_1_HOUR === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.formatToPlainString(getSystemLocale /* getSystemLocale */.t.xCjYxK, { hours: 1 });
  } else if (tmp.DURATION_1_DAY === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t["k2UNz+"], { days: 1 });
  } else if (tmp.DURATION_1_WEEK === arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.EmoBD2, { weeks: 1 });
  }
}
let obj = { DURATION_60_SEC: 60, [60]: "DURATION_60_SEC", DURATION_5_MIN: 300, [300]: "DURATION_5_MIN", DURATION_10_MIN: 600, [600]: "DURATION_10_MIN", DURATION_1_HOUR: 3600, [3600]: "DURATION_1_HOUR", DURATION_1_DAY: 86400, [86400]: "DURATION_1_DAY", DURATION_1_WEEK: 604800, [604800]: "DURATION_1_WEEK" };
const articleURL = require("combined").getArticleURL(require("ME").HelpdeskArticles.DISABLE_GUILD_COMMUNICATION);
const result = require("combined").fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx");

export const DisableCommunicationDuration = obj;
export { getFriendlyDurationString };
export const getDisableCommunicationDurationOptions = () => {
  const keys = Object.keys(obj);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  return found.map((id) => {
    const obj = { id, label: null, value: null };
    let str = callback(table[id]);
    if (str == null) {
      str = "";
    }
    obj[1] = str;
    obj[2] = table[id];
    return obj;
  });
};
export const GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK = articleURL;
export const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = "GuildCommunicationDisabledDismissedGuilds";
export const SET_COMMUNICATION_DISABLED_MODAL_NAME = "Set Communication Disabled Modal";
export const CLEAR_COMMUNICATION_DISABLED_MODAL_NAME = "Clear Communication Disabled Modal";
export const MAX_REASON_LENGTH = 512;