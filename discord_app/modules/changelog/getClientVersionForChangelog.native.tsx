// === Module 19057: getClientVersionForChangelog ===

// Module 19057 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 19058 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};