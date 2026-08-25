// === Module 12455: useMediaModalFooterBackground ===

// Module 12455 (useMediaModalFooterBackground)
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4101 */;
import closure_3 from "_slicedToArray" /* 32 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = map;
  const tmp = nDefault;
  const tmp2 = callback(nDefault(mediaModalFooterBackgroundColorRgba.useToken(ThemesDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: "a" };
};