// === Module 17779: getClientVersionForChangelog ===

// Module 17779 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 17780 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};