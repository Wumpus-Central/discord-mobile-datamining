// === Module 20037: getClientVersionForChangelog ===

// Module 20037 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 20038 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}