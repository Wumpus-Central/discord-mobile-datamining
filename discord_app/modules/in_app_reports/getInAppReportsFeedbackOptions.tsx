let obj = { COULD_NOT_FIND: "I couldn't find what I was looking for", CONFUSING_LANGUAGE: "I found the language confusing", OTHER: "Other" };
const result = require("set").fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  let obj = { label: null, code: 2, value: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.cigGCe);
  obj[2] = obj.COULD_NOT_FIND;
  const items = [obj, , ];
  obj = { label: null, code: 3, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.ZyXA0q);
  obj[2] = obj.CONFUSING_LANGUAGE;
  items[1] = obj;
  obj = { label: null, code: 1, value: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.emlT91);
  obj[2] = obj.OTHER;
  items[2] = obj;
  return items;
};
export const InAppReportsFeedbackReasonOption = obj;