// === Module 7733: getApplicationFlags ===

// Module 7733 (getApplicationFlags)
import fromStringAll from "fromString" /* 506 */;
import closure_2 from "createExecutable" /* 4406 */;

function getApplicationFlags(application) {
  if (null == application) {
    let flags = fromStringAll.deserialize(0);
    const obj2 = fromStringAll;
  } else {
    let tmp5 = null != application;
    if (tmp5) {
      let tmp2 = application instanceof closure_2;
      if (!tmp2) {
        tmp2 = "flags" in application && typeof application.flags === "bigint";
        const tmp3 = "flags" in application && typeof application.flags === "bigint";
      }
      if (!tmp2) {
        let tmp4 = "flags" in application && null != application.flags && typeof application.flags === "object";
        if (tmp4) {
          tmp4 = "parts" in application.flags;
        }
        tmp2 = tmp4;
      }
      tmp5 = tmp2;
    }
    if (tmp5) {
      flags = application.flags;
    } else {
      let num = application.flags_new;
      if (num == null) {
        num = application.flags;
      }
      if (num == null) {
        num = 0;
      }
      flags = fromStringAll.deserialize(num);
      const obj = fromStringAll;
    }
  }
  return flags;
}
const result = require("set").fileFinishedImporting("modules/applications/utils/ApplicationFlagUtils.tsx");

export { getApplicationFlags };
export const hasApplicationFlag = function hasApplicationFlag(application, EMBEDDED) {
  return fromStringAll.has(getApplicationFlags(application), EMBEDDED);
};