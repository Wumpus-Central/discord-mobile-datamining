// === Module 12064: getGuildPowerupFormattedDateString ===

// Module 12064 (getGuildPowerupFormattedDateString)
import closure_0 from "_getSystemLocale" /* 1996 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { month: "numeric", day: "numeric" };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};