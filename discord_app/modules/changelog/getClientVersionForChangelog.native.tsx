// === Module 19290: getClientVersionForChangelog ===

// Module 19290 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 19291 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}