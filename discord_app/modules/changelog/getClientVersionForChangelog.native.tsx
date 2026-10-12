// === Module 18062: getClientVersionForChangelog ===

// Module 18062 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 18063 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};