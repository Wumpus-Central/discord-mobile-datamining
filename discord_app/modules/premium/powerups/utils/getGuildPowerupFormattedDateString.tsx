// === Module 12172: getGuildPowerupFormattedDateString ===

// Module 12172 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2116 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  const obj = {};
  const merged = Object.assign(date);
  obj.timeZone = "UTC";
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, obj);
};