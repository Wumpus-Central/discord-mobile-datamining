// discord_app/design/components/Forms/native/FormCheckbox.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { checkbox: null, unselected: null, selected: null, checkmark: null };
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
createStyles.checkbox = size;
createStyles = {
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT,
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT,
};
createStyles.unselected = createStyles;
createStyles.selected = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
let obj1 = {
  borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT,
  backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT,
};
createStyles.checkmark = { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = createStyles.createStyles(createStyles);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const __initData = {
  code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}",
};
const __initData2 = {
  code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}",
};
size = fn(2);
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp = closure_5();
  const enabled = noop.useContext(checked(unselected[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp2 = closure_5();
  const selected = tmp2.selected;
  unselected = tmp2.unselected;
  checked(unselected[4]);
  const fn = function _() {
    let obj = spring;
    if (checked) {
      let borderColor = selected.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    obj = {
      borderColor: obj.withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"),
      backgroundColor: null,
    };
    if (checked) {
      let backgroundColor = selected.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    obj.backgroundColor = spring.withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
    return obj;
  };
  let obj = {
    withSpring: checked(unselected[8]).withSpring,
    checked,
    selected,
    unselected,
    SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING,
  };
  fn.__closure = obj;
  fn.__workletHash = 11278373524374;
  fn.__initData = __initData;
  closure_129_0 = enabled;
  closure_129_1 = checked;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = checked(unselected[4]);
  const fn2 = function c() {
    let num = 0.5;
    if (checked) {
      num = 1;
    }
    let obj = spring;
    let num2 = 0;
    if (selected) {
      num2 = 1;
    }
    obj = { opacity: obj.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!selected) {
      num3 = num;
    }
    obj = { scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = {
    useReducedMotion: enabled,
    withSpring: checked(unselected[8]).withSpring,
    checked,
    SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 13939484082835;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  const obj1 = { style: null, children: null };
  let items = [tmp.checkbox, animatedStyle];
  obj1.style = items;
  obj2 = { source: selected(unselected[7]), size: selected(unselected[5]).Sizes.SMALL_20, style: null };
  const items1 = [tmp.checkmark, animatedStyle1];
  obj2.style = items1;
  obj1.children = <Icon source={selected(unselected[7])} size={selected(unselected[5]).Sizes.SMALL_20} style={null} />;
  return jsx(selected(unselected[4]).View, { style: null, children: null });
};
