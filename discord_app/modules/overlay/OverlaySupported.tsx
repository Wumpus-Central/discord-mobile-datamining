// discord_app/modules/overlay/OverlaySupported.tsx
import set from "../../../_runtime/00002_set.js";
import set2 from "../../utils/PlatformUtils.tsx";

let flag = set2.isPlatformEmbedded;
if (flag) {
  const _module = set2;
  flag = _module.isWindows() || false;
  const tmp2 = _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const result = set.fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;
