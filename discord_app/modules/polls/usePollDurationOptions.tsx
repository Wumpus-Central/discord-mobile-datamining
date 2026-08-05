// discord_app/modules/polls/usePollDurationOptions.tsx
import { PollDurations } from "POLL_ATTACHMENT_FOLDER";

const result = require("set").fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.ONE_HOUR] = intl.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["b/mgtw"], { num: 1 });
  const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.FOUR_HOURS] = intl2.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["b/mgtw"], { num: 4 });
  const intl3 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.EIGHT_HOURS] = intl3.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["b/mgtw"], { num: 8 });
  const intl4 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.ONE_DAY] = intl4.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t["b/mgtw"], { num: 24 });
  const intl5 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.THREE_DAYS] = intl5.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.Xn5rX3);
  const intl6 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.SEVEN_DAYS] = intl6.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["Lmq+rj"]);
  const intl7 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[PollDurations.FOURTEEN_DAYS] = intl7.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["mb8A/O"]);
  return Object.freeze(obj);
};