// === Module 16540: getAppMajorVersion ===

// Module 16540 (getAppMajorVersion)
import obj132 from "obj132" /* 2 */;
import getConstants from "getConstants" /* 1626 */;

const constants = getConstants.getConstants();
const result = obj132.fileFinishedImporting("utils/native/AppInfoUtils.tsx");

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