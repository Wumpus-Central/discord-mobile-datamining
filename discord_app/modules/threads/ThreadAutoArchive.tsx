// discord_app/modules/threads/ThreadAutoArchive.tsx
import memoizeDefault from "../../../_runtime/00606_memoize.js";
import DurationsDefault from "../../utils/Durations.tsx";
import ThreadConstants from "ThreadConstants.tsx";
import intl5 from "../../intl/index.native.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import size from "../../../_runtime/metro/00002__.js";

function getAutoArchiveOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = { id: "1hour", label: intl.string(intl5.t.cs8A1c), value: DurationsDefault.Minutes.HOUR };
  intl = intl5.intl;
  const items = [obj, , ,];
  const obj2 = { id: "24hours", label: intl2.string(intl5.t.zFKbrF), value: DurationsDefault.Minutes.DAY };
  intl2 = intl5.intl;
  items[1] = obj2;
  const obj3 = { id: "3days", label: intl3.string(intl5.t.TmPIZX), value: 3 * DurationsDefault.Minutes.DAY };
  intl3 = intl5.intl;
  items[2] = obj3;
  const obj4 = { id: "1week", label: intl4.string(intl5.t["/7i2el"]), value: DurationsDefault.Minutes.WEEK };
  intl4 = intl5.intl;
  items[3] = obj4;
  return items;
}
let closure_3 = ThreadConstants.DEFAULT_AUTO_ARCHIVE_DURATION;
let items = [
  DurationsDefault.Minutes.HOUR,
  DurationsDefault.Minutes.DAY,
  3 * DurationsDefault.Minutes.DAY,
  DurationsDefault.Minutes.WEEK,
];
const tmp2 = memoizeDefault(() => {
  const arr = getAutoArchiveOptions();
  return arr.map((value) => value.value);
});
const result = size.fileFinishedImporting("modules/threads/ThreadAutoArchive.tsx");

export const AUTO_ARCHIVE_OPTION_VALUES = items;
export { getAutoArchiveOptions };
export const getAutoArchiveDurations = tmp2;
export const getAutoArchiveDurationText = function getAutoArchiveDurationText(arg0) {
  let closure_0 = arg0;
  const arr = getAutoArchiveOptions();
  const found = arr.find((value) => value.value === closure_0);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    const obj = _modDef4467;
    const durationResult = obj.duration(arg0, "minutes");
    label = durationResult.humanize();
  }
  return label;
};
export const getAutoArchiveDuration = function getAutoArchiveDuration(channel, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    let prop;
    if (channel != null) {
      prop = channel.defaultAutoArchiveDuration;
    }
    tmp = prop;
  }
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
