// === Module 6003: FormSwitch ===

// Module 6003 (FormSwitch)
import ThemesDefault from "Themes" /* 709 */;
import CONFIG_NEVER_ANIMATE from "CONFIG_NEVER_ANIMATE" /* 4928 */;
import IconSizesDefault from "IconSizes" /* 4931 */;
import SUBTLE_SPRING from "SUBTLE_SPRING" /* 4932 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "module_4217" /* 4217 */;

require = arg1;
let closure_6 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").Pressable);
let obj = { switch: null, unselectedBackground: null, unselectedIcon: null, selectedIcon: null, selected: null, knob: null };
obj = { width: ThemesDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: ThemesDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: ThemesDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: ThemesDefault.radii.lg, borderWidth: 1 };
obj[0] = obj;
createCacheKey = { tintColor: ThemesDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: ThemesDefault.colors.SWITCH_BORDER_DEFAULT };
obj[1] = createCacheKey;
obj[2] = { tintColor: ThemesDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
let obj2 = { tintColor: ThemesDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj[3] = { tintColor: ThemesDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
let obj3 = { tintColor: ThemesDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
obj[4] = { tintColor: ThemesDefault.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: ThemesDefault.colors.SWITCH_BORDER_SELECTED_DEFAULT };
let obj4 = { tintColor: ThemesDefault.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: ThemesDefault.colors.SWITCH_BORDER_SELECTED_DEFAULT };
obj[5] = { height: ThemesDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: ThemesDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round };
let closure_7 = createCacheKey.createStyles(obj);
let obj5 = { height: ThemesDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: ThemesDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round };
let closure_8 = importDefaultResult.createAnimatedComponent(IconSizesDefault);
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always'),borderColor:withSpring(checked?selected.borderColor:unselectedBackground.borderColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_10 = { code: "function FormSwitchNativeTsx2(){const{withSpring,checked,knobCheckedLeft,SUBTLE_SPRING,knobSelectedBackgroundColor,knobBackgroundColor}=this.__closure;return{left:withSpring(checked?knobCheckedLeft:0,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?knobSelectedBackgroundColor:knobBackgroundColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_11 = { code: "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}" };
const importDefaultResult1 = importDefaultResult;
let result = require("set").fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  ({ disabled, value } = onValueChange);
  let _require = value;
  importDefault = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = React.useContext(_require(enabled[8]).AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  const tmp4 = first(React.useState(value), 2);
  first = tmp4[0];
  React = tmp4[1];
  let items = [value];
  const effect = React.useEffect(() => {
    callback(c0);
  }, items);
  const tmp7 = token();
  const selected = tmp7.selected;
  const unselectedBackground = tmp7.unselectedBackground;
  let obj = _require(enabled[4]);
  class G {
    constructor() {
      tmp = c0;
      tmp2 = enabled;
      obj = c0(enabled[9]);
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
      obj[1] = tmpResult.withSpring(borderColor, tmp(tmp2[10]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: _require(enabled[9]).withSpring, checked: first, selected, unselectedBackground, SUBTLE_SPRING: _require(enabled[10]).SUBTLE_SPRING };
  G.__closure = obj;
  G.__workletHash = 2232234503354;
  G.__initData = token2;
  const animatedStyle = obj.useAnimatedStyle(G);
  let obj2 = _require(enabled[11]);
  token = obj2.useToken(importDefault(enabled[6]).modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  let obj3 = _require(enabled[11]);
  const token1 = obj3.useToken(importDefault(enabled[6]).colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  let obj4 = _require(enabled[11]);
  token2 = obj4.useToken(importDefault(enabled[6]).colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  let obj5 = _require(enabled[4]);
  const fn = function y() {
    let obj = v0(enabled[9]);
    let num = 0;
    if (first) {
      num = token;
    }
    obj = { left: obj.withSpring(num, tmp(tmp2[10]).SUBTLE_SPRING, "animate-always"), backgroundColor: v0(enabled[9]).withSpring(first ? token2 : token1, v0(enabled[10]).SUBTLE_SPRING, "animate-always") };
    return obj;
  };
  obj = { withSpring: _require(enabled[9]).withSpring, checked: first, knobCheckedLeft: token, SUBTLE_SPRING: _require(enabled[10]).SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  fn.__closure = obj;
  fn.__workletHash = 3687946563898;
  fn.__initData = closure_10;
  _require = 1;
  importDefault = 0;
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  let obj7 = _require(enabled[4]);
  const fn2 = function n() {
    if (enabled) {
      let obj = CONFIG_NEVER_ANIMATE;
      obj = { opacity: null, transform: null };
      obj[0] = obj.withSpring(first ? c0 : c1, SUBTLE_SPRING.SUBTLE_SPRING, "animate-always");
      obj = { scale: null };
      obj[0] = CONFIG_NEVER_ANIMATE.withSpring(1, SUBTLE_SPRING.SUBTLE_SPRING);
      const items = [obj];
      obj[1] = items;
      return obj;
    }
  };
  fn2.__closure = { useReducedMotion: enabled, checked: first, on: 1, off: 0, withSpring: _require(enabled[9]).withSpring, SUBTLE_SPRING: _require(enabled[10]).SUBTLE_SPRING };
  fn2.__workletHash = 14329332652102;
  fn2.__initData = closure_11;
  _require = 0;
  importDefault = 1;
  const animatedStyle2 = obj7.useAnimatedStyle(fn2);
  _require(enabled[4]);
  const fn3 = function n() {
    if (enabled) {
      let obj = CONFIG_NEVER_ANIMATE;
      obj = { opacity: null, transform: null };
      obj[0] = obj.withSpring(first ? c0 : c1, SUBTLE_SPRING.SUBTLE_SPRING, "animate-always");
      obj = { scale: null };
      obj[0] = CONFIG_NEVER_ANIMATE.withSpring(1, SUBTLE_SPRING.SUBTLE_SPRING);
      const items = [obj];
      obj[1] = items;
      return obj;
    }
  };
  obj2 = { useReducedMotion: enabled, checked: first, on: 0, off: 1, withSpring: _require(enabled[9]).withSpring, SUBTLE_SPRING: _require(enabled[10]).SUBTLE_SPRING };
  fn3.__closure = obj2;
  fn3.__workletHash = 14329332652102;
  fn3.__initData = closure_11;
  if (!context.switchIconsEnabled) {
    if (tmp) {
      obj3 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    } else {
      obj3 = { accessible: true, accessibilityRole: "switch", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, onAccessibilityTap: null };
      obj3[2] = accessibilityLabel;
      obj3[3] = accessibilityHint;
      obj4 = { disabled: null, checked: null };
      obj4[0] = disabled;
      obj4[1] = first;
      obj3[4] = obj4;
      obj3[5] = function onAccessibilityTap() {
        const triggerHapticFeedback = v0(enabled[14]).triggerHapticFeedback;
        const tmp3 = v1(enabled[15]);
        if (v0) {
          const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
        }
        callback(!v0);
        const timerId = setTimeout(() => {
          if (closure_1 != null) {
            tmp(!closure_0);
          }
        });
      };
    }
    obj5 = { style: null, onPress: null, disabled: null };
    const items1 = [tmp7.switch, animatedStyle];
    obj5[0] = items1;
    obj5[1] = function onPress() {
      const triggerHapticFeedback = v0(enabled[14]).triggerHapticFeedback;
      const tmp3 = v1(enabled[15]);
      if (v0) {
        const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
      } else {
        const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
      }
      if (v1 != null) {
        tmp6(!v0);
      }
    };
    obj5[2] = disabled;
    const merged = Object.assign(obj3);
    const obj6 = { style: null, children: null };
    const items2 = [tmp7.knob, animatedStyle1];
    obj6[0] = items2;
    obj6[1] = null;
    obj5.children = selected(tmp9(tmp2[4]).View, obj6);
    return selected(unselectedBackground, obj5);
  } else {
    obj7 = { source: null, size: null, style: null };
    if (first) {
      obj7[0] = tmp9(tmp2[12]);
      obj7[1] = tmp9(tmp2[7]).Sizes.SMALL_20;
      const items3 = [tmp7.selectedIcon, animatedStyle2];
      obj7[2] = items3;
      let tmp19 = obj7;
    } else {
      obj7[0] = tmp9(tmp2[13]);
      obj7[1] = tmp9(tmp2[7]).Sizes.SMALL;
      const items4 = [tmp7.unselectedIcon, tmp16];
      obj7[2] = items4;
      tmp19 = obj7;
    }
    selected(token1, tmp19);
    const tmp17 = selected;
    const tmp18 = token1;
  }
};