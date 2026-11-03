// === Module 19575: getClientVersionForChangelog ===

// Module 19575 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 19576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}