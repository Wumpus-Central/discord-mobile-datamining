// discord_app/modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import VisualEffectViewAnimatedDefault from "../../../visual_effect_view/native/VisualEffectViewAnimated.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let closure_6 = createStyles.createStyles({
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
});
const PlatformUtils = fn(1364);
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = {
  code: "function VoicePanelHeaderGlassBlurTsx1(){const{shown,IS_ANDROID}=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};}",
};
const __initData2 = {
  code: "function VoicePanelHeaderGlassBlurTsx2(){const{withSpring,shown}=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default noop.memo(function HeaderGlassBlur(shown) {
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = closure_6();
  const fn = function k() {
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
  const animatedStyle = shown(4561).useAnimatedStyle(fn);
  let obj = shown(4561);
  const obj2 = { shown, IS_ANDROID };
  const tmp2 = shown;
  const fn2 = function p() {
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  const obj3 = shown(4561);
  fn2.__closure = { withSpring: shown(5272).withSpring, shown };
  fn2.__workletHash = 5642055202507;
  fn2.__initData = __initData2;
  const animatedProps = obj3.useAnimatedProps(fn2);
  const tmp7 = useThemeDefault();
  const obj5 = { style: null, children: null };
  const items = [tmp.blur, style, animatedStyle];
  obj5.style = items;
  const obj4 = { withSpring: shown(5272).withSpring, shown };
  const tmp9 = ReanimatedNativeViewDefault;
  const tmp11 = VisualEffectViewAnimatedDefault;
  let str = "light";
  if (obj6.isThemeDark(tmp7)) {
    str = "dark";
  }
  const obj7 = { blurStyle: "ultra-thin", blurTheme: str, style: null, animatedProps };
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  obj7.style = items1;
  const items2 = [closure_4(tmp11, obj7)];
  const obj8 = { style: tmp.strokeContainer, children: null };
  obj6 = shown(4680);
  const items3 = [closure_4(NativeViewDefault, { style: tmp.stroke })];
  const obj9 = { style: tmp.stroke };
  const tmp6Result = NativeViewDefault;
  const tmp6Result2 = NativeViewDefault;
  const tmp2Result = tmp2(4680);
  items3[1] = closure_4(tmp6Result2, { style: tmp2(4680).isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight });
  obj8.children = items3;
  items2[1] = closure_5(tmp6Result, obj8);
  obj5.children = items2;
  return closure_5(tmp9, obj5);
});
