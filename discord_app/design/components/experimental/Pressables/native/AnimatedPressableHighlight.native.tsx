// discord_app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../tokens/native/useToken.tsx";
import Pressables from "../../../../void/Pressables/native/Pressables.tsx";
import useIOSPressEffects from "../../../../../modules/main_tabs_v2/native/shared_components/util/useIOSPressEffects.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../_runtime/00019_react.js";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import ReactCompilerGating_mod from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let children;

let closure_3 = ["children"];
let closure_4 = ["children"];
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_9 = ReanimatedRexport.createAnimatedComponent(Pressables.PressableHighlight);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let onPressIn;
      let onPressOut;
      let pressableStyles;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_3);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmpResult = useIOSPressEffects;
      const iOSPressEffects = tmpResult.useIOSPressEffects(4);
      ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
      if (cResult[3] === pressableStyles) {
        let tmp10;
        if (cResult[4] === tmp5.style) {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === onPressIn) {
            if (cResult[8] === onPressOut) {
              if (cResult[9] === tmp5) {
                let tmp11;
                if (cResult[10] === tmp10) {
                  tmp11 = cResult[11];
                }
                return tmp11;
              }
            }
          }
        }
        const merged = Object.assign(tmp5);
        const tmp17 = (
          <closure_9 accessibilityRole="button" onPressIn={onPressIn} onPressOut={onPressOut} style={tmp10}>
            {tmp4}
          </closure_9>
        );
        cResult[6] = tmp4;
        cResult[7] = onPressIn;
        cResult[8] = onPressOut;
        cResult[9] = tmp5;
        cResult[10] = tmp10;
        cResult[11] = tmp17;
        tmp11 = tmp17;
      }
      const items = [pressableStyles, tmp5.style];
      cResult[3] = pressableStyles;
      cResult[4] = tmp5.style;
      cResult[5] = items;
      tmp10 = items;
    }
  : (children) => {
      children = children.children;
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      const obj = useIOSPressEffects;
      const iOSPressEffects = obj.useIOSPressEffects(4);
      const pressableStyles = iOSPressEffects.pressableStyles;
      const merged1 = Object.assign(merged);
      const items = [pressableStyles, merged.style];
      return (
        <closure_9
          accessibilityRole="button"
          onPressIn={iOSPressEffects.onPressIn}
          onPressOut={iOSPressEffects.onPressOut}
          style={items}
        >
          {children}
        </closure_9>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let androidRippleConfig;
      let androidRippleConfig2;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(10);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp8 = _objectWithoutProperties(children, closure_4);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmpResult = useToken;
      const token = tmpResult.useToken(nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
      ({ androidRippleConfig, androidRippleConfig: androidRippleConfig2 } = tmp5);
      let num4;
      if (androidRippleConfig2 != null) {
        num4 = androidRippleConfig2.cornerRadius;
      }
      if (num4 == null) {
        num4 = 12;
      }
      if (cResult[3] === token) {
        let tmp10;
        if (cResult[4] === num4) {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp10) {
          if (cResult[7] === tmp4) {
            let tmp11;
            if (cResult[8] === tmp5) {
              tmp11 = cResult[9];
            }
            return tmp11;
          }
        }
        const merged = Object.assign(tmp5);
        const tmp17 = <Pressable android_ripple={tmp10}>{tmp4}</Pressable>;
        cResult[6] = tmp10;
        cResult[7] = tmp4;
        cResult[8] = tmp5;
        cResult[9] = tmp17;
        tmp11 = tmp17;
      }
      const obj3 = { color: token, cornerRadius: num4 };
      cResult[3] = token;
      cResult[4] = num4;
      cResult[5] = obj3;
      tmp10 = obj3;
    }
  : (children) => {
      children = children.children;
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      let obj = useToken;
      const token = obj.useToken(nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
      const items = [token];
      let androidRippleConfig = merged.androidRippleConfig;
      let cornerRadius;
      const useMemo = react.useMemo;
      if (androidRippleConfig != null) {
        cornerRadius = androidRippleConfig.cornerRadius;
      }
      items[1] = cornerRadius;
      const merged1 = Object.assign(merged);
      return (
        <Pressable
          android_ripple={useMemo(() => {
            let num;
            const androidRippleConfig = merged.androidRippleConfig;
            const obj = { color: token, cornerRadius: num };
            num = undefined;
            if (androidRippleConfig != null) {
              num = androidRippleConfig.cornerRadius;
            }
            if (num == null) {
              num = 12;
            }
            return obj;
          }, items)}
        >
          {children}
        </Pressable>
      );
    };
if (PlatformUtils.isAndroid()) {
  tmp2 = tmp3;
}
const result = size.fileFinishedImporting(
  "design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx",
);

export const AnimatedPressableHighlight = tmp2;
