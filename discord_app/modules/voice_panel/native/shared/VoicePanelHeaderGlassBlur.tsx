// discord_app/modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import VisualEffectViewAnimatedDefault from "../../../visual_effect_view/native/VisualEffectViewAnimated.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const StyleSheet = react_native.StyleSheet;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = {
  blur: { position: "absolute", top: 0, left: 0, right: 0 },
  strokeContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
  },
  stroke: { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" },
  strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" },
  strokeAltLight: { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" },
};
let closure_6 = createStyles.createStyles(obj);
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = {
  code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}",
};
const __initData2 = {
  code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}",
};
const __initData3 = {
  code: "function VoicePanelHeaderGlassBlurTsx3(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}",
};
const __initData4 = {
  code: "function VoicePanelHeaderGlassBlurTsx4(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (shown) => {
        let blurStyle;
        let items1;
        let items2;
        let style;
        const tmp = shown;
        let obj = shown(576);
        const cResult = obj.c(26);
        shown = shown.shown;
        ({ blurStyle, style } = shown);
        const tmp4 = closure_6();
        const fn = function s() {
          let opacity = 0;
          if (shown.get()) {
            let num2 = 1;
            if (IS_ANDROID) {
              num2 = 0.7;
            }
            opacity = num2;
          }
          return { opacity };
        };
        const obj3 = { shown, IS_ANDROID };
        fn.__closure = obj3;
        fn.__workletHash = 3451055086565;
        fn.__initData = __initData;
        const obj2 = shown(4618);
        const animatedStyle = obj2.useAnimatedStyle(fn);
        const fn2 = function k() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (shown.get()) {
            num = 0.3;
          }
          const obj = { blurAmount: withSpring(num) };
          return obj;
        };
        const obj4 = shown(4618);
        fn2.__closure = { withSpring: shown(5604).withSpring, shown };
        fn2.__workletHash = 5642055202507;
        fn2.__initData = __initData2;
        ({ withSpring: shown(5604).withSpring, shown });
        const animatedProps = obj4.useAnimatedProps(fn2);
        const tmp8 = useThemeDefault();
        if (cResult[0] === animatedStyle) {
          if (cResult[1] === style) {
            let tmp9;
            let tmp10;
            if (cResult[2] === tmp4.blur) {
              tmp9 = cResult[3];
            }
            let str = "light";
            const tmpResult = tmp(4735);
            if (tmpResult.isThemeDark(tmp8)) {
              str = "dark";
            }
            if (cResult[4] !== blurStyle) {
              const items = [StyleSheet.absoluteFillObject, blurStyle];
              let num = 4;
              cResult[4] = blurStyle;
              let num2 = 5;
              cResult[5] = items;
              tmp10 = items;
            } else {
              tmp10 = cResult[5];
            }
            if (cResult[6] === animatedProps) {
              if (cResult[7] === str) {
                let tmp12;
                let tmp15;
                if (cResult[8] === tmp10) {
                  tmp12 = cResult[9];
                }
                if (cResult[10] !== tmp4.stroke) {
                  const obj6 = { style: tmp4.stroke };
                  const tmp17 = closure_4(NativeViewDefault, obj6);
                  cResult[10] = tmp4.stroke;
                  cResult[11] = tmp17;
                  tmp15 = tmp17;
                } else {
                  tmp15 = cResult[11];
                }
                if (cResult[12] === tmp4.strokeAlt) {
                  if (cResult[13] === tmp4.strokeAltLight) {
                    let tmp18;
                    let tmp20;
                    if (cResult[14] === tmp8) {
                      tmp18 = cResult[15];
                    }
                    if (cResult[16] !== tmp18) {
                      const obj7 = { style: tmp18 };
                      const tmp22 = closure_4(NativeViewDefault, obj7);
                      cResult[16] = tmp18;
                      cResult[17] = tmp22;
                      tmp20 = tmp22;
                    } else {
                      tmp20 = cResult[17];
                    }
                    if (cResult[18] === tmp4.strokeContainer) {
                      if (cResult[19] === tmp15) {
                        let tmp23;
                        if (cResult[20] === tmp20) {
                          tmp23 = cResult[21];
                        }
                        if (cResult[22] === tmp9) {
                          if (cResult[23] === tmp12) {
                            let tmp26;
                            if (cResult[24] === tmp23) {
                              tmp26 = cResult[25];
                            }
                            return tmp26;
                          }
                        }
                        const obj8 = { style: tmp9, children: items1 };
                        items1 = [tmp12, tmp23];
                        const tmp28 = closure_5(ReanimatedNativeViewDefault, obj8);
                        cResult[22] = tmp9;
                        cResult[23] = tmp12;
                        cResult[24] = tmp23;
                        cResult[25] = tmp28;
                        tmp26 = tmp28;
                      }
                    }
                    const obj9 = { style: tmp4.strokeContainer, children: items2 };
                    items2 = [tmp15, tmp20];
                    const tmp25 = closure_5(NativeViewDefault, obj9);
                    cResult[18] = tmp4.strokeContainer;
                    cResult[19] = tmp15;
                    cResult[20] = tmp20;
                    cResult[21] = tmp25;
                    tmp23 = tmp25;
                  }
                }
                const tmpResult2 = tmp(4735);
                const tmp19 = tmpResult2.isThemeDark(tmp8) ? tmp4.strokeAlt : tmp4.strokeAltLight;
                cResult[12] = tmp4.strokeAlt;
                cResult[13] = tmp4.strokeAltLight;
                cResult[14] = tmp8;
                cResult[15] = tmp19;
                tmp18 = tmp19;
              }
            }
            const obj10 = { blurStyle: "ultra-thin", blurTheme: str, style: tmp10, animatedProps };
            const tmp14 = closure_4(VisualEffectViewAnimatedDefault, obj10);
            cResult[6] = animatedProps;
            cResult[7] = str;
            cResult[8] = tmp10;
            cResult[9] = tmp14;
            tmp12 = tmp14;
          }
        }
        const items3 = [tmp4.blur, style, animatedStyle];
        cResult[0] = animatedStyle;
        cResult[1] = style;
        cResult[2] = tmp4.blur;
        cResult[3] = items3;
        tmp9 = items3;
      }
    : (shown) => {
        let blurStyle;
        let items;
        let items1;
        let items2;
        let items3;
        let style;
        shown = shown.shown;
        ({ blurStyle, style } = shown);
        const tmp = closure_6();
        let obj = shown(4618);
        const fn = function _() {
          let opacity = 0;
          if (shown.get()) {
            let num2 = 1;
            if (IS_ANDROID) {
              num2 = 0.7;
            }
            opacity = num2;
          }
          return { opacity };
        };
        const obj2 = { shown, IS_ANDROID };
        fn.__closure = obj2;
        fn.__workletHash = 13658868332711;
        fn.__initData = __initData3;
        const animatedStyle = obj.useAnimatedStyle(fn);
        const fn2 = function w() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (shown.get()) {
            num = 0.3;
          }
          const obj = { blurAmount: withSpring(num) };
          return obj;
        };
        const obj3 = shown(4618);
        fn2.__closure = { withSpring: shown(5604).withSpring, shown };
        fn2.__workletHash = 10766437578125;
        fn2.__initData = __initData4;
        ({ withSpring: shown(5604).withSpring, shown });
        const animatedProps = obj3.useAnimatedProps(fn2);
        const tmp7 = useThemeDefault();
        const obj5 = { style: items, children: items2 };
        items = [tmp.blur, style, animatedStyle];
        const tmp9 = ReanimatedNativeViewDefault;
        let str = "light";
        const tmp11 = VisualEffectViewAnimatedDefault;
        const obj6 = shown(4735);
        const tmp2 = shown;
        if (obj6.isThemeDark(tmp7)) {
          str = "dark";
        }
        const obj7 = { blurStyle: "ultra-thin", blurTheme: str, style: items1, animatedProps };
        items1 = [StyleSheet.absoluteFillObject, blurStyle];
        items2 = [closure_4(tmp11, obj7)];
        const obj8 = { style: tmp.strokeContainer, children: items3 };
        items3 = [,];
        const obj9 = { style: tmp.stroke };
        const tmp6Result = NativeViewDefault;
        items3[0] = closure_4(NativeViewDefault, obj9);
        const tmp6Result2 = NativeViewDefault;
        const tmp2Result = tmp2(4735);
        const obj10 = { style: tmp2Result.isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight };
        items3[1] = closure_4(tmp6Result2, obj10);
        items2[1] = closure_5(tmp6Result, obj8);
        return closure_5(tmp9, obj5);
      },
);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default memoResult;
