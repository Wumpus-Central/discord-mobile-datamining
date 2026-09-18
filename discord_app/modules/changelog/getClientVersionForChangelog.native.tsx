// === Module 17656: getClientVersionForChangelog ===

// Module 17656 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};