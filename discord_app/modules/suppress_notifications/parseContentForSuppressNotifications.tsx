// === Module 7684: parseContentForSuppressNotifications ===

// Module 7684 (parseContentForSuppressNotifications)
import size from "module_2" /* 2 */;

const regExp = new RegExp("^" + "@silent" + "(\\s|$)");
const result = size.fileFinishedImporting("modules/suppress_notifications/parseContentForSuppressNotifications.tsx");

export default function parseContentForSuppressNotifications(str) {
  if (null == str) {
    const items = [false, ""];
    let items2 = items;
  } else if (null == str.match(regExp)) {
    const items1 = [false, str];
    items2 = items1;
  } else {
    items2 = [true, ];
    str = str.substring(7);
    items2[1] = str.trim();
  }
  return items2;
};
export const SILENT_SENTINEL = "@silent";
export const SILENT_RE = regExp;