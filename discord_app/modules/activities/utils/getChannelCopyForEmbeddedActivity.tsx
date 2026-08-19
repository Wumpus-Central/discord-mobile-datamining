// === Module 9908: getChannelCopyForEmbeddedActivity ===

// Module 9908 (getChannelCopyForEmbeddedActivity)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/getChannelCopyForEmbeddedActivity.tsx");

export default function getChannelCopyForEmbeddedActivity(arg0) {
  let stringResult = arg0;
  if (null == arg0) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["2YCamo"]);
  }
  return stringResult;
};