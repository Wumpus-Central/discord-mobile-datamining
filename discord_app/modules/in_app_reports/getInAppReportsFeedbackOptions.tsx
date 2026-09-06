// discord_app/modules/in_app_reports/getInAppReportsFeedbackOptions.tsx
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const InAppReportsFeedbackReasonOption = {
  COULD_NOT_FIND: "I couldn't find what I was looking for",
  CONFUSING_LANGUAGE: "I found the language confusing",
  OTHER: "Other",
};
const result = size.fileFinishedImporting("modules/in_app_reports/getInAppReportsFeedbackOptions.tsx");

export default function getInAppReportsFeedbackOptions() {
  let obj = { label: null, code: 2, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.cigGCe);
  obj.value = obj.COULD_NOT_FIND;
  const items = [obj, ,];
  obj = { label: null, code: 3, value: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.ZyXA0q);
  obj.value = obj.CONFUSING_LANGUAGE;
  items[1] = obj;
  obj = { label: null, code: 1, value: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.emlT91);
  obj.value = obj.OTHER;
  items[2] = obj;
  return items;
}
export { InAppReportsFeedbackReasonOption };
