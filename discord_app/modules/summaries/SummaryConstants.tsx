// === Module 10903: result ===

// Module 10903 (result)
import setDefault from "set" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

require = arg1;
let obj = { DUPLICATED: "DUPLICATED", TOO_GENERIC: "TOO_GENERIC", TOO_MANY: "TOO_MANY", INACCURATE: "INACCURATE", NOT_USEFUL: "NOT_USEFUL", OTHER: "OTHER" };
const result = 5 * setDefault.Millis.SECOND;
const result1 = require("set").fileFinishedImporting("modules/summaries/SummaryConstants.tsx");

export const SUMMARY_POLL_INTERVAL = result;
export const SummariesSidebarToggledSource = { TOOLBAR_BUTTON: "toolbar button", PILL: "pill" };
export const SummariesTopicClickedSource = { SIDEBAR: "sidebar", PILL_DROPDOWN: "pill dropdown", PILL_NEXT_ARROW: "pill next arrow", PILL_PREVIOUS_ARROW: "pill previous arrow" };
export const SummaryFeedbackReasons = obj;
export const getSummaryFeedbackReasons = function getSummaryFeedbackReasons() {
  obj = { value: obj.DUPLICATED, label: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.wwXl5h);
  const items = [obj, , , , , ];
  obj = { value: obj.TOO_GENERIC, label: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["t+6knu"]);
  items[1] = obj;
  obj = { value: obj.TOO_MANY, label: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.xnKDnv);
  items[2] = obj;
  obj1 = { value: obj.INACCURATE, label: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t.JW5VFj);
  items[3] = obj1;
  const obj2 = { value: obj.NOT_USEFUL, label: null };
  const intl5 = getSystemLocale.intl;
  obj2[1] = intl5.string(getSystemLocale.t.ZtCNiY);
  items[4] = obj2;
  const obj3 = { value: obj.OTHER, label: null };
  const intl6 = getSystemLocale.intl;
  obj3[1] = intl6.string(getSystemLocale.t.BufsKk);
  items[5] = obj3;
  return items;
};