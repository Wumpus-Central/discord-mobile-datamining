import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";
import IconSizes from "IconSizes";
import importDefaultResult1 from "module_4054";

const require = arg1;
let closure_6 = require("module_4054").createAnimatedComponent(require("set").Pressable);
let obj = { switch: null, unselectedBackground: null, unselectedIcon: null, selectedIcon: null, selected: null, knob: null };
obj = { width: require("Themes").modules.mobile.CONTROL_SWITCH_WIDTH, height: require("Themes").modules.mobile.CONTROL_SWITCH_HEIGHT, padding: require("Themes").space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: require("Themes").radii.lg, borderWidth: 1 };
obj[0] = obj;
createCacheKey = { tintColor: require("Themes").colors.SWITCH_BACKGROUND_DEFAULT, borderColor: require("Themes").colors.SWITCH_BORDER_DEFAULT };
obj[1] = createCacheKey;
obj[2] = { tintColor: require("Themes").colors.SWITCH_THUMB_ICON_DEFAULT };
let obj2 = { tintColor: require("Themes").colors.SWITCH_THUMB_ICON_DEFAULT };
obj[3] = { tintColor: require("Themes").colors.SWITCH_THUMB_ICON_ACTIVE };
let obj3 = { tintColor: require("Themes").colors.SWITCH_THUMB_ICON_ACTIVE };
obj[4] = { tintColor: require("Themes").colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: require("Themes").colors.SWITCH_BORDER_SELECTED_DEFAULT };
let obj4 = { tintColor: require("Themes").colors.SWITCH_BACKGROUND_SELECTED_DEFAULT, borderColor: require("Themes").colors.SWITCH_BORDER_SELECTED_DEFAULT };
obj[5] = { height: require("Themes").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: require("Themes").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round };
let closure_7 = createCacheKey.createStyles(obj);
let obj5 = { height: require("Themes").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: require("Themes").modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round };
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{withSpring,checked,selected,unselectedBackground,SUBTLE_SPRING}=this.__closure;return{backgroundColor:withSpring(checked?selected.tintColor:unselectedBackground.tintColor,SUBTLE_SPRING,'animate-always'),borderColor:withSpring(checked?selected.borderColor:unselectedBackground.borderColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_10 = { code: "function FormSwitchNativeTsx2(){const{withSpring,checked,knobCheckedLeft,SUBTLE_SPRING,knobSelectedBackgroundColor,knobBackgroundColor}=this.__closure;return{left:withSpring(checked?knobCheckedLeft:0,SUBTLE_SPRING,'animate-always'),backgroundColor:withSpring(checked?knobSelectedBackgroundColor:knobBackgroundColor,SUBTLE_SPRING,'animate-always')};}" };
let closure_11 = { code: "function FormSwitchNativeTsx3(){const{useReducedMotion,checked,on,off,withSpring,SUBTLE_SPRING}=this.__closure;const scale=useReducedMotion?1:checked?on:off;return{opacity:withSpring(checked?on:off,SUBTLE_SPRING,'animate-always'),transform:[{scale:withSpring(scale,SUBTLE_SPRING)}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let tmp;
  let value;
  ({ disabled, value } = onValueChange);
  let _require = value;
  let importDefault = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = React.useContext(_require(enabled[8]).AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  let tmp4 = first(React.useState(value), 2);
  first = tmp4[0];
  React = tmp4[1];
  let items = [value];
  const effect = React.useEffect(() => {
    callback(c0);
  }, items);
  const tmp8 = importDefault(enabled[9])("FormSwitch");
  const jsx = tmp8;
  const tmp9 = unselectedBackground();
  const selected = tmp9.selected;
  unselectedBackground = tmp9.unselectedBackground;
  let obj = _require(enabled[4]);
  class G {
    constructor() {
      tmp = c0;
      tmp2 = enabled;
      obj = c0(enabled[10]);
      tmp3 = _slicedToArray;
      if (_slicedToArray) {
        tmp5 = selected;
        tintColor = selected.tintColor;
      } else {
        tmp4 = unselectedBackground;
        tintColor = unselectedBackground.tintColor;
      }
      obj = { backgroundColor: obj.withSpring(tintColor, tmp(tmp2[11]).SUBTLE_SPRING, "animate-always"), borderColor: null };
      tmpResult = tmp(tmp2[10]);
      if (tmp3) {
        tmp7 = selected;
        borderColor = selected.borderColor;
      } else {
        tmp6 = unselectedBackground;
        borderColor = unselectedBackground.borderColor;
      }
      obj[1] = tmpResult.withSpring(borderColor, tmp(tmp2[11]).SUBTLE_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: _require(enabled[10]).withSpring, checked: first, selected, unselectedBackground, SUBTLE_SPRING: _require(enabled[11]).SUBTLE_SPRING };
  G.__closure = obj;
  G.__workletHash = 2232234503354;
  G.__initData = token1;
  const animatedStyle = obj.useAnimatedStyle(G);
  let obj2 = _require(enabled[12]);
  const token = obj2.useToken(importDefault(enabled[6]).modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  let obj3 = _require(enabled[12]);
  token1 = obj3.useToken(importDefault(enabled[6]).colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  let obj4 = _require(enabled[12]);
  const token2 = obj4.useToken(importDefault(enabled[6]).colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  let obj5 = _require(enabled[4]);
  const fn = function f() {
    let obj = v0(enabled[10]);
    let num = 0;
    if (first) {
      num = token;
    }
    obj = { left: obj.withSpring(num, tmp(tmp2[11]).SUBTLE_SPRING, "animate-always"), backgroundColor: null };
    obj[1] = v0(enabled[10]).withSpring(first ? token2 : token1, v0(enabled[11]).SUBTLE_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: _require(enabled[10]).withSpring, checked: first, knobCheckedLeft: token, SUBTLE_SPRING: _require(enabled[11]).SUBTLE_SPRING, knobSelectedBackgroundColor: token2, knobBackgroundColor: token1 };
  fn.__closure = obj;
  fn.__workletHash = 3687946563898;
  fn.__initData = token2;
  _require = 1;
  importDefault = 0;
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const fn2 = function n() {
    if (enabled) {
      let obj = require(4603) /* CONFIG_NEVER_ANIMATE */;
      obj = { opacity: null, transform: null };
      obj[0] = obj.withSpring(first ? c0 : c1, require(4607) /* SUBTLE_SPRING */.SUBTLE_SPRING, "animate-always");
      obj = { scale: null };
      obj[0] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(1, require(4607) /* SUBTLE_SPRING */.SUBTLE_SPRING);
      const items = [obj];
      obj[1] = items;
      return obj;
    }
  };
  const obj8 = _require(enabled[4]);
  fn2.__closure = { useReducedMotion: enabled, checked: first, on: 1, off: 0, withSpring: _require(enabled[10]).withSpring, SUBTLE_SPRING: _require(enabled[11]).SUBTLE_SPRING };
  fn2.__workletHash = 14329332652102;
  fn2.__initData = closure_11;
  _require = 0;
  importDefault = 1;
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  const obj1 = { useReducedMotion: enabled, checked: first, on: 1, off: 0, withSpring: _require(enabled[10]).withSpring, SUBTLE_SPRING: _require(enabled[11]).SUBTLE_SPRING };
  const fn3 = function n() {
    if (enabled) {
      let obj = require(4603) /* CONFIG_NEVER_ANIMATE */;
      obj = { opacity: null, transform: null };
      obj[0] = obj.withSpring(first ? c0 : c1, require(4607) /* SUBTLE_SPRING */.SUBTLE_SPRING, "animate-always");
      obj = { scale: null };
      obj[0] = require(4603) /* CONFIG_NEVER_ANIMATE */.withSpring(1, require(4607) /* SUBTLE_SPRING */.SUBTLE_SPRING);
      const items = [obj];
      obj[1] = items;
      return obj;
    }
  };
  obj2 = { useReducedMotion: enabled, checked: first, on: 0, off: 1, withSpring: _require(enabled[10]).withSpring, SUBTLE_SPRING: _require(enabled[11]).SUBTLE_SPRING };
  fn3.__closure = obj2;
  fn3.__workletHash = 14329332652102;
  fn3.__initData = closure_11;
  let tmp17 = tmp8;
  const animatedStyle3 = _require(enabled[4]).useAnimatedStyle(fn3);
  if (tmp8) {
    tmp17 = !context.switchIconsEnabled;
  }
  if (tmp17) {
    obj3 = { style: null, onPress: null, disabled: null, accessible: true, "aria-hidden": null, accessibilityRole: "switch", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, onAccessibilityTap: null, children: null };
    const items1 = [tmp9.switch, animatedStyle];
    obj3[0] = items1;
    obj3[1] = function onPress() {
      if (closure_5) {
        const triggerHapticFeedback = v0(enabled[15]).triggerHapticFeedback;
        const tmp7 = v1(enabled[16]);
        if (v0) {
          const result = triggerHapticFeedback(tmp7.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp7.TOGGLE_ON);
        }
        const tmp4 = v0(enabled[15]);
      }
      if (v1 != null) {
        tmp10(!v0);
      }
    };
    obj3[2] = disabled;
    obj3[4] = tmp;
    obj3[6] = accessibilityLabel;
    obj3[7] = accessibilityHint;
    obj4 = { disabled: null, checked: null };
    obj4[0] = disabled;
    obj4[1] = first;
    obj3[8] = obj4;
    obj3[9] = function onAccessibilityTap() {
      if (closure_5) {
        const triggerHapticFeedback = v0(enabled[15]).triggerHapticFeedback;
        const tmp7 = v1(enabled[16]);
        if (v0) {
          const result = triggerHapticFeedback(tmp7.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp7.TOGGLE_ON);
        }
        const tmp4 = v0(enabled[15]);
      }
      callback(!v0);
      const timerId = setTimeout(() => {
        if (closure_1 != null) {
          tmp(!closure_0);
        }
      });
    };
    obj5 = { style: null, children: null };
    const items2 = [tmp9.knob, animatedStyle1];
    obj5[0] = items2;
    obj5[1] = null;
    obj3[10] = jsx(tmp7(tmp2[4]).View, { style: null, children: null });
    return <selected style={null} onPress={null} disabled={null} accessible aria-hidden={null} accessibilityRole="switch" accessibilityLabel={null} accessibilityHint={null} accessibilityState={null} onAccessibilityTap={null}>{null}</selected>;
  } else {
    const obj6 = { source: null, size: null, style: null };
    if (!first) {
      obj6[0] = tmp7(tmp2[14]);
      obj6[1] = tmp7(tmp2[7]).Sizes.SMALL;
      const items3 = [tmp9.unselectedIcon, animatedStyle3];
      obj6[2] = items3;
      tmp18(tmp19, obj6);
    }
    obj6[0] = tmp7(tmp2[13]);
    let selectedIcon = tmp7(tmp2[7]).Sizes;
    obj6[1] = tmp8 ? selectedIcon.SMALL_20 : selectedIcon.SMALL;
    selectedIcon = tmp9.selectedIcon;
    const items4 = [selectedIcon, animatedStyle2];
    obj6[2] = items4;
  }
};