// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ColorUtils = fn(4409);
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default noop.memo(() => {
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = {
    style: StyleSheet.absoluteFill,
    blurStyle: "default",
    tintColor,
    android_fallbackColor: token,
    blurAmount: 0.24,
    blurTheme: "dark",
  };
  return jsx(VisualEffectViewDefault, {
    style: StyleSheet.absoluteFill,
    blurStyle: "default",
    tintColor,
    android_fallbackColor: token,
    blurAmount: 0.24,
    blurTheme: "dark",
  });
});
