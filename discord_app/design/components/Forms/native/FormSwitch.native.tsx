// discord_app/design/components/Forms/native/FormSwitch.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../modules/haptics/HapticFeedbackTypes.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
const jsx = fn(21).jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
fn(4560);
let obj = { switch: null, unselectedBackground: null, unselectedIcon: null, selectedIcon: null, selected: null, knob: null };
let size = { width: nativeDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: nativeDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: nativeDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
obj.switch = size;
obj = { tintColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
obj.unselectedBackground = obj;
const createStyles = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj.unselectedIcon = createStyles;
obj.selectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
let obj2 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
obj.selected = { tintColor: nativeDefault.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_SELECTED_DEFAULT };
const size1 = { height: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj.knob = size1;
let closure_7 = createStyles.createStyles(obj);
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
  let obj = require("ReanimatedRexport");
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
      obj = { backgroundColor: obj.withSpring(tintColor, tmp(tmp2[10]).SUBTLE_SPRING, "animate-always"), borderColor: null };
      tmpResult = tmp(tmp2[9]);
      if (tmp3) {
        tmp7 = selected;
        borderColor = selected.borderColor;
      } else {
        tmp6 = unselectedBackground;
        borderColor = unselectedBackground.borderColor;
      }
      obj.borderColor = tmpResult.withSpring(borderColor, tmp(tmp2[10]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: require("spring").withSpring, checked, selected, unselectedBackground, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  G.__closure = obj;
  G.__workletHash = 2232234503354;
  G.__initData = token2;
  const animatedStyle = obj.useAnimatedStyle(G);
  let obj2 = require("useToken");
  token = obj2.useToken(require("native").modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  let obj3 = require("useToken");
  const token1 = obj3.useToken(require("native").colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  let obj4 = require("useToken");
  token2 = obj4.useToken(require("native").colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  let obj5 = require("ReanimatedRexport");
  const fn = function y() {
    let obj = spring;
    let num = 0;
    if (first) {
      num = token;
    }
    obj = { left: obj.withSpring(num, tmp(4978).SUBTLE_SPRING, "animate-always"), backgroundColor: spring.withSpring(first ? token2 : token1, springPresets.SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  obj = { withSpring: require("spring").withSpring, checked, knobCheckedLeft: token, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  fn.__closure = obj;
  fn.__workletHash = 3687946563898;
  fn.__initData = __initData;
  _require = 1;
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  let obj7 = require("ReanimatedRexport");
  const fn2 = function n() {
    if (dependencyMap) {
      v0(enabled[9]);
      let obj = { opacity: null, transform: null };
      obj.opacity = obj.withSpring(_slicedToArray ? c0 : c1, v0(enabled[10]).SUBTLE_SPRING, "animate-always");
      obj = { scale: v0(enabled[9]).withSpring(1, v0(enabled[10]).SUBTLE_SPRING) };
      const items = [obj];
      obj.transform = items;
      return obj;
    }
  };
  fn2.__closure = { useReducedMotion: enabled, checked, on: 1, off: 0, withSpring: require("spring").withSpring, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn2.__workletHash = 14329332652102;
  fn2.__initData = __initData2;
  _require = 0;
  importDefault = 1;
  const animatedStyle2 = obj7.useAnimatedStyle(fn2);
  require("ReanimatedRexport");
  const fn3 = function n() {
    if (dependencyMap) {
      v0(enabled[9]);
      let obj = { opacity: null, transform: null };
      obj.opacity = obj.withSpring(_slicedToArray ? c0 : c1, v0(enabled[10]).SUBTLE_SPRING, "animate-always");
      obj = { scale: v0(enabled[9]).withSpring(1, v0(enabled[10]).SUBTLE_SPRING) };
      const items = [obj];
      obj.transform = items;
      return obj;
    }
  };
  obj2 = { useReducedMotion: enabled, checked, on: 0, off: 1, withSpring: require("spring").withSpring, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING };
  fn3.__closure = obj2;
  fn3.__workletHash = 14329332652102;
  fn3.__initData = __initData2;
  if (!context.switchIconsEnabled) {
    if (tmp) {
      obj3 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    } else {
      obj3 = { accessible: true, accessibilityRole: "switch", accessibilityLabel, accessibilityHint, accessibilityState: null, onAccessibilityTap: null };
      obj4 = { disabled, checked };
      obj3.accessibilityState = obj4;
      obj3.onAccessibilityTap = function onAccessibilityTap() {
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
    obj5 = { style: null, onPress: null, disabled: null };
    const items1 = [tmp7.switch, animatedStyle];
    obj5.style = items1;
    obj5.onPress = function onPress() {
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
    obj5.disabled = disabled;
    const merged = Object.assign(obj3);
    const obj6 = { style: null, children: null };
    const items2 = [tmp7.knob, animatedStyle1];
    obj6.style = items2;
    obj6.children = null;
    obj5.children = selected(tmp9(tmp2[4]).View, obj6);
    return selected(unselectedBackground, obj5);
  } else {
    obj7 = { source: null, size: null, style: null };
    if (checked) {
      obj7.source = tmp9(tmp2[12]);
      obj7.size = tmp9(tmp2[7]).Sizes.SMALL_20;
      const items3 = [tmp7.selectedIcon, animatedStyle2];
      obj7.style = items3;
      let tmp19 = obj7;
    } else {
      obj7.source = tmp9(tmp2[13]);
      obj7.size = tmp9(tmp2[7]).Sizes.SMALL;
      const items4 = [tmp7.unselectedIcon, tmp16];
      obj7.style = items4;
      tmp19 = obj7;
    }
    selected(token1, tmp19);
  }
};