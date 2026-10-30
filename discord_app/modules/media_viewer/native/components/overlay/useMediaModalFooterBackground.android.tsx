// === Module 14740: useMediaModalFooterBackground ===

// Module 14740 (useMediaModalFooterBackground)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useToken from "useToken" /* 5591 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  const tmp = _modDef671;
  const tmp2 = _slicedToArray(tmp(useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  return { mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] }, MediaModalFooterUnderlay: "Array" };
};