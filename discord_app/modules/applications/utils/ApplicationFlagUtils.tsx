// === Module 8758: ApplicationFlagUtils ===

// Module 8758 (ApplicationFlagUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import size from "module_2" /* 2 */;

function getApplicationFlags(application) {
  let flags;
  if (null == application) {
    const deserializer = BigFlagUtilsAll;
    flags = deserializer.deserialize(0);
  } else {
    let tmp5 = null != application;
    if (tmp5) {
      let tmp2 = application instanceof ApplicationRecord;
      if (!tmp2) {
        tmp2 = "flags" in application && typeof application.flags === "bigint";
      }
      if (!tmp2) {
        tmp2 = "flags" in application && null != application.flags && typeof application.flags === "object" && "parts" in application.flags;
        const tmp4 = "flags" in application && null != application.flags && typeof application.flags === "object" && "parts" in application.flags;
      }
      tmp5 = tmp2;
    }
    if (tmp5) {
      flags = application.flags;
    } else {
      let num = application.flags_new;
      const deserialize = BigFlagUtilsAll.deserialize;
      BigFlagUtilsAll;
      if (num == null) {
        num = application.flags;
      }
      if (num == null) {
        num = 0;
      }
      flags = deserialize(num);
    }
  }
  return flags;
}
const result = size.fileFinishedImporting("modules/applications/utils/ApplicationFlagUtils.tsx");

export { getApplicationFlags };
export const hasApplicationFlag = function hasApplicationFlag(application, EMBEDDED_FIRST_PARTY) {
  const obj = BigFlagUtilsAll;
  return obj.has(getApplicationFlags(application), EMBEDDED_FIRST_PARTY);
};