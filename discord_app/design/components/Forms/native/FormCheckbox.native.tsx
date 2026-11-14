// discord_app/design/components/Forms/native/FormCheckbox.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import AccessibilityPreferencesContext from "../../../../../discord_common/js/packages/design/components/AccessibilityPreferencesContext/AccessibilityPreferencesContext.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import _modDef7735 from "../../../../../_runtime/metro/07735__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const module_1655 = _mod1655;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let obj2 = { checkbox: null, unselected: null, selected: null, checkmark: null };
let size = {
  width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT,
  height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT,
  flexGrow: 0,
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH,
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT,
};
obj2.checkbox = size;
obj2.unselected = {
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT,
};
obj2.selected = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
const obj4 = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
obj2.checkmark = { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = createStyles.createStyles(obj2);
const Icon = module_1655.createAnimatedComponent(IconDefault);
let closure_7 = {
  code: "(function FormCheckboxNativeTsx1(){let[withSpring,checked,selected,unselected,SUBTLE_SPRING]=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;})",
};
let closure_8 = {
  code: "(function FormCheckboxNativeTsx2(){let[useReducedMotion,withSpring,checked,SUBTLE_SPRING]=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};})",
};
size = fn(2);
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp = closure_5();
  ({ selected, unselected } = closure_5());
  const tmp4 = closure_5();
  items = [closure_7, spring_spring.withSpring, checked, selected, unselected, springPresets.SUBTLE_SPRING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  class FormCheckboxNativeTsx1 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1;
      if (closure_1) {
        tmp4 = closure_2;
        borderColor = closure_2.borderColor;
      } else {
        tmp3 = closure_3;
        borderColor = closure_3.borderColor;
      }
      obj = { borderColor: tmp(borderColor, closure_4, "animate-always"), backgroundColor: null };
      tmp5 = closure_4;
      if (tmp2) {
        tmp7 = closure_2;
        backgroundColor = closure_2.backgroundColor;
      } else {
        tmp6 = closure_3;
        backgroundColor = closure_3.backgroundColor;
      }
      obj.backgroundColor = tmp(backgroundColor, tmp5, "animate-always");
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  FormCheckboxNativeTsx1.__closure = items1;
  FormCheckboxNativeTsx1.__workletHash = 16653690425039;
  FormCheckboxNativeTsx1.__initData = tmp5;
  const animatedStyle = _mod1655.useAnimatedStyle(FormCheckboxNativeTsx1);
  const items2 = [
    closure_8,
    noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled,
    spring_spring.withSpring,
    checked,
    springPresets.SUBTLE_SPRING,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class FormCheckboxNativeTsx2 {
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
  const items3 = [tmp13, tmp14, tmp15, tmp16];
  FormCheckboxNativeTsx2.__closure = items3;
  FormCheckboxNativeTsx2.__workletHash = 5917557474474;
  FormCheckboxNativeTsx2.__initData = tmp12;
  const animatedStyle1 = _mod1655.useAnimatedStyle(FormCheckboxNativeTsx2);
  const obj2 = { style: null, children: null };
  const items4 = [tmp.checkbox, animatedStyle];
  obj2.style = items4;
  const obj3 = { source: _modDef7735, size: IconDefault.Sizes.SMALL_20, style: null };
  const items5 = [tmp.checkmark, animatedStyle1];
  obj3.style = items5;
  obj2.children = <Icon source={_modDef7735} size={IconDefault.Sizes.SMALL_20} style={null} />;
  return jsx(module_1655.View, { style: null, children: null });
}
