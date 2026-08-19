// discord_app/modules/intl/overrides/getDeviceSpecificString.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";

const result = obj132.fileFinishedImporting("modules/intl/overrides/getDeviceSpecificString.tsx");

export const getDeviceSpecificString = function getDeviceSpecificString(arg0, _2Yp7dF) {
  let str = null;
  if (obj.isMetaQuest()) {
    str = "quest";
  }
  let tmp3 = null;
  if (null != str) {
    tmp3 = arg0[str];
  }
  if (tmp3 == null) {
    tmp3 = _2Yp7dF;
  }
  const intl = getSystemLocale.intl;
  return intl.string(tmp3);
};