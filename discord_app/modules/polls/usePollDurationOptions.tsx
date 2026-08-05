// discord_app/modules/polls/usePollDurationOptions.tsx
import { PollDurations } from "POLL_ATTACHMENT_FOLDER";
import { getSystemLocale } from "../../intl/index.native.tsx";

const result = require("set").fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.ONE_HOUR] = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t["b/mgtw"], { num: 1 });
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.FOUR_HOURS] = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t["b/mgtw"], { num: 4 });
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.EIGHT_HOURS] = intl3.formatToPlainString(getSystemLocale /* getSystemLocale */.t["b/mgtw"], { num: 8 });
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.ONE_DAY] = intl4.formatToPlainString(getSystemLocale /* getSystemLocale */.t["b/mgtw"], { num: 24 });
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.THREE_DAYS] = intl5.string(getSystemLocale /* getSystemLocale */.t.Xn5rX3);
  const intl6 = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.SEVEN_DAYS] = intl6.string(getSystemLocale /* getSystemLocale */.t["Lmq+rj"]);
  const intl7 = getSystemLocale /* getSystemLocale */.intl;
  obj[PollDurations.FOURTEEN_DAYS] = intl7.string(getSystemLocale /* getSystemLocale */.t["mb8A/O"]);
  return Object.freeze(obj);
};