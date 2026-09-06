// discord_app/modules/polls/usePollDurationOptions.tsx
import util from "../../intl/index.native.tsx";
import PollsConstants from "PollsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PollDurations = PollsConstants.PollDurations;
const result = size.fileFinishedImporting("modules/polls/usePollDurationOptions.tsx");

export default function usePollDurationOptions() {
  const obj = {};
  const intl = util.intl;
  obj[PollDurations.ONE_HOUR] = intl.formatToPlainString(util.t["b/mgtw"], { num: 1 });
  const intl2 = util.intl;
  obj[PollDurations.FOUR_HOURS] = intl2.formatToPlainString(util.t["b/mgtw"], { num: 4 });
  const intl3 = util.intl;
  obj[PollDurations.EIGHT_HOURS] = intl3.formatToPlainString(util.t["b/mgtw"], { num: 8 });
  const intl4 = util.intl;
  obj[PollDurations.ONE_DAY] = intl4.formatToPlainString(util.t["b/mgtw"], { num: 24 });
  const intl5 = util.intl;
  obj[PollDurations.THREE_DAYS] = intl5.string(util.t.Xn5rX3);
  const intl6 = util.intl;
  obj[PollDurations.SEVEN_DAYS] = intl6.string(util.t["Lmq+rj"]);
  const intl7 = util.intl;
  obj[PollDurations.FOURTEEN_DAYS] = intl7.string(util.t["mb8A/O"]);
  return Object.freeze(obj);
}
