// discord_app/modules/threads/ThreadAutoArchive.tsx
import memoizeDefault from "../../../_runtime/00595_memoize.js";
import DurationsDefault from "../../utils/Durations.tsx";
import ThreadConstants from "ThreadConstants.tsx";
import util from "../../intl/index.native.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import size from "../../../_runtime/metro/00002__.js";

function getAutoArchiveOptions() {
  let obj = { id: "1hour", label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.cs8A1c);
  obj.value = DurationsDefault.Minutes.HOUR;
  const items = [obj, , ,];
  obj = { id: "24hours", label: null, value: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.zFKbrF);
  obj.value = DurationsDefault.Minutes.DAY;
  items[1] = obj;
  obj = { id: "3days", label: null, value: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.TmPIZX);
  obj.value = 3 * DurationsDefault.Minutes.DAY;
  items[2] = obj;
  const obj1 = { id: "1week", label: null, value: null };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t["/7i2el"]);
  obj1.value = DurationsDefault.Minutes.WEEK;
  items[3] = obj1;
  return items;
}
let closure_3 = ThreadConstants.DEFAULT_AUTO_ARCHIVE_DURATION;
let items = [
  DurationsDefault.Minutes.HOUR,
  DurationsDefault.Minutes.DAY,
  3 * DurationsDefault.Minutes.DAY,
  DurationsDefault.Minutes.WEEK,
];
const result = size.fileFinishedImporting("modules/threads/ThreadAutoArchive.tsx");

export const AUTO_ARCHIVE_OPTION_VALUES = items;
export { getAutoArchiveOptions };
export const getAutoArchiveDurations = memoizeDefault(() => getAutoArchiveOptions().map((value) => value.value));
export const getAutoArchiveDurationText = function getAutoArchiveDurationText(arg0) {
  closure_0 = arg0;
  const found = getAutoArchiveOptions().find((value) => value.value === closure_0);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    label = _modDef4153.duration(arg0, "minutes").humanize();
    const durationResult = _modDef4153.duration(arg0, "minutes");
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
