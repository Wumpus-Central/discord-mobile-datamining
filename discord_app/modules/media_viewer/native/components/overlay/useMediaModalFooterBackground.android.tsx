// discord_app/modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../../_runtime/metro/00672__.js";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/useMediaModalFooterBackground.android.tsx",
);

export default function useMediaModalFooterBackground() {
  let obj = useToken;
  const tmp2 = _slicedToArray(_modDef672(obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK)).rgba(), 4);
  obj = {
    mediaModalFooterBackgroundColorRgba: { r: tmp2[0], g: tmp2[1], b: tmp2[2], a: tmp2[3] },
    MediaModalFooterUnderlay: "a",
  };
  return obj;
}
