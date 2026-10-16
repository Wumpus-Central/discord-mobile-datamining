// === Module 18384: getClientVersionForChangelog ===

// Module 18384 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 18385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
};