// === Module 18769: getClientVersionForChangelog ===

// Module 18769 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 18770 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};