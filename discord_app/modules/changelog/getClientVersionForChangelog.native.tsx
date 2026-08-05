// discord_app/modules/changelog/getClientVersionForChangelog.native.tsx
import { getAppMajorVersion } from "../../utils/native/AppInfoUtils.tsx";
const result = require("set").fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};