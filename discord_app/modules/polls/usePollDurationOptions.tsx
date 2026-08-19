// discord_app/modules/polls/usePollDurationOptions.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import POLL_ATTACHMENT_FOLDER from "PollsConstants.tsx";

const PollDurations = POLL_ATTACHMENT_FOLDER.PollDurations;
const result = obj132.fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const intl = getSystemLocale.intl;
  obj[PollDurations.ONE_HOUR] = intl.formatToPlainString(getSystemLocale.t["b/mgtw"], { num: 1 });
  const intl2 = getSystemLocale.intl;
  obj[PollDurations.FOUR_HOURS] = intl2.formatToPlainString(getSystemLocale.t["b/mgtw"], { num: 4 });
  const intl3 = getSystemLocale.intl;
  obj[PollDurations.EIGHT_HOURS] = intl3.formatToPlainString(getSystemLocale.t["b/mgtw"], { num: 8 });
  const intl4 = getSystemLocale.intl;
  obj[PollDurations.ONE_DAY] = intl4.formatToPlainString(getSystemLocale.t["b/mgtw"], { num: 24 });
  const intl5 = getSystemLocale.intl;
  obj[PollDurations.THREE_DAYS] = intl5.string(getSystemLocale.t.Xn5rX3);
  const intl6 = getSystemLocale.intl;
  obj[PollDurations.SEVEN_DAYS] = intl6.string(getSystemLocale.t["Lmq+rj"]);
  const intl7 = getSystemLocale.intl;
  obj[PollDurations.FOURTEEN_DAYS] = intl7.string(getSystemLocale.t["mb8A/O"]);
  return Object.freeze(obj);
};