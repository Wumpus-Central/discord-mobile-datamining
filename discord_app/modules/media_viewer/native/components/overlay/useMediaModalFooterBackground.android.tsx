// discord_app/modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = require("../../../../../design/tokens/native/useToken.tsx") /* map */;
  const tmp = require("../../../../../../_runtime/00689_n.js");
  const tmp2 = callback(require("../../../../../../_runtime/00689_n.js")(mediaModalFooterBackgroundColorRgba.useToken(require("../../../../../../discord_common/js/packages/tokens/native.tsx").colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: "a" };
};