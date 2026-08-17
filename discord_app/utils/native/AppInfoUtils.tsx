// discord_app/utils/native/AppInfoUtils.tsx
import set from "../../../_runtime/00002_set.js";
import getConstants from "ClientInfoUtils.tsx";

const constants = getConstants.getConstants();
const result = set.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

export const getAppMajorVersion = function getAppMajorVersion() {
  if (undefined === closure_0) {
    return -1;
  } else {
    const parts = tmp.Version.split(".");
    let num = -1;
    if (2 === parts.length) {
      const _Number = Number;
      num = Number(parts[0]);
    }
    return num;
  }
};