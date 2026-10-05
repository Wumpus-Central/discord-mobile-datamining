// === Module 16644: getActivityReportOptions ===

// Module 16644 (getActivityReportOptions)
import intl7 from "intl" /* 1126 */;
import Constants from "Constants" /* 2011 */;
import size from "module_2" /* 2 */;

const ActivityFeedbackReasons = Constants.ActivityFeedbackReasons;
const result = size.fileFinishedImporting("modules/activities/getActivityReportOptions.tsx");

export default function getActivityReportOptions(arg0) {
  let intl5;
  let string2Result;
  let string3Result;
  let string4Result;
  let string5Result;
  let stringResult;
  let tmp6;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { value: ActivityFeedbackReasons.FAILED_LOAD, label: stringResult };
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (arg0) {
    stringResult = string(t.uaiF6B);
    tmp6 = require;
  } else {
    stringResult = string(t.aO6OMZ);
    tmp6 = require;
  }
  const items = [obj, , , , ];
  const obj2 = { value: ActivityFeedbackReasons.LAGGING, label: string2Result };
  const intl2 = tmp6(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1126).t;
  if (arg0) {
    string2Result = string2(t2["/nJOlj"]);
  } else {
    string2Result = string2(t2["79HFwf"]);
  }
  items[1] = obj2;
  const obj3 = { value: ActivityFeedbackReasons.CONFUSING, label: string3Result };
  const intl3 = tmp6(1126).intl;
  const string3 = intl3.string;
  const t3 = tmp6(1126).t;
  if (arg0) {
    string3Result = string3(t3["/8psS7"]);
  } else {
    string3Result = string3(t3.iSv55N);
  }
  items[2] = obj3;
  const obj4 = { value: ActivityFeedbackReasons.NOT_FUN, label: string4Result };
  const intl4 = tmp6(1126).intl;
  const string4 = intl4.string;
  const t4 = tmp6(1126).t;
  if (arg0) {
    string4Result = string4(t4["7GVmLm"]);
  } else {
    string4Result = string4(t4.GnVff5);
  }
  items[3] = obj4;
  const obj5 = { value: ActivityFeedbackReasons.OTHER, label: intl5.string(tmp6(1126).t.emlT91) };
  intl5 = tmp6(1126).intl;
  items[4] = obj5;
  if (flag) {
    const push = items.push;
    const obj6 = { value: ActivityFeedbackReasons.ADS, label: string5Result };
    const intl6 = tmp6(1126).intl;
    const string5 = intl6.string;
    const t5 = tmp6(1126).t;
    if (arg0) {
      string5Result = string5(t5["5o1UL6"]);
    } else {
      string5Result = string5(t5.XeeDhK);
    }
    push(obj6);
  }
  return items;
};