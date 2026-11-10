// === Module 7131: FormRadio ===

// Module 7131 (FormRadio)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 5156 */;
import spring_spring from "spring/spring" /* 5763 */;
import springPresets from "springPresets" /* 5764 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_5 = createStyles.createStyles(() => {
  const CONTROL_RADIO_ICON_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_SIZE_DEFAULT;
  const CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT = nativeDefault.modules.mobile.CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT;
  const obj = { radio: null, unselected: null, selected: null, dot: null };
  const size = { width: CONTROL_RADIO_ICON_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: nativeDefault.modules.mobile.CONTROL_RADIO_ICON_BORDER_WIDTH, borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  obj.radio = size;
  obj.unselected = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  const obj2 = { backgroundColor: "transparent", borderColor: nativeDefault.colors.RADIO_BORDER_DEFAULT };
  obj.selected = { borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED, backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
  const size1 = { width: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, height: CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT, backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
  obj.dot = size1;
  return obj;
});
let closure_6 = { code: "(function FormRadioNativeTsx1(){let[withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING]=this.__closure;return withSpring(selectedShared.get()?selectedStyles.borderColor:unselectedStyles.borderColor,SUBTLE_SPRING,'animate-always');})" };
let closure_7 = { code: "(function FormRadioNativeTsx2(){let[withSpring,selectedShared,selectedStyles,unselectedStyles,SUBTLE_SPRING]=this.__closure;return withSpring(selectedShared.get()?selectedStyles.backgroundColor:unselectedStyles.backgroundColor,SUBTLE_SPRING,'animate-always');})" };
let closure_8 = { code: "(function FormRadioNativeTsx3(){let[borderColor,backgroundColor]=this.__closure;return{borderColor:borderColor.get(),backgroundColor:backgroundColor.get()};})" };
let closure_9 = { code: "(function FormRadioNativeTsx4(){let[useReducedMotion,withSpring,selected,SUBTLE_SPRING]=this.__closure;const unselectedScale=useReducedMotion?1:0.5;return{opacity:withSpring(selected?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(selected?1:unselectedScale,SUBTLE_SPRING)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Forms/native/FormRadio.native.tsx");

export function FormRadio(selected) {
  selected = selected.selected;
  const tmp = closure_5();
  ({ selected: selected2, unselected } = closure_5());
  const tmp4 = closure_5();
  const sharedValue = _mod1652.useSharedValue(selected);
  items = [selected, sharedValue];
  const effect = noop.useEffect(() => {
    const result = _undefined2.set(c0);
  }, items);
  const items1 = [closure_6, spring_spring.withSpring, sharedValue, selected2, unselected, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class FormRadioNativeTsx1 {
    constructor() {
      tmp = closure_0;
      if (closure_1.get()) {
        tmp3 = closure_2;
        borderColor = closure_2.borderColor;
      } else {
        tmp2 = closure_3;
        borderColor = closure_3.borderColor;
      }
      return tmp(borderColor, closure_4, "animate-always");
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  FormRadioNativeTsx1.__closure = items2;
  FormRadioNativeTsx1.__workletHash = 8234742107812;
  FormRadioNativeTsx1.__initData = tmp7;
  const derivedValue = _mod1652.useDerivedValue(FormRadioNativeTsx1);
  const items3 = [closure_7, spring_spring.withSpring, sharedValue, selected2, unselected, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items3;
  class FormRadioNativeTsx2 {
    constructor() {
      tmp = closure_0;
      if (closure_1.get()) {
        tmp3 = closure_2;
        backgroundColor = closure_2.backgroundColor;
      } else {
        tmp2 = closure_3;
        backgroundColor = closure_3.backgroundColor;
      }
      return tmp(backgroundColor, closure_4, "animate-always");
    }
  }
  const items4 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  FormRadioNativeTsx2.__closure = items4;
  FormRadioNativeTsx2.__workletHash = 13712264253863;
  FormRadioNativeTsx2.__initData = tmp14;
  const derivedValue1 = _mod1652.useDerivedValue(FormRadioNativeTsx2);
  const tmp2Result = _mod1652;
  const items5 = [closure_8, derivedValue, derivedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp21, tmp22, tmp23] = items5;
  class FormRadioNativeTsx3 {
    constructor() {
      obj = { borderColor: closure_0.get(), backgroundColor: closure_1.get() };
      return obj;
    }
  }
  const items6 = [tmp22, tmp23];
  FormRadioNativeTsx3.__closure = items6;
  FormRadioNativeTsx3.__workletHash = 12595254902040;
  FormRadioNativeTsx3.__initData = tmp21;
  const animatedStyle = _mod1652.useAnimatedStyle(FormRadioNativeTsx3);
  const tmp2Result3 = _mod1652;
  const items7 = [closure_9, noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled, spring_spring.withSpring, selected, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29] = items7;
  class FormRadioNativeTsx4 {
    constructor() {
      num = 0.5;
      if (closure_0) {
        num = 1;
      }
      tmp = closure_1;
      num2 = 0;
      tmp2 = closure_2;
      if (closure_2) {
        num2 = 1;
      }
      obj = { opacity: tmp(num2, closure_3, "animate-always"), transform: null };
      tmp3 = closure_3;
      num3 = 1;
      if (!tmp2) {
        num3 = num;
      }
      obj1 = { scale: tmp(num3, tmp3) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items8 = [tmp26, tmp27, tmp28, tmp29];
  FormRadioNativeTsx4.__closure = items8;
  FormRadioNativeTsx4.__workletHash = 9714979112288;
  FormRadioNativeTsx4.__initData = tmp25;
  const animatedStyle1 = _mod1652.useAnimatedStyle(FormRadioNativeTsx4);
  const obj3 = { style: null, children: null };
  const items9 = [tmp.radio, animatedStyle];
  obj3.style = items9;
  const obj4 = { style: null };
  const items10 = [tmp.dot, animatedStyle1];
  obj4.style = items10;
  obj3.children = jsx(_modDef1652.View, { style: null });
  return jsx(_modDef1652.View, { style: null, children: null });
}