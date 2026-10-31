// === Module 19410: getClientVersionForChangelog ===

// Module 19410 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 19411 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}