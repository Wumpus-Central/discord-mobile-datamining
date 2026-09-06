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
const createStyles = fn(4560);
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
const PlatformUtils = fn(1115);
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
  shown(4296);
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
  let obj = { shown, IS_ANDROID };
  fn.__closure = obj;
  fn.__workletHash = 3451055086565;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = shown(4296);
  const fn2 = function p() {
    let obj = spring;
    let num = 0;
    if (shown.get()) {
      num = 0.3;
    }
    obj = { blurAmount: obj.withSpring(num) };
    return obj;
  };
  obj = { withSpring: shown(4974).withSpring, shown };
  fn2.__closure = obj;
  fn2.__workletHash = 5642055202507;
  fn2.__initData = __initData2;
  const animatedProps = obj2.useAnimatedProps(fn2);
  const tmp7 = useThemeDefault();
  const obj1 = { style: null, children: null };
  const items = [tmp.blur, style, animatedStyle];
  obj1.style = items;
  const tmp2 = shown;
  const tmp9 = ReanimatedNativeViewDefault;
  let obj5 = shown(4411);
  let str = "light";
  if (obj5.isThemeDark(tmp7)) {
    str = "dark";
  }
  obj2 = { blurStyle: "ultra-thin", blurTheme: str, style: null, animatedProps };
  const items1 = [StyleSheet.absoluteFillObject, blurStyle];
  obj2.style = items1;
  const items2 = [closure_4(VisualEffectViewAnimatedDefault, obj2)];
  const obj3 = { style: tmp.strokeContainer, children: null };
  tmp6(5589);
  const items3 = [closure_4(NativeViewDefault, { style: tmp.stroke })];
  const tmp6Result = tmp6(5589);
  const obj4 = { style: tmp.stroke };
  obj5 = { style: tmp2(4411).isThemeDark(tmp7) ? tmp.strokeAlt : tmp.strokeAltLight };
  items3[1] = closure_4(tmp6Result, obj5);
  obj3.children = items3;
  items2[1] = closure_5(tmp6Result, obj3);
  obj1.children = items2;
  return closure_5(tmp9, obj1);
});
