// discord_app/modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx
import _slicedToArray from "_slicedToArray";
import { n } from "../../../../../../_runtime/00689_n.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../../design/tokens/native/useToken.tsx";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx");

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = map;
  const tmp = n;
  const tmp2 = callback(n(mediaModalFooterBackgroundColorRgba.useToken(Themes.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: "r" };
};