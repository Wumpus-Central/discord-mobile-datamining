// === Module 12972: useMediaModalFooterBackground ===

// Module 12972 (useMediaModalFooterBackground)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useToken from "useToken" /* 4262 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let obj = useToken;
  const tmp2 = _slicedToArray(_modDef672(obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  obj = { mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] }, MediaModalFooterUnderlay: "a" };
  return obj;
};