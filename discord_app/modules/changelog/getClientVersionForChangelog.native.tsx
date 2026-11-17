// === Module 20241: getClientVersionForChangelog ===

// Module 20241 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 20242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}