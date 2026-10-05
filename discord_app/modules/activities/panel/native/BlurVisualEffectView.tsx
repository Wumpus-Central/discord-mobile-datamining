// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const StyleSheet = react_native.StyleSheet;
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp5;
        const obj = react2;
        const cResult = obj.c(2);
        const obj2 = useToken;
        const token = obj2.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
        if (cResult[0] !== token) {
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
          tmp5 = tmp9;
        } else {
          tmp5 = cResult[1];
        }
        return tmp5;
      }
    : () => {
        const obj = useToken;
        const token = obj.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
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
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;
