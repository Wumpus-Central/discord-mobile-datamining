// === Module 8102: FormRadio ===

// Module 8102 (FormRadio)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_5 = createCacheKey.createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = ThemesDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = ThemesDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  let obj = { width: CONTROL_RADIO_ICON_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round, borderWidth: ThemesDefault.modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH, borderColor: ThemesDefault.colors.RADIO_BORDER_DEFAULT };
  obj[0] = obj;
  obj = { backgroundColor: "transparent", borderColor: ThemesDefault.colors.RADIO_BORDER_DEFAULT };
  obj[1] = obj;
  obj[2] = { borderColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
  obj[3] = { width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, backgroundColor: ThemesDefault.colors.WHITE, borderRadius: ThemesDefault.radii.round };
  return obj;
});
let closure_6 = { code: "function FormRadioNativeTsx1(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');}" };
let closure_7 = { code: "function FormRadioNativeTsx2(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');}" };
let closure_8 = { code: "function FormRadioNativeTsx3(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}" };
let closure_9 = { code: "function FormRadioNativeTsx4(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}" };
let result = require("obj132").fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = function FormRadio(selected) {
  selected = selected.selected;
  const tmp = derivedValue1();
  sharedValue.useContext(enabled(unselected[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  enabled = selected;
  let derivedValue;
  derivedValue1 = undefined;
  const tmp2 = derivedValue1();
  const selected2 = tmp2.selected;
  selected = selected2;
  unselected = tmp2.unselected;
  let obj = enabled(unselected[5]);
  sharedValue = obj.useSharedValue(selected);
  let items = [selected, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(enabled);
  }, items);
  obj1 = enabled(unselected[5]);
  class T {
    constructor() {
      tmp = enabled;
      tmp2 = unselected;
      obj = enabled(unselected[6]);
      if (closure_3.get()) {
        tmp4 = selected;
        borderColor = selected.borderColor;
      } else {
        tmp3 = unselected;
        borderColor = unselected.borderColor;
      }
      return obj.withSpring(borderColor, tmp(tmp2[7]).SUBTLE_SPRING, "animate-always");
    }
  }
  obj = { withSpring: enabled(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected2, unselectedStyles: unselected, SUBTLE_SPRING: enabled(unselected[7]).SUBTLE_SPRING };
  T.__closure = obj;
  T.__workletHash = 12275577765341;
  T.__initData = closure_6;
  derivedValue = obj1.useDerivedValue(T);
  class C {
    constructor() {
      tmp = enabled;
      tmp2 = unselected;
      obj = enabled(unselected[6]);
      if (closure_3.get()) {
        tmp4 = selected;
        backgroundColor = selected.backgroundColor;
      } else {
        tmp3 = unselected;
        backgroundColor = unselected.backgroundColor;
      }
      return obj.withSpring(backgroundColor, tmp(tmp2[7]).SUBTLE_SPRING, "animate-always");
    }
  }
  obj = { withSpring: enabled(unselected[6]).withSpring, selectedShared: sharedValue, selectedStyles: selected2, unselectedStyles: unselected, SUBTLE_SPRING: enabled(unselected[7]).SUBTLE_SPRING };
  C.__closure = obj;
  C.__workletHash = 7732795836606;
  C.__initData = closure_7;
  derivedValue1 = enabled(unselected[5]).useDerivedValue(C);
  const obj4 = enabled(unselected[5]);
  const fn = function b() {
    return { borderColor: derivedValue.get(), backgroundColor: derivedValue1.get() };
  };
  fn.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
  fn.__workletHash = 5670342272321;
  fn.__initData = closure_8;
  const animatedStyle = enabled(unselected[5]).useAnimatedStyle(fn);
  const obj6 = enabled(unselected[5]);
  const fn2 = function s() {
    let num = 0.5;
    if (enabled) {
      num = 1;
    }
    let obj = enabled(unselected[6]);
    let num2 = 0;
    if (selected) {
      num2 = 1;
    }
    obj = { opacity: obj.withSpring(num2, enabled(unselected[7]).SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!selected) {
      num3 = num;
    }
    obj = { scale: enabled(unselected[6]).withSpring(num3, enabled(unselected[7]).SUBTLE_SPRING) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj1 = { useReducedMotion: enabled, withSpring: enabled(unselected[6]).withSpring, selected, SUBTLE_SPRING: enabled(unselected[7]).SUBTLE_SPRING };
  fn2.__closure = obj1;
  fn2.__workletHash = 15209729079449;
  fn2.__initData = closure_9;
  const animatedStyle1 = enabled(unselected[5]).useAnimatedStyle(fn2);
  const obj7 = enabled(unselected[5]);
  const items1 = [tmp.radio, animatedStyle];
  const items2 = [tmp.dot, animatedStyle1];
  return derivedValue(selected(unselected[5]).View, { style: items1, children: derivedValue(selected(unselected[5]).View, { style: items2 }) });
};