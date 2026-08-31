// discord_app/design/components/Forms/native/FormCheckbox.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconSizesDefault from "../../../void/Icon/native/Icon.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../modules/reanimated/ReanimatedRexport.tsx";

const require = arg1;
createCacheKey = { checkbox: null, unselected: null, selected: null, checkmark: null };
createCacheKey = { width: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, height: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_SIZE_DEFAULT, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_RADIUS, borderWidth: ThemesDefault.modules.mobile.CONTROL_CHECKBOX_BORDER_WIDTH, borderColor: ThemesDefault.colors.CHECKBOX_BORDER_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.CHECKBOX_BORDER_DEFAULT };
let obj1 = { backgroundColor: ThemesDefault.colors.CHECKBOX_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.CHECKBOX_BORDER_DEFAULT };
createCacheKey[2] = { borderColor: ThemesDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: ThemesDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
let obj2 = { borderColor: ThemesDefault.colors.CHECKBOX_BORDER_SELECTED_DEFAULT, backgroundColor: ThemesDefault.colors.CHECKBOX_BACKGROUND_SELECTED_DEFAULT };
createCacheKey[3] = { tintColor: ThemesDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj3 = { tintColor: ThemesDefault.colors.CHECKBOX_ICON_ACTIVE };
let closure_6 = importDefaultResult.createAnimatedComponent(IconSizesDefault);
let closure_7 = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
let closure_8 = { code: "function FormCheckboxNativeTsx2(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
const result = require("set").fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = function FormCheckbox(checked) {
  checked = checked.checked;
  const tmp = callback();
  enabled = React.useContext(enabled(unselected[6]).AccessibilityPreferencesContext).reducedMotion.enabled;
  enabled = checked;
  checked = undefined;
  unselected = undefined;
  const tmp2 = callback();
  const selected = tmp2.selected;
  checked = selected;
  unselected = tmp2.unselected;
  let obj = enabled(unselected[4]);
  const fn = function _() {
    let obj = enabled(unselected[8]);
    if (enabled) {
      let borderColor = checked.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    obj = { borderColor: obj.withSpring(borderColor, tmp(tmp2[9]).SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    if (enabled) {
      let backgroundColor = checked.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    obj[1] = enabled(unselected[8]).withSpring(backgroundColor, enabled(unselected[9]).SUBTLE_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: enabled(unselected[8]).withSpring, checked, selected, unselected, SUBTLE_SPRING: enabled(unselected[9]).SUBTLE_SPRING };
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
    let obj = enabled(unselected[8]);
    let num2 = 0;
    if (checked) {
      num2 = 1;
    }
    obj = { opacity: obj.withSpring(num2, tmp(tmp2[9]).SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!checked) {
      num3 = num;
    }
    obj = { scale: enabled(unselected[8]).withSpring(num3, tmp(tmp2[9]).SUBTLE_SPRING) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { useReducedMotion: enabled, withSpring: enabled(unselected[8]).withSpring, checked, SUBTLE_SPRING: enabled(unselected[9]).SUBTLE_SPRING };
  fn2.__closure = obj;
  fn2.__workletHash = 13939484082835;
  fn2.__initData = closure_8;
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  obj1 = { style: items, children: null };
  items = [tmp.checkbox, animatedStyle];
  obj2 = { source: checked(unselected[7]), size: checked(unselected[5]).Sizes.SMALL_20, style: items1 };
  items1 = [tmp.checkmark, animatedStyle1];
  obj1[1] = <closure_6 source={checked(unselected[7])} size={checked(unselected[5]).Sizes.SMALL_20} style={items1} />;
  return jsx(checked(unselected[4]).View, { style: items, children: null });
};