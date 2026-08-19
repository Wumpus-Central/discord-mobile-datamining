// discord_app/modules/changelog/getClientVersionForChangelog.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getAppMajorVersion from "../../utils/native/AppInfoUtils.tsx";

const result = obj132.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export const getClientVersionForChangelog = function getClientVersionForChangelog() {
  return getAppMajorVersion.getAppMajorVersion();
};