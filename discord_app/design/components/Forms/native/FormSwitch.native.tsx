// === Module 7308: FormSwitch ===

// Module 7308 (FormSwitch)
import nativeDefault from "native" /* 576 */;
import HapticUtils from "HapticUtils" /* 4607 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4608 */;
import spring from "spring" /* 5058 */;
import IconDefault from "Icon" /* 5061 */;
import springPresets from "springPresets" /* 5062 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4376 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(4639);
let obj = { switch: null, unselectedBackground: null, unselectedIcon: null, selectedIcon: null, selected: null, knob: null };
let size = { width: nativeDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: nativeDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: nativeDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
obj.switch = size;
obj.unselectedBackground = { tintColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
obj.unselectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
let obj4 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj.selectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
let obj5 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
obj.selected = { tintColor: nativeDefault.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_SELECTED_DEFAULT };
const size1 = { height: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj.knob = size1;
let closure_7 = createStyles.createStyles(obj);
let ReanimatedRexport = ReanimatedRexport_mod;
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always'),borderColor:withSpring(checked?selected.borderColor:unselectedBackground.borderColor,SUBTLE_SPRING,'animate-always')};}" };
const __initData = { code: "function FormSwitchNativeTsx2(){const{withSpring,checked,knobCheckedLeft,SUBTLE_SPRING,knobSelectedBackgroundColor,knobBackgroundColor}=this.__closure;return{left:withSpring(checked?knobCheckedLeft:0,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?knobSelectedBackgroundColor:knobBackgroundColor,SUBTLE_SPRING,'animate-always')};}" };
const __initData2 = { code: "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}" };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  ({ disabled, value } = onValueChange);
  _require = value;
  importDefault = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  const tmp4 = checked(noop.useState(value), 2);
  checked = tmp4[0];
  noop = tmp4[1];
  let items = [value];
  const effect = noop.useEffect(() => {
    closure_4(c0);
  }, items);
  const tmp7 = token();
  const selected = tmp7.selected;
  const unselectedBackground = tmp7.unselectedBackground;
  class G {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[9]);
      tmp3 = closure_3;
      if (closure_3) {
        tmp5 = selected;
        tintColor = selected.tintColor;
      } else {
        tmp4 = unselectedBackground;
        tintColor = unselectedBackground.tintColor;
      }
      obj1 = { backgroundColor: obj.withSpring(tintColor, tmp(tmp2[10]).SUBTLE_SPRING, "animate-always"), borderColor: null };
      tmpResult = tmp(tmp2[9]);
      if (tmp3) {
        tmp7 = selected;
        borderColor = selected.borderColor;
      } else {
        tmp6 = unselectedBackground;
        borderColor = unselectedBackground.borderColor;
      }
      obj1.borderColor = tmpResult.withSpring(borderColor, tmp(tmp2[10]).SUBTLE_SPRING, "animate-always");
      return obj1;
    }
  }
  let obj = require("ReanimatedRexport");
  G.__closure = { withSpring: require("spring").withSpring, checked, selected, unselectedBackground, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  G.__workletHash = 2232234503354;
  G.__initData = token2;
  const animatedStyle = obj.useAnimatedStyle(G);
  let obj2 = { withSpring: require("spring").withSpring, checked, selected, unselectedBackground, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  token = require("useToken").useToken(require("native").modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  let obj3 = require("useToken");
  const token1 = require("useToken").useToken(require("native").colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  const obj4 = require("useToken");
  token2 = require("useToken").useToken(require("native").colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  const obj5 = require("useToken");
  const fn = function y() {
    let num = 0;
    if (first) {
      num = token;
    }
    const obj2 = { left: spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    obj2.backgroundColor = spring.withSpring(first ? token2 : token1, springPresets.SUBTLE_SPRING, "animate-always");
    return obj2;
  };
  const obj6 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, checked, knobCheckedLeft: token, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  fn.__workletHash = 3687946563898;
  fn.__initData = __initData;
  _require = 1;
  const animatedStyle1 = obj6.useAnimatedStyle(fn);
  const obj7 = { withSpring: require("spring").withSpring, checked, knobCheckedLeft: token, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  const fn2 = function n() {
    if (dependencyMap) {
      const obj2 = { opacity: v0(enabled[9]).withSpring(_slicedToArray ? c0 : c1, v0(enabled[10]).SUBTLE_SPRING, "animate-always"), transform: null };
      const obj3 = { scale: null };
      const obj = v0(enabled[9]);
      const tmp6 = _slicedToArray ? c0 : c1;
      obj3.scale = v0(enabled[9]).withSpring(1, v0(enabled[10]).SUBTLE_SPRING);
      const items = [obj3];
      obj2.transform = items;
      return obj2;
    }
  };
  const obj8 = require("ReanimatedRexport");
  fn2.__closure = { useReducedMotion: enabled, checked, on: 1, off: 0, withSpring: require("spring").withSpring, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn2.__workletHash = 14329332652102;
  fn2.__initData = __initData2;
  _require = 0;
  importDefault = 1;
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  require("ReanimatedRexport");
  const fn3 = function n() {
    if (dependencyMap) {
      const obj2 = { opacity: v0(enabled[9]).withSpring(_slicedToArray ? c0 : c1, v0(enabled[10]).SUBTLE_SPRING, "animate-always"), transform: null };
      const obj3 = { scale: null };
      const obj = v0(enabled[9]);
      const tmp6 = _slicedToArray ? c0 : c1;
      obj3.scale = v0(enabled[9]).withSpring(1, v0(enabled[10]).SUBTLE_SPRING);
      const items = [obj3];
      obj2.transform = items;
      return obj2;
    }
  };
  const obj9 = { useReducedMotion: enabled, checked, on: 1, off: 0, withSpring: require("spring").withSpring, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn3.__closure = { useReducedMotion: enabled, checked, on: 0, off: 1, withSpring: require("spring").withSpring, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn3.__workletHash = 14329332652102;
  fn3.__initData = __initData2;
  if (!context.switchIconsEnabled) {
    if (tmp) {
      let obj11 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    } else {
      obj11 = { accessible: true, accessibilityRole: "switch", accessibilityLabel, accessibilityHint, accessibilityState: null, onAccessibilityTap: null };
      const obj12 = { disabled, checked };
      obj11.accessibilityState = obj12;
      obj11.onAccessibilityTap = function onAccessibilityTap() {
        const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
        const tmp3 = haptics_HapticFeedbackTypesDefault;
        if (c0) {
          const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
        }
        closure_4(!c0);
        const timerId = setTimeout(() => {
          if (closure_1_1 != null) {
            tmp(!v0);
          }
        });
      };
    }
    const obj13 = { style: null, onPress: null, disabled: null };
    const items1 = [tmp7.switch, animatedStyle];
    obj13.style = items1;
    obj13.onPress = function onPress() {
      const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
      const tmp3 = haptics_HapticFeedbackTypesDefault;
      if (c0) {
        const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
      } else {
        const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
      }
      if (c1 != null) {
        tmp6(!c0);
      }
    };
    obj13.disabled = disabled;
    const merged = Object.assign(obj11);
    const obj14 = { style: null, children: null };
    const items2 = [tmp7.knob, animatedStyle1];
    obj14.style = items2;
    obj14.children = null;
    obj13.children = selected(tmp9(tmp2[4]).View, obj14);
    return selected(unselectedBackground, obj13);
  } else {
    const obj15 = { source: null, size: null, style: null };
    if (checked) {
      obj15.source = tmp9(tmp2[12]);
      obj15.size = tmp9(tmp2[7]).Sizes.SMALL_20;
      const items3 = [tmp7.selectedIcon, animatedStyle2];
      obj15.style = items3;
      let tmp19 = obj15;
    } else {
      obj15.source = tmp9(tmp2[13]);
      obj15.size = tmp9(tmp2[7]).Sizes.SMALL;
      const items4 = [tmp7.unselectedIcon, tmp16];
      obj15.style = items4;
      tmp19 = obj15;
    }
    selected(token1, tmp19);
  }
};