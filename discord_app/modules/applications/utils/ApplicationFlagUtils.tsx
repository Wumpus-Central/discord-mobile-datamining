// === Module 5696: getApplicationFlags ===

// Module 5696 (getApplicationFlags)
import createExecutable from "createExecutable";

function getApplicationFlags(application) {
  if (null == application) {
    let flags = importAll(506).deserialize(0);
    const obj2 = importAll(506);
  } else {
    let tmp5 = null != application;
    if (tmp5) {
      let tmp2 = application instanceof createExecutable;
      if (!tmp2) {
        tmp2 = "flags" in application && typeof application.flags === "accessibilityLabel";
        const tmp3 = "flags" in application && typeof application.flags === "accessibilityLabel";
      }
      if (!tmp2) {
        let tmp4 = "flags" in application && null != application.flags && typeof application.flags === "ay";
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
      flags = importAll(506).deserialize(num);
      const obj = importAll(506);
    }
  }
  return flags;
}
const result = require("set").fileFinishedImporting("modules/applications/utils/ApplicationFlagUtils.tsx");

export { getApplicationFlags };
export const hasApplicationFlag = function hasApplicationFlag(application, EMBEDDED) {
  return importAll(506).has(getApplicationFlags(application), EMBEDDED);
};