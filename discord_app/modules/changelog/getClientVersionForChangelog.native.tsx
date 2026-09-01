// discord_app/modules/changelog/getClientVersionForChangelog.native.tsx
import set from "../../../_runtime/00002_set.js";
import getAppMajorVersion from "../../utils/native/AppInfoUtils.tsx";

const result = set.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};
