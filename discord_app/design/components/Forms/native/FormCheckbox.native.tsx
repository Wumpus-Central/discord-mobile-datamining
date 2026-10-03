// === Module 5991: FormCheckbox ===

// Module 5991 (FormCheckbox)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4596 */;
import IconDefault from "Icon" /* 5596 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import _modDef5992 from "module_5992" /* 5992 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
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
fn(558);
const __initData = { code: "function FormCheckboxNativeTsx1(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,\"animate-always\"),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,\"animate-always\")};return defaultAnimation;}" };
const __initData2 = { code: "function FormCheckboxNativeTsx2(){const{withSpring,checked,selected,unselected,SUBTLE_SPRING}=this.__closure;const defaultAnimation={borderColor:withSpring(checked?selected.borderColor:unselected.borderColor,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?selected.backgroundColor:unselected.backgroundColor,SUBTLE_SPRING,'animate-always')};return defaultAnimation;}" };
const obj5 = { tintColor: nativeDefault.colors.CHECKBOX_ICON_ACTIVE };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((checked) => {
  _require = checked;
  const tmp = closure_5();
  const selected = tmp.selected;
  const unselected = tmp.unselected;
  const fn = function t() {
    if (closure_0) {
      let borderColor = selected.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    const obj2 = { borderColor: spring.withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    if (closure_0) {
      let backgroundColor = selected.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    obj2.backgroundColor = spring.withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, checked, selected, unselected, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn.__workletHash = 4459088483670;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : ((checked) => {
  _require = checked;
  const tmp = closure_5();
  const selected = tmp.selected;
  const unselected = tmp.unselected;
  const fn = function t() {
    if (closure_0) {
      let borderColor = selected.borderColor;
    } else {
      borderColor = unselected.borderColor;
    }
    const obj2 = { borderColor: spring.withSpring(borderColor, springPresets.SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    if (closure_0) {
      let backgroundColor = selected.backgroundColor;
    } else {
      backgroundColor = unselected.backgroundColor;
    }
    obj2.backgroundColor = spring.withSpring(backgroundColor, springPresets.SUBTLE_SPRING, "animate-always");
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, checked, selected, unselected, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn.__workletHash = 9962611822165;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
const __initData3 = { code: "function FormCheckboxNativeTsx3(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,\"animate-always\"),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
const __initData4 = { code: "function FormCheckboxNativeTsx4(){const{useReducedMotion,withSpring,checked,SUBTLE_SPRING}=this.__closure;const uncheckedScale=useReducedMotion?1:0.5;return{opacity:withSpring(checked?1:0,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(checked?1:uncheckedScale,SUBTLE_SPRING)}]};}" };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((useReducedMotion, checked) => {
  _require = useReducedMotion;
  closure_1 = checked;
  const fn = function c() {
    let num = 0.5;
    if (closure_0) {
      num = 1;
    }
    let num2 = 0;
    if (closure_1) {
      num2 = 1;
    }
    const obj2 = { opacity: spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!closure_1) {
      num3 = num;
    }
    const tmpResult = spring;
    const items = [{ scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) }];
    obj2.transform = items;
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion, withSpring: require("spring").withSpring, checked, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn.__workletHash = 12934307330610;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : ((useReducedMotion, checked) => {
  _require = useReducedMotion;
  closure_1 = checked;
  const fn = function c() {
    let num = 0.5;
    if (closure_0) {
      num = 1;
    }
    let num2 = 0;
    if (closure_1) {
      num2 = 1;
    }
    const obj2 = { opacity: spring.withSpring(num2, springPresets.SUBTLE_SPRING, "animate-always"), transform: null };
    let num3 = 1;
    if (!closure_1) {
      num3 = num;
    }
    const tmpResult = spring;
    const items = [{ scale: spring.withSpring(num3, springPresets.SUBTLE_SPRING) }];
    obj2.transform = items;
    return obj2;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion, withSpring: require("spring").withSpring, checked, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn.__workletHash = 16476605648149;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
size = fn(2);
const result = size.fileFinishedImporting("design/components/Forms/native/FormCheckbox.native.tsx");

export const FormCheckbox = ReactCompilerGating.isReactCompilerEnabled() ? ((checked) => {
  const cResult = c.c(9);
  checked = checked.checked;
  const tmp3 = closure_5();
  const tmp4 = closure_9(checked);
  const tmp5 = closure_12(noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled, checked);
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp3.checkbox) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === tmp3.checkmark) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = { style: tmp6, children: tmp7 };
      const tmp15 = jsx(ReanimatedRexport.View, { style: tmp6, children: tmp7 });
      cResult[6] = tmp6;
      cResult[7] = tmp7;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj3 = { source: _modDef5992, size: IconDefault.Sizes.SMALL_20, style: null };
    const items = [tmp3.checkmark, tmp5];
    obj3.style = items;
    const tmp11 = <Icon source={_modDef5992} size={IconDefault.Sizes.SMALL_20} style={null} />;
    cResult[3] = tmp5;
    cResult[4] = tmp3.checkmark;
    cResult[5] = tmp11;
    tmp7 = tmp11;
  }
  const items1 = [tmp3.checkbox, tmp4];
  cResult[0] = tmp4;
  cResult[1] = tmp3.checkbox;
  cResult[2] = items1;
  tmp6 = items1;
}) : ((checked) => {
  checked = checked.checked;
  const tmp = closure_5();
  const tmp2 = closure_9(checked);
  const obj = { style: null, children: null };
  const items = [tmp.checkbox, tmp2];
  obj.style = items;
  const obj2 = { source: _modDef5992, size: IconDefault.Sizes.SMALL_20, style: null };
  const items1 = [tmp.checkmark, closure_12(noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled, checked)];
  obj2.style = items1;
  obj.children = <Icon source={_modDef5992} size={IconDefault.Sizes.SMALL_20} style={null} />;
  return jsx(ReanimatedRexport.View, { style: null, children: null });
});