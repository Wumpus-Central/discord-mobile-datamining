// discord_app/modules/polls/usePollDurationOptions.tsx
import { PollDurations } from "POLL_ATTACHMENT_FOLDER";

const result = require("set").fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.ONE_HOUR] = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["b/mgtw"], { num: 1 });
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.FOUR_HOURS] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t["b/mgtw"], { num: 4 });
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.EIGHT_HOURS] = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t["b/mgtw"], { num: 8 });
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.ONE_DAY] = intl4.formatToPlainString(require(1236) /* getSystemLocale */.t["b/mgtw"], { num: 24 });
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.THREE_DAYS] = intl5.string(require(1236) /* getSystemLocale */.t.Xn5rX3);
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.SEVEN_DAYS] = intl6.string(require(1236) /* getSystemLocale */.t["Lmq+rj"]);
  const intl7 = require(1236) /* getSystemLocale */.intl;
  obj[PollDurations.FOURTEEN_DAYS] = intl7.string(require(1236) /* getSystemLocale */.t["mb8A/O"]);
  return Object.freeze(obj);
};