// discord_app/modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import nDefault from "../../../../../../_runtime/00672_n.js";
import map from "../../../../../design/tokens/native/useToken.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx",
);

export default function useMediaModalFooterBackground() {
  let mediaModalFooterBackgroundColorRgba = map;
  const tmp = nDefault;
  const tmp2 = callback(
    nDefault(mediaModalFooterBackgroundColorRgba.useToken(ThemesDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(),
    4,
  );
  mediaModalFooterBackgroundColorRgba = { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] };
  return { mediaModalFooterBackgroundColorRgba, MediaModalFooterUnderlay: "a" };
}
