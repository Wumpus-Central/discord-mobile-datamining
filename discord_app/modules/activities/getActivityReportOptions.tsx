// === Module 17567: getActivityReportOptions ===

// Module 17567 (getActivityReportOptions)
import util from "util" /* 1115 */;
import Constants from "Constants" /* 1921 */;
import size from "module_2" /* 2 */;

const ActivityFeedbackReasons = Constants.ActivityFeedbackReasons;
const result = size.fileFinishedImporting("modules/activities/getActivityReportOptions.tsx");

export default function getActivityReportOptions(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { value: ActivityFeedbackReasons.FAILED_LOAD, label: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg0) {
    let stringResult = string(t.uaiF6B);
    let tmp6 = require;
  } else {
    stringResult = string(t.aO6OMZ);
    tmp6 = require;
  }
  obj.label = stringResult;
  const items = [obj, , , , ];
  const obj2 = { value: ActivityFeedbackReasons.LAGGING, label: null };
  const intl2 = tmp6(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1115).t;
  if (arg0) {
    let string2Result = string2(t2["/nJOlj"]);
  } else {
    string2Result = string2(t2["79HFwf"]);
  }
  obj2.label = string2Result;
  items[1] = obj2;
  const obj3 = { value: ActivityFeedbackReasons.CONFUSING, label: null };
  const intl3 = tmp6(1115).intl;
  const string3 = intl3.string;
  const t3 = tmp6(1115).t;
  if (arg0) {
    let string3Result = string3(t3["/8psS7"]);
  } else {
    string3Result = string3(t3.iSv55N);
  }
  obj3.label = string3Result;
  items[2] = obj3;
  const obj4 = { value: ActivityFeedbackReasons.NOT_FUN, label: null };
  const intl4 = tmp6(1115).intl;
  const string4 = intl4.string;
  const t4 = tmp6(1115).t;
  if (arg0) {
    let string4Result = string4(t4["7GVmLm"]);
  } else {
    string4Result = string4(t4.GnVff5);
  }
  obj4.label = string4Result;
  items[3] = obj4;
  const obj5 = { value: ActivityFeedbackReasons.OTHER, label: null };
  const intl5 = tmp6(1115).intl;
  obj5.label = intl5.string(tmp6(1115).t.emlT91);
  items[4] = obj5;
  if (!flag) {
    return items;
  } else {
    let obj6 = { value: ActivityFeedbackReasons.ADS, label: null };
    const intl6 = tmp6(1115).intl;
    const string5 = intl6.string;
    let t1 = tmp6(1115).t;
    if (arg0) {
      t1 = t1["5o1UL6"];
      let string5Result = string5(t1);
    } else {
      string5Result = string5(t1.XeeDhK);
    }
    obj6.label = string5Result;
    obj6 = items.push(obj6);
  }
};