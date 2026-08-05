// discord_app/modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = require(3989) /* map */;
  const tmp = importDefault(689);
  const tmp2 = callback(importDefault(689)(mediaModalFooterBackgroundColorRgba.useToken(importDefault(712).colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: "a" };
};