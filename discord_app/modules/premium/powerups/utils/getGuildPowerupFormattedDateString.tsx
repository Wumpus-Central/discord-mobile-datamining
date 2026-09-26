// === Module 11994: getGuildPowerupFormattedDateString ===

// Module 11994 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2112 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, date);
};