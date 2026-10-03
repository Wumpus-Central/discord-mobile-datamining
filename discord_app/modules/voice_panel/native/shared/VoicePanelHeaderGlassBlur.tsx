// === Module 11911: VoicePanelHeaderGlassBlur ===

// Module 11911 (VoicePanelHeaderGlassBlur)
import useThemeDefault from "useTheme" /* 4791 */;
import spring from "spring" /* 5597 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5772 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6570 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ blur: { position: "absolute", top: 0, left: 0, right: 0 }, strokeContainer: { position: "absolute", left: 0, right: 0, bottom: -StyleSheet.hairlineWidth, height: StyleSheet.hairlineWidth }, stroke: { height: StyleSheet.hairlineWidth, opacity: 0.15, backgroundColor: "white" }, strokeAlt: { height: StyleSheet.hairlineWidth, opacity: 0.8, backgroundColor: "black" }, strokeAltLight: { height: StyleSheet.hairlineWidth, opacity: 0.2, backgroundColor: "black" } });
const PlatformUtils = fn(1369);
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = { code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
const __initData2 = { code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
const __initData3 = { code: "function VoicePanelHeaderGlassBlurTsx3(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}" };
const __initData4 = { code: "function VoicePanelHeaderGlassBlurTsx4(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((shown) => {
  const cResult = shown(576).c(26);
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp4 = closure_6();
  let obj = shown(576);
  const fn = function s() {
    let opacity = 0;
    if (shown.get()) {
      let num2 = 1;
      if (closure_7) {
        num2 = 0.7;
      }
      opacity = num2;
    }
    return { opacity };
  };
  fn.__closure = { shown, IS_ANDROID };
  fn.__workletHash = 3451055086565;
  fn.__initData = __initData;
  const animatedStyle = shown(4612).useAnimatedStyle(fn);
  const obj2 = shown(4612);
  const obj3 = { shown, IS_ANDROID };
  const fn2 = function k() {
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  const obj4 = shown(4612);
  fn2.__closure = { withSpring: shown(5597).withSpring, shown };
  fn2.__workletHash = 5642055202507;
  fn2.__initData = __initData2;
  const animatedProps = obj4.useAnimatedProps(fn2);
  const tmp8 = useThemeDefault();
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp4.blur) {
        let tmp9 = cResult[3];
      }
      let str = "light";
      if (tmpResult.isThemeDark(tmp8)) {
        str = "dark";
      }
      if (cResult[4] !== blurStyle) {
        const items = [StyleSheet.absoluteFillObject, blurStyle];
        cResult[4] = blurStyle;
        cResult[5] = items;
        let tmp10 = items;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === animatedProps) {
        if (cResult[7] === str) {
          if (cResult[8] === tmp10) {
            let tmp12 = cResult[9];
          }
          if (cResult[10] !== tmp4.stroke) {
            const obj6 = { style: tmp4.stroke };
            const tmp17 = closure_4(NativeViewDefault, obj6);
            cResult[10] = tmp4.stroke;
            cResult[11] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp4.strokeAlt) {
            if (cResult[13] === tmp4.strokeAltLight) {
              if (cResult[14] === tmp8) {
                if (cResult[16] !== cResult[15]) {
                  const obj7 = { style: tmp18 };
                  const tmp23 = closure_4(NativeViewDefault, obj7);
                  cResult[16] = tmp18;
                  cResult[17] = tmp23;
                  let tmp21 = tmp23;
                } else {
                  tmp21 = cResult[17];
                }
                if (cResult[18] === tmp4.strokeContainer) {
                  if (cResult[19] === tmp15) {
                    if (cResult[20] === tmp21) {
                      let tmp24 = cResult[21];
                    }
                    if (cResult[22] === tmp9) {
                      if (cResult[23] === tmp12) {
                        if (cResult[24] === tmp24) {
                          let tmp27 = cResult[25];
                        }
                        return tmp27;
                      }
                    }
                    const obj8 = { style: tmp9, children: null };
                    const items1 = [tmp12, tmp24];
                    obj8.children = items1;
                    const tmp29 = closure_5(ReanimatedNativeViewDefault, obj8);
                    cResult[22] = tmp9;
                    cResult[23] = tmp12;
                    cResult[24] = tmp24;
                    cResult[25] = tmp29;
                    tmp27 = tmp29;
                  }
                }
                const obj9 = { style: tmp4.strokeContainer, children: null };
                const items2 = [tmp15, tmp21];
                obj9.children = items2;
                const tmp26 = closure_5(NativeViewDefault, obj9);
                cResult[18] = tmp4.strokeContainer;
                cResult[19] = tmp15;
                cResult[20] = tmp21;
                cResult[21] = tmp26;
                tmp24 = tmp26;
              }
            }
          }
          const tmp19 = tmp(4729).isThemeDark(tmp8) ? tmp4.strokeAlt : tmp4.strokeAltLight;
          cResult[12] = tmp4.strokeAlt;
          cResult[13] = tmp4.strokeAltLight;
          cResult[14] = tmp8;
          cResult[15] = tmp19;
          const tmpResult2 = tmp(4729);
        }
      }
      const obj10 = { blurStyle: "ultra-thin", blurTheme: str, style: tmp10, animatedProps };
      const tmp14 = closure_4(VisualEffectViewAnimatedDefault, obj10);
      cResult[6] = animatedProps;
      cResult[7] = str;
      cResult[8] = tmp10;
      cResult[9] = tmp14;
      tmp12 = tmp14;
      tmpResult = tmp(4729);
    }
  }
  const items3 = [tmp4.blur, style, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = tmp4.blur;
  cResult[3] = items3;
  tmp9 = items3;
  const obj5 = { withSpring: shown(5597).withSpring, shown };
}) : ((shown) => {
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = closure_6();
  const fn = function _() {
    let opacity = 0;
    if (shown.get()) {
      let num2 = 1;
      if (closure_7) {
        num2 = 0.7;
      }
      opacity = num2;
    }
    return { opacity };
  };
  fn.__closure = { shown, IS_ANDROID };
  fn.__workletHash = 13658868332711;
  fn.__initData = __initData3;
  const animatedStyle = shown(4612).useAnimatedStyle(fn);
  let obj = shown(4612);
  const obj2 = { shown, IS_ANDROID };
  const tmp2 = shown;
  const fn2 = function w() {
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  const obj3 = shown(4612);
  fn2.__closure = { withSpring: shown(5597).withSpring, shown };
  fn2.__workletHash = 10766437578125;
  fn2.__initData = __initData4;
  const animatedProps = obj3.useAnimatedProps(fn2);
  const tmp7 = useThemeDefault();
  const obj5 = { style: null, children: null };
  const items = [tmp.blur, style, animatedStyle];
  obj5.style = items;
  const obj4 = { withSpring: shown(5597).withSpring, shown };
  const tmp9 = ReanimatedNativeViewDefault;
  const tmp11 = VisualEffectViewAnimatedDefault;
  let str = "light";
  if (obj6.isThemeDark(tmp7)) {
    str = "dark";
  }
  const obj7 = { blurStyle: "ultra-thin", blurTheme: str, style: null, animatedProps };
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  obj7.style = items1;
  const items2 = [closure_4(tmp11, obj7), ];
  const obj8 = { style: tmp.strokeContainer, children: null };
  obj6 = shown(4729);
  const items3 = [closure_4(NativeViewDefault, { style: tmp.stroke }), ];
  const obj9 = { style: tmp.stroke };
  const tmp6Result = NativeViewDefault;
  const tmp6Result2 = NativeViewDefault;
  const tmp2Result = tmp2(4729);
  items3[1] = closure_4(tmp6Result2, { style: tmp2(4729).isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight });
  obj8.children = items3;
  items2[1] = closure_5(tmp6Result, obj8);
  obj5.children = items2;
  return closure_5(tmp9, obj5);
}));