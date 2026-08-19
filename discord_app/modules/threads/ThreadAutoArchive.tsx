// === Module 8465: getAutoArchiveOptions ===

// Module 8465 (getAutoArchiveOptions)
import obj132 from "obj132" /* 2 */;
import obj132Default from "obj132" /* 687 */;
import memoizeDefault from "memoize" /* 731 */;
import AbortCodes from "AbortCodes" /* 1235 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3975 */;

function getAutoArchiveOptions() {
  let obj = { id: "1hour", label: null, value: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.cs8A1c);
  obj[2] = obj132Default.Minutes.HOUR;
  const items = [obj, , , ];
  obj = { id: "24hours", label: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.zFKbrF);
  obj[2] = obj132Default.Minutes.DAY;
  items[1] = obj;
  obj = { id: "3days", label: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.TmPIZX);
  obj[2] = 3 * obj132Default.Minutes.DAY;
  items[2] = obj;
  obj1 = { id: "1week", label: null, value: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t["/7i2el"]);
  obj1[2] = obj132Default.Minutes.WEEK;
  items[3] = obj1;
  return items;
}
let closure_3 = AbortCodes.DEFAULT_AUTO_ARCHIVE_DURATION;
let items = [obj132Default.Minutes.HOUR, obj132Default.Minutes.DAY, 3 * obj132Default.Minutes.DAY, obj132Default.Minutes.WEEK];
const tmp2 = memoizeDefault(() => getAutoArchiveOptions().map((item, index) => item.value));
const result = obj132.fileFinishedImporting("modules/threads/ThreadAutoArchive.tsx");

export const AUTO_ARCHIVE_OPTION_VALUES = items;
export { getAutoArchiveOptions };
export const getAutoArchiveDurations = tmp2;
export const getAutoArchiveDurationText = function getAutoArchiveDurationText(arg0) {
  closure_0 = arg0;
  const found = getAutoArchiveOptions().find((item, index) => item.value === closure_0);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    label = tDefault.duration(arg0, "minutes").humanize();
    const durationResult = tDefault.duration(arg0, "minutes");
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