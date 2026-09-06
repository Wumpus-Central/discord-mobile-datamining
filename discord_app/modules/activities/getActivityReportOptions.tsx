// discord_app/modules/activities/getActivityReportOptions.tsx
import util from "../../intl/index.native.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ActivityFeedbackReasons = Constants.ActivityFeedbackReasons;
const result = size.fileFinishedImporting("modules/activities/getActivityReportOptions.tsx");

export default function getActivityReportOptions(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = { value: ActivityFeedbackReasons.FAILED_LOAD, label: null };
  const intl = util.intl;
  const string = intl.string;
  let t = util.t;
  if (arg0) {
    let stringResult = string(t.uaiF6B);
    let tmp6 = tmp2;
  } else {
    stringResult = string(t.aO6OMZ);
    tmp6 = tmp2;
  }
  obj.label = stringResult;
  const items = [obj, , , ,];
  obj = { value: tmp.LAGGING, label: null };
  const intl2 = tmp6(1114).intl;
  const string2 = intl2.string;
  const t2 = tmp6(1114).t;
  if (arg0) {
    let string2Result = string2(t2["/nJOlj"]);
  } else {
    string2Result = string2(t2["79HFwf"]);
  }
  obj.label = string2Result;
  items[1] = obj;
  obj = { value: tmp.CONFUSING, label: null };
  const intl3 = tmp6(1114).intl;
  const string3 = intl3.string;
  const t3 = tmp6(1114).t;
  if (arg0) {
    let string3Result = string3(t3["/8psS7"]);
  } else {
    string3Result = string3(t3.iSv55N);
  }
  obj.label = string3Result;
  items[2] = obj;
  const obj1 = { value: ActivityFeedbackReasons.NOT_FUN, label: null };
  const intl4 = tmp6(1114).intl;
  const string4 = intl4.string;
  const t4 = tmp6(1114).t;
  if (arg0) {
    let string4Result = string4(t4["7GVmLm"]);
  } else {
    string4Result = string4(t4.GnVff5);
  }
  obj1.label = string4Result;
  items[3] = obj1;
  const obj2 = { value: ActivityFeedbackReasons.OTHER, label: null };
  const intl5 = tmp6(1114).intl;
  obj2.label = intl5.string(tmp6(1114).t.emlT91);
  items[4] = obj2;
  if (!flag) {
    return items;
  } else {
    let obj3 = { value: tmp.ADS, label: null };
    const intl6 = tmp6(1114).intl;
    const string5 = intl6.string;
    t = tmp6(1114).t;
    if (arg0) {
      t = t["5o1UL6"];
      let string5Result = string5(t);
    } else {
      string5Result = string5(t.XeeDhK);
    }
    obj3.label = string5Result;
    obj3 = items.push(obj3);
  }
}
