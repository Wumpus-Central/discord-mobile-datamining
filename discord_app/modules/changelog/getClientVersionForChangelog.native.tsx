// === Module 18005: getClientVersionForChangelog ===

// Module 18005 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 18006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};