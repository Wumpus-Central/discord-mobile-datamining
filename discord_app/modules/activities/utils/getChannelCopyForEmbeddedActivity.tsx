// === Module 10624: getChannelCopyForEmbeddedActivity ===

// Module 10624 (getChannelCopyForEmbeddedActivity)
import intl2 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(name) {
  let stringResult = name;
  if (null == name) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t["2YCamo"]);
  }
  return stringResult;
};