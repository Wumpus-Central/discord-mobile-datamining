// discord_app/modules/applications/utils/ApplicationFlagUtils.tsx
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";

function getApplicationFlags(application) {
  if (null == application) {
    const deserializer2 = BigFlagUtilsAll;
    let flags = deserializer2.deserialize(0);
  } else {
    let tmp5 = null != application;
    if (tmp5) {
      let tmp2 = application instanceof ApplicationRecord;
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
      const deserializer = BigFlagUtilsAll;
      let num = application.flags_new;
      if (num == null) {
        num = application.flags;
      }
      if (num == null) {
        num = 0;
      }
      flags = deserializer.deserialize(num);
    }
  }
  return flags;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/utils/ApplicationFlagUtils.tsx");

export { getApplicationFlags };
export const hasApplicationFlag = function hasApplicationFlag(application, EMBEDDED) {
  return BigFlagUtilsAll.has(getApplicationFlags(application), EMBEDDED);
};
