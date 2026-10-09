// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const ThemeTypes = fn(1085).ThemeTypes;
const jsx = fn(21).jsx;
const ColorUtils = fn(4928);
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function BlurVisualEffectView() {
        const cResult = c.c(2);
        const token = useToken.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
        if (cResult[0] !== token) {
          const obj3 = {
            style: StyleSheet.absoluteFill,
            blurStyle: "default",
            tintColor,
            android_fallbackColor: token,
            blurAmount: 0.24,
            blurTheme: "dark",
          };
          const tmp9 = jsx(VisualEffectViewDefault, {
            style: StyleSheet.absoluteFill,
            blurStyle: "default",
            tintColor,
            android_fallbackColor: token,
            blurAmount: 0.24,
            blurTheme: "dark",
          });
          cResult[0] = token;
          cResult[1] = tmp9;
          let tmp5 = tmp9;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    : function BlurVisualEffectView() {
        const token = useToken.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
        return jsx(VisualEffectViewDefault, {
          style: StyleSheet.absoluteFill,
          blurStyle: "default",
          tintColor,
          android_fallbackColor: token,
          blurAmount: 0.24,
          blurTheme: "dark",
        });
      },
);
