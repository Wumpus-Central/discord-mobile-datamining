// discord_app/modules/changelog/getClientVersionForChangelog.native.tsx
import AppInfoUtils from "../../utils/native/AppInfoUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/changelog/getClientVersionForChangelog.native.tsx");

export function getClientVersionForChangelog() {
  return AppInfoUtils.getAppMajorVersion();
}
