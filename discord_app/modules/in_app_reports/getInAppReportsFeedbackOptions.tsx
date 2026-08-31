// === Module 16905: getInAppReportsFeedbackOptions ===

// Module 16905 (getInAppReportsFeedbackOptions)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

let obj = { COULD_NOT_FIND: "I couldn't find what I was looking for", CONFUSING_LANGUAGE: "I found the language confusing", OTHER: "Other" };
const result = set.fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  obj = { label: null, code: 2, value: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cigGCe);
  obj[2] = obj.COULD_NOT_FIND;
  const items = [obj, , ];
  obj = { label: null, code: 3, value: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.ZyXA0q);
  obj[2] = obj.CONFUSING_LANGUAGE;
  items[1] = obj;
  obj = { label: null, code: 1, value: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.emlT91);
  obj[2] = obj.OTHER;
  items[2] = obj;
  return items;
};
export const InAppReportsFeedbackReasonOption = obj;