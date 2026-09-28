// === Module 17109: getClientVersionForChangelog ===

// Module 17109 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17110 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};