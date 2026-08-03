// === Module 8155: getAutoArchiveOptions ===

// Module 8155 (getAutoArchiveOptions)
import { DEFAULT_AUTO_ARCHIVE_DURATION as closure_3 } from "AbortCodes";

function getAutoArchiveOptions() {
  let obj = { id: "1hour", label: null, value: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.cs8A1c);
  obj[2] = importDefault(687).Minutes.HOUR;
  const items = [obj, , , ];
  obj = { id: "24hours", label: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.zFKbrF);
  obj[2] = importDefault(687).Minutes.DAY;
  items[1] = obj;
  obj = { id: "3days", label: null, value: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.TmPIZX);
  obj[2] = 3 * importDefault(687).Minutes.DAY;
  items[2] = obj;
  const obj1 = { id: "1week", label: null, value: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t["/7i2el"]);
  obj1[2] = importDefault(687).Minutes.WEEK;
  items[3] = obj1;
  return items;
}
let items = [require("set").Minutes.HOUR, require("set").Minutes.DAY, 3 * require("set").Minutes.DAY, require("set").Minutes.WEEK];
const tmp2 = require("memoize")(() => getAutoArchiveOptions().map((value) => value.value));
const result = require("getSystemLocale").fileFinishedImporting("modules/threads/ThreadAutoArchive.tsx");

export const AUTO_ARCHIVE_OPTION_VALUES = items;
export { getAutoArchiveOptions };
export const getAutoArchiveDurations = tmp2;
export const getAutoArchiveDurationText = function getAutoArchiveDurationText(arg0) {
  let closure_0 = arg0;
  const found = getAutoArchiveOptions().find((value) => value.value === closure_0);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    const obj = importDefault(3837);
    label = importDefault(3837).duration(arg0, "minutes").humanize();
    const durationResult = importDefault(3837).duration(arg0, "minutes");
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