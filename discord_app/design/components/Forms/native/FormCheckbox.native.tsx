// === Module 8085: FormCheckbox ===

// Module 8085 (FormCheckbox)
import ThemesDefault from "Themes" /* 712 */;
import IconSizesDefault from "IconSizes" /* 4747 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import importDefaultResult from "module_4115" /* 4115 */;

const require = fn;
const createCacheKey = { width: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: ThemesDefault.colors.CHECKBOX_BORDER_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.CHECKBOX_BORDER_DEFAULT };
createCacheKey[2] = { borderColor: ThemesDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: ThemesDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
createCacheKey[3] = { tintColor: ThemesDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = createCacheKey.createStyles(createCacheKey);
let closure_6 = importDefaultResult.createAnimatedComponent(IconSizesDefault);
let closure_7 = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
let closure_8 = { code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
const result = require("obj132").fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp2 = callback();
  React.useContext(enabled(unselected[7]).AccessibilityPreferencesContext).reducedMotion.enabled;
  enabled = checked;
  const tmp3 = callback();
  const selected = tmp3.selected;
  checked = selected;
  unselected = tmp3.unselected;
  enabled(unselected[4]);
  const fn = function _() {
    let obj = enabled(unselected[9]);
    if (enabled) {
      let borderColor = checked.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    obj = { borderColor: obj.withSpring(borderColor, enabled(unselected[10]).SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    if (enabled) {
      let backgroundColor = checked.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    obj[1] = enabled(unselected[9]).withSpring(backgroundColor, enabled(unselected[10]).SUBTLE_SPRING, "animate-always");
    return obj;
  };
  let obj = { withSpring: enabled(unselected[9]).withSpring, checked, selected, unselected, SUBTLE_SPRING: enabled(unselected[10]).SUBTLE_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 11278373524374;
  fn.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = enabled(unselected[4]);
  const fn2 = function c() {
    let num = 0.5;
    if (enabled) {
      num = 1;
    }
    let obj = enabled(unselected[9]);
    let num2 = 0;
    if (checked) {
      num2 = 1;
    }
    obj = { opacity: obj.withSpring(num2, enabled(unselected[10]).SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!checked) {
      num3 = num;
    }
    obj = { scale: enabled(unselected[9]).withSpring(num3, enabled(unselected[10]).SUBTLE_SPRING) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { useReducedMotion: enabled, withSpring: enabled(unselected[9]).withSpring, checked, SUBTLE_SPRING: enabled(unselected[10]).SUBTLE_SPRING };
  fn2.__closure = obj;
  fn2.__workletHash = 13939484082835;
  fn2.__initData = closure_8;
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  obj1 = { style: items, children: null };
  items = [tmp2.checkbox, animatedStyle];
  obj2 = { source: checked(unselected[8]), size: null, style: null };
  const Sizes = checked(unselected[5]).Sizes;
  obj2[1] = checked(unselected[6])("FormCheckbox") ? Sizes.SMALL_20 : Sizes.SMALL;
  const items1 = [tmp2.checkmark, animatedStyle1];
  obj2[2] = items1;
  obj1[1] = <closure_6 source={checked(unselected[8])} size={null} style={null} />;
  return jsx(checked(unselected[4]).View, { style: items, children: null });
};