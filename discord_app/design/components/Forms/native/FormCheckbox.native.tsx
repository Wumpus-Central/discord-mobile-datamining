// === Module 5829: FormCheckbox ===

// Module 5829 (FormCheckbox)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5185 */;
import IconDefault from "Icon" /* 5188 */;
import springPresets from "springPresets" /* 5189 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { checkbox: null, unselected: null, selected: null, checkmark: null };
let size = { width: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: nativeDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj2.checkbox = size;
obj2.unselected = { backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
let obj3 = { backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CHECKBOX_BORDER_DEFAULT };
obj2.selected = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
const obj4 = { borderColor: nativeDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: nativeDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
obj2.checkmark = { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = createStyles.createStyles(obj2);
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const __initData = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
const __initData2 = { code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
size = fn(2);
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp = closure_5();
  const enabled = noop.useContext(checked(unselected[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp2 = closure_5();
  const selected = tmp2.selected;
  unselected = tmp2.unselected;
  const fn = function _() {
    if (checked) {
      let borderColor = selected.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    const obj2 = { borderColor: spring.withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    if (checked) {
      let backgroundColor = selected.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    obj2.backgroundColor = spring.withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
    return obj2;
  };
  let obj = checked(unselected[4]);
  fn.__closure = { withSpring: checked(unselected[8]).withSpring, checked, selected, unselected, SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING };
  fn.__workletHash = 11278373524374;
  fn.__initData = __initData;
  closure_129_0 = enabled;
  closure_129_1 = checked;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withSpring: checked(unselected[8]).withSpring, checked, selected, unselected, SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING };
  const fn2 = function c() {
    let num = 0.5;
    if (checked) {
      num = 1;
    }
    let num2 = 0;
    if (selected) {
      num2 = 1;
    }
    const obj2 = { opacity: spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!selected) {
      num3 = num;
    }
    const tmpResult = spring;
    const items = [{ scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) }];
    obj2.transform = items;
    return obj2;
  };
  const obj3 = checked(unselected[4]);
  fn2.__closure = { useReducedMotion: enabled, withSpring: checked(unselected[8]).withSpring, checked, SUBTLE_SPRING: checked(unselected[9]).SUBTLE_SPRING };
  fn2.__workletHash = 13939484082835;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  const obj5 = { style: null, children: null };
  let items = [tmp.checkbox, animatedStyle];
  obj5.style = items;
  const obj6 = { source: selected(unselected[7]), size: selected(unselected[5]).Sizes.SMALL_20, style: null };
  const items1 = [tmp.checkmark, animatedStyle1];
  obj6.style = items1;
  obj5.children = <Icon source={selected(unselected[7])} size={selected(unselected[5]).Sizes.SMALL_20} style={null} />;
  return jsx(selected(unselected[4]).View, { style: null, children: null });
};