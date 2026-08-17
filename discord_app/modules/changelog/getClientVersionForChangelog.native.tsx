// discord_app/modules/changelog/getClientVersionForChangelog.native.tsx
import set from "set" /* 2 */;
import getAppMajorVersion from "getAppMajorVersion" /* 16540 */;

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};