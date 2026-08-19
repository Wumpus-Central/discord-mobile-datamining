// === Module 16539: getClientVersionForChangelog ===

// Module 16539 (getClientVersionForChangelog)
import obj132 from "obj132" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16540 */;

const result = obj132.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};