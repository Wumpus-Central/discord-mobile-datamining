// === Module 11152: getChannelCopyForEmbeddedActivity ===

// Module 11152 (getChannelCopyForEmbeddedActivity)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(name) {
  let stringResult = name;
  if (null == name) {
    const intl = util.intl;
    stringResult = intl.string(util.t["2YCamo"]);
  }
  return stringResult;
};