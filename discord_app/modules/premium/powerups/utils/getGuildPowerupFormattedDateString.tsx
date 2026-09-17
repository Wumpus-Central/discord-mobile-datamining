// === Module 12652: getGuildPowerupFormattedDateString ===

// Module 12652 (getGuildPowerupFormattedDateString)
import LocaleStore from "LocaleStore" /* 2026 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let date = arg1;
  if (arg1 === undefined) {
    date = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(LocaleStore.locale, date);
};