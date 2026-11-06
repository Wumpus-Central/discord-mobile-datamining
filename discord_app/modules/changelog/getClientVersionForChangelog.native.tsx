// === Module 19734: getClientVersionForChangelog ===

// Module 19734 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 19735 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}