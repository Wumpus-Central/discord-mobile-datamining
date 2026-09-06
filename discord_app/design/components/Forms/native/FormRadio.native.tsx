// discord_app/design/components/Forms/native/FormRadio.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  let obj = { radio: null, unselected: null, selected: null, dot: null };
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
  obj = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  obj.unselected = obj;
  obj = {
    borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
    backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED,
  };
  obj.selected = obj;
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
  let obj = selected(unselected[5]);
  sharedValue = obj.useSharedValue(selected);
  let items = [selected, sharedValue];
  const effect = sharedValue.useEffect(() => {
    const result = sharedValue.set(selected);
  }, items);
  let obj1 = selected(unselected[5]);
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
  obj = {
    withSpring: selected(unselected[6]).withSpring,
    selectedShared: sharedValue,
    selectedStyles: selected2,
    unselectedStyles: unselected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  T.__closure = obj;
  T.__workletHash = 12275577765341;
  T.__initData = __initData;
  derivedValue = obj1.useDerivedValue(T);
  let obj3 = selected(unselected[5]);
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
  obj = {
    withSpring: selected(unselected[6]).withSpring,
    selectedShared: sharedValue,
    selectedStyles: selected2,
    unselectedStyles: unselected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  C.__closure = obj;
  C.__workletHash = 7732795836606;
  C.__initData = __initData2;
  derivedValue1 = obj3.useDerivedValue(C);
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
    let obj = spring;
    let num2 = 0;
    if (selected2) {
      num2 = 1;
    }
    obj = { opacity: obj.withSpring(num2, tmp(4978).SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!selected2) {
      num3 = num;
    }
    obj = { scale: spring.withSpring(num3, tmp(4978).SUBTLE_SPRING) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj1 = {
    useReducedMotion: enabled,
    withSpring: selected(unselected[6]).withSpring,
    selected,
    SUBTLE_SPRING: selected(unselected[7]).SUBTLE_SPRING,
  };
  fn2.__closure = obj1;
  fn2.__workletHash = 15209729079449;
  fn2.__initData = __initData4;
  const animatedStyle1 = selected(unselected[5]).useAnimatedStyle(fn2);
  const obj2 = { style: null, children: null };
  const items1 = [tmp.radio, animatedStyle];
  obj2.style = items1;
  obj3 = { style: null };
  const items2 = [tmp.dot, animatedStyle1];
  obj3.style = items2;
  obj2.children = derivedValue(selected2(unselected[5]).View, obj3);
  return derivedValue(selected2(unselected[5]).View, obj2);
};
