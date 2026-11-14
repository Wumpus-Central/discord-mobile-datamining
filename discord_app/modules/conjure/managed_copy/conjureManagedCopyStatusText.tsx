// discord_app/modules/conjure/managed_copy/conjureManagedCopyStatusText.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4131 from "../intl/ConjureUntranslated.messages.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/managed_copy/conjureManagedCopyStatusText.tsx");

export function conjureCopySourceLine(sourceName, updatesPaused) {
  sourceName = sourceName.sourceName;
  if (null == sourceName) {
    const intl2 = util.intl;
    const tmp8 = _modDef4131;
    intl2.string(updatesPaused ? tmp8["5wuDGB"] : tmp8.rxvuqx);
  } else {
    const intl = util.intl;
    const tmp4 = _modDef4131;
    const obj = { name: sourceName };
    return intl.formatToPlainString(updatesPaused ? tmp4.HHthpS : tmp4.qpGg7d, obj);
  }
}
export function conjureCopySyncLine(conjureCopyLastSync, updatesPaused) {
  if (updatesPaused) {
    const intl6 = util.intl;
    return intl6.string(_modDef4131["uV/luq"]);
  } else {
    if (null != conjureCopyLastSync) {
      if (null != conjureCopyLastSync.atMs) {
        const _Date = Date;
        const date = new Date(conjureCopyLastSync.atMs);
        const dateFormatResult = DateUtils.dateFormat(date, "LLL");
        const status = conjureCopyLastSync.status;
        if ("updated" === status) {
          const intl4 = util.intl;
          const obj2 = { time: dateFormatResult };
          return intl4.formatToPlainString(_modDef4131["6rQ8So"], obj2);
        } else if ("failed" === status) {
          const intl3 = util.intl;
          const obj3 = { time: dateFormatResult };
          return intl3.formatToPlainString(_modDef4131.HZnsMq, obj3);
        } else if ("held" === status) {
          const intl2 = util.intl;
          return intl2.string(_modDef4131.AwPHix);
        } else {
          const intl = util.intl;
          const obj = { time: dateFormatResult };
          return intl.formatToPlainString(_modDef4131.yc0AaP, obj);
        }
      }
    }
    const intl5 = util.intl;
    return intl5.string(_modDef4131.gHndTq);
  }
}
