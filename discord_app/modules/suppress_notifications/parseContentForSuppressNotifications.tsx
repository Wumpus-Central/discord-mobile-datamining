// === Module 7375: regExp ===

// Module 7375 (regExp)
import set from "set" /* 2 */;

const regExp = new RegExp("^" + "@silent" + "(\\s|$)");
const result = set.fileFinishedImporting("modules/suppress_notifications/parseContentForSuppressNotifications.tsx");

export default function parseContentForSuppressNotifications(str) {
  if (null == str) {
    const items = [false, ""];
    let items2 = items;
  } else if (null == str.match(regExp)) {
    const items1 = [false, str];
    items2 = items1;
  } else {
    items2 = [true, str.substring(7).trim()];
    str = str.substring(7);
  }
  return items2;
};
export const SILENT_SENTINEL = "@silent";
export const SILENT_RE = regExp;