// === Module 13061: IS_OVERLAY_DEV_ENV ===

// Module 13061 (IS_OVERLAY_DEV_ENV)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;

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