// discord_app/design/components/Forms/native/FormRadio.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_5 = createStyles.createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  const obj = { radio: null, unselected: null, selected: null, dot: null };
  const size = {
    width: CONTROL_RADIO_ICON_SIZE_DEFAULT,
    height: CONTROL_RADIO_ICON_SIZE_DEFAULT,
    flexGrow: 0,
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.round,
    borderWidth: nativeDefault.modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH,
    borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT,
  };
  obj.radio = size;
  obj.unselected = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  const obj2 = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  obj.selected = {
    borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
    backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
  };
  const size1 = {
    width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT,
    height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT,
    backgroundColor: nativeDefault.colors.WHITE,
    borderRadius: nativeDefault.radii.round,
  };
  obj.dot = size1;
  return obj;
});
const __initData = {
  code: "function FormRadioNativeTsx1(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');}",
};
const __initData2 = {
  code: "function FormRadioNativeTsx2(){const{withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING}=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');}",
};
const __initData3 = {
  code: "function FormRadioNativeTsx3(){const{borderColor,backgroundColor}=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};}",
};
const __initData4 = {
  code: "function FormRadioNativeTsx4(){const{useReducedMotion,withSpring,selected,SUBTLE_SPRING}=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export const FormRadio = function FormRadio(selected) {
  selected = selected.selected;
  const tmp = derivedValue1();
  const enabled = sharedValue.useContext(selected(unselected[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let derivedValue;
  derivedValue1 = undefined;
  const tmp2 = derivedValue1();
  const selected2 = tmp2.selected;
  unselected = tmp2.unselected;
  sharedValue = selected(unselected[5]).useSharedValue(selected);
  let items = [selected, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(selected);
  }, items);
  let obj = selected(unselected[5]);
  class T {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[6]);
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
  let obj2 = selected(unselected[5]);
  T.__closure = {
    withSpring: selected(unselected[6]).withSpring,
    selectedShared: sharedValue,
    selectedStyles: selected2,
    unselectedStyles: unselected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  T.__workletHash = 12275577765341;
  T.__initData = __initData;
  derivedValue = obj2.useDerivedValue(T);
  const obj3 = {
    withSpring: selected(unselected[6]).withSpring,
    selectedShared: sharedValue,
    selectedStyles: selected2,
    unselectedStyles: unselected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  class C {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[6]);
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
  const obj4 = selected(unselected[5]);
  C.__closure = {
    withSpring: selected(unselected[6]).withSpring,
    selectedShared: sharedValue,
    selectedStyles: selected2,
    unselectedStyles: unselected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  C.__workletHash = 7732795836606;
  C.__initData = __initData2;
  derivedValue1 = obj4.useDerivedValue(C);
  const obj5 = {
    withSpring: selected(unselected[6]).withSpring,
    selectedShared: sharedValue,
    selectedStyles: selected2,
    unselectedStyles: unselected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  const fn = function b() {
    return { borderColor: derivedValue.get(), backgroundColor: derivedValue1.get() };
  };
  fn.__closure = { borderColor: derivedValue, backgroundColor: derivedValue1 };
  fn.__workletHash = 5670342272321;
  fn.__initData = __initData3;
  closure_129_0 = enabled;
  closure_129_1 = selected;
  const animatedStyle = selected(unselected[5]).useAnimatedStyle(fn);
  const obj6 = selected(unselected[5]);
  const fn2 = function s() {
    let num = 0.5;
    if (selected) {
      num = 1;
    }
    let num2 = 0;
    if (selected2) {
      num2 = 1;
    }
    const obj2 = { opacity: spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!selected2) {
      num3 = num;
    }
    const tmpResult = spring;
    const items = [{ scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) }];
    obj2.transform = items;
    return obj2;
  };
  const obj7 = selected(unselected[5]);
  fn2.__closure = {
    useReducedMotion: enabled,
    withSpring: selected(unselected[6]).withSpring,
    selected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  fn2.__workletHash = 15209729079449;
  fn2.__initData = __initData4;
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const obj9 = { style: null, children: null };
  const items1 = [tmp.radio, animatedStyle];
  obj9.style = items1;
  const obj10 = { style: null };
  const items2 = [tmp.dot, animatedStyle1];
  obj10.style = items2;
  obj9.children = derivedValue(selected2(unselected[5]).View, obj10);
  return derivedValue(selected2(unselected[5]).View, obj9);
};
