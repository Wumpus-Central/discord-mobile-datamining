// discord_app/modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import VisualEffectViewAnimatedDefault from "../../../visual_effect_view/native/VisualEffectViewAnimated.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5143);
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
const PlatformUtils = fn(1377);
let closure_7 = PlatformUtils.isAndroid();
let closure_8 = {
  code: "(function VoicePanelHeaderGlassBlurTsx1(){let[shown,IS_ANDROID]=this.__closure;return{opacity:shown.get()?IS_ANDROID?0.7:1:0};})",
};
let closure_9 = {
  code: "(function VoicePanelHeaderGlassBlurTsx2(){let[withSpring,shown,Reanimated3DefaultSpringConfig]=this.__closure;return{blurAmount:withSpring(shown.get()?0.3:0,Reanimated3DefaultSpringConfig)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelHeaderGlassBlur.tsx");

export default noop.memo(function HeaderGlassBlur(shown) {
  shown = shown.shown;
  ({ blurStyle, style } = shown);
  const tmp = closure_6();
  items = [closure_8, shown, closure_7];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class VoicePanelHeaderGlassBlurTsx1 {
    constructor() {
      opacity = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        num2 = 1;
        if (closure_1) {
          num2 = 0.7;
        }
        opacity = num2;
      }
      return { opacity };
    }
  }
  const items1 = [tmp5, tmp6];
  VoicePanelHeaderGlassBlurTsx1.__closure = items1;
  VoicePanelHeaderGlassBlurTsx1.__workletHash = 4561654385020;
  VoicePanelHeaderGlassBlurTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelHeaderGlassBlurTsx1);
  const items2 = [closure_9, spring_spring.withSpring, shown, springPresets.Reanimated3DefaultSpringConfig];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items2;
  class VoicePanelHeaderGlassBlurTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 0.3;
      }
      obj = { blurAmount: tmp(num, closure_2) };
      return obj;
    }
  }
  const items3 = [tmp9, tmp10, tmp11];
  VoicePanelHeaderGlassBlurTsx2.__closure = items3;
  VoicePanelHeaderGlassBlurTsx2.__workletHash = 10192062827186;
  VoicePanelHeaderGlassBlurTsx2.__initData = tmp8;
  const animatedProps = _mod1652.useAnimatedProps(VoicePanelHeaderGlassBlurTsx2);
  const tmp14 = useThemeDefault();
  const obj2 = { style: null, children: null };
  const items4 = [tmp.blur, style, animatedStyle];
  obj2.style = items4;
  const tmp2Result = _mod1652;
  const tmp17 = VisualEffectViewAnimatedDefault;
  let str = "light";
  if (tmp2Result3.isThemeDark(tmp14)) {
    str = "dark";
  }
  const obj3 = { blurStyle: "ultra-thin", blurTheme: str, style: null, animatedProps };
  const items5 = [StyleSheet.absoluteFillObject, blurStyle];
  obj3.style = items5;
  const items6 = [React4(tmp17, obj3)];
  const obj4 = { style: tmp.strokeContainer, children: null };
  tmp2Result3 = shared;
  const items7 = [React4(NativeViewDefault, { style: tmp.stroke })];
  const obj5 = { style: tmp.stroke };
  const tmp13Result = NativeViewDefault;
  const tmp13Result2 = NativeViewDefault;
  const tmp2Result4 = shared;
  items7[1] = React4(tmp13Result2, { style: shared.isThemeDark(tmp14) ? tmp.strokeAlt : tmp.strokeAltLight });
  obj4.children = items7;
  items6[1] = hasOwnProperty(tmp13Result, obj4);
  obj2.children = items6;
  return hasOwnProperty(_modDef1652.View, obj2);
});
