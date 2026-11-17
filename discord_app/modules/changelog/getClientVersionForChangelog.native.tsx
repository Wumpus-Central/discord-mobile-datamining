// === Module 20193: getClientVersionForChangelog ===

// Module 20193 (getClientVersionForChangelog)
import AppInfoUtils from "AppInfoUtils" /* 20194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}