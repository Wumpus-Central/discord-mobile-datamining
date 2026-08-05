// discord_app/modules/in_app_reports/getInAppReportsFeedbackOptions.tsx
import { getSystemLocale } from "../../intl/index.native.tsx";
let obj = { COULD_NOT_FIND: "I couldn't find what I was looking for", CONFUSING_LANGUAGE: "I found the language confusing", OTHER: "Other" };
const result = require("set").fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  let obj = { label: null, code: 2, value: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.cigGCe);
  obj[2] = obj.COULD_NOT_FIND;
  const items = [obj, , ];
  obj = { label: null, code: 3, value: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.ZyXA0q);
  obj[2] = obj.CONFUSING_LANGUAGE;
  items[1] = obj;
  obj = { label: null, code: 1, value: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.emlT91);
  obj[2] = obj.OTHER;
  items[2] = obj;
  return items;
};
export const InAppReportsFeedbackReasonOption = obj;