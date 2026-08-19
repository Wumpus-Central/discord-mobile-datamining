// discord_app/modules/overlay/OverlaySupported.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import obj1322 from "../../utils/PlatformUtils.tsx";

let flag = obj1322.isPlatformEmbedded;
if (flag) {
  const _module = obj1322;
  flag = _module.isWindows() || false;
  const tmp2 = _module.isWindows() || false;
}
if (flag) {
  flag = false;
}
const result = obj132.fileFinishedImporting("modules/overlay/OverlaySupported.tsx");

export const IS_OVERLAY_DEV_ENV = false;
export const OVERLAY_SUPPORTED = flag;