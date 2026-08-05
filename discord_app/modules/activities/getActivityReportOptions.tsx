import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/activities/getActivityReportOptions.tsx
import { ActivityFeedbackReasons } from "items3";

const result = require("set").fileFinishedImporting("modules/activities/getActivityReportOptions.tsx");

export default function getActivityReportOptions(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = { value: ActivityFeedbackReasons.FAILED_LOAD, label: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  const string = intl.string;
  const t = getSystemLocale /* getSystemLocale */.t;
  if (arg0) {
    let stringResult = string(t.uaiF6B);
    let tmp6 = tmp2;
  } else {
    stringResult = string(t.aO6OMZ);
    tmp6 = tmp2;
  }
  obj[1] = stringResult;
  const items = [obj, , , , ];
  obj = { value: tmp.LAGGING, label: null };
  const intl2 = tmp6(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1236).t;
  if (arg0) {
    let string2Result = string2(t2["/nJOlj"]);
  } else {
    string2Result = string2(t2["79HFwf"]);
  }
  obj[1] = string2Result;
  items[1] = obj;
  obj = { value: tmp.CONFUSING, label: null };
  const intl3 = tmp6(1236).intl;
  const string3 = intl3.string;
  const t3 = tmp6(1236).t;
  if (arg0) {
    let string3Result = string3(t3["/8psS7"]);
  } else {
    string3Result = string3(t3.iSv55N);
  }
  obj[1] = string3Result;
  items[2] = obj;
  const obj1 = { value: ActivityFeedbackReasons.NOT_FUN, label: null };
  const intl4 = tmp6(1236).intl;
  const string4 = intl4.string;
  const t4 = tmp6(1236).t;
  if (arg0) {
    let string4Result = string4(t4["7GVmLm"]);
  } else {
    string4Result = string4(t4.GnVff5);
  }
  obj1[1] = string4Result;
  items[3] = obj1;
  const obj2 = { value: ActivityFeedbackReasons.OTHER, label: null };
  const intl5 = tmp6(1236).intl;
  obj2[1] = intl5.string(tmp6(1236).t.emlT91);
  items[4] = obj2;
  if (!flag) {
    return items;
  } else {
    let obj3 = { value: null, label: null };
    obj3[0] = tmp.ADS;
    const intl6 = tmp6(1236).intl;
    const string5 = intl6.string;
    if (arg0) {
      let string5Result = string5(_5o1UL6);
    } else {
      string5Result = string5(_5o1UL6.XeeDhK);
    }
    obj3[1] = string5Result;
    obj3 = items.push(obj3);
  }
};