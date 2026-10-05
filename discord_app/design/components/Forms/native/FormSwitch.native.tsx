// === Module 6699: FormSwitch ===

// Module 6699 (FormSwitch)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import IconDefault from "Icon" /* 5596 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport_mod = ReanimatedRexport2;
let set;

let obj2;
let obj3;
let size;
let size1;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_6 = ReanimatedRexport.createAnimatedComponent(Pressable);
let createStyles = createStyles_mod;
let obj = { switch: size, unselectedIcon: obj2, selectedIcon: obj3, knob: size1 };
size = { width: nativeDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: nativeDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: nativeDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: nativeDefault.radii.lg, borderWidth: 1, backgroundColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj3 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
size1 = { height: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.SWITCH_THUMB_BACKGROUND_DEFAULT };
let closure_7 = createStyles(obj);
ReanimatedRexport = ReanimatedRexport_mod;
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{progress,interpolateColor,trackColor,trackSelectedColor,trackBorderColor,trackBorderSelectedColor}=this.__closure;const t=progress.get();return{backgroundColor:interpolateColor(t,[0,1],[trackColor,trackSelectedColor]),borderColor:interpolateColor(t,[0,1],[trackBorderColor,trackBorderSelectedColor])};}" };
let closure_10 = { code: "function FormSwitchNativeTsx2(){const{progress,interpolate,knobCheckedLeft,interpolateColor,knobBackgroundColor,knobSelectedBackgroundColor}=this.__closure;const t_0=progress.get();return{left:interpolate(t_0,[0,1],[0,knobCheckedLeft]),backgroundColor:interpolateColor(t_0,[0,1],[knobBackgroundColor,knobSelectedBackgroundColor])};}" };
let closure_11 = { code: "function FormSwitchNativeTsx3(){const{progress,interpolate,off,on,useReducedMotion}=this.__closure;const t_1=progress.get();const opacity=interpolate(t_1,[0,1],[off,on]);const scale=useReducedMotion?1:interpolate(t_1,[0,1],[off,on]);return{opacity:opacity,transform:[{scale:scale}]};}" };
size = size_mod;
let result = size.fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let enabled;
  let items3;
  let items4;
  let obj10;
  let obj7;
  let obj8;
  let sharedValue;
  let tmp;
  let tmp6;
  let token2;
  let value;
  function n() {
    let items;
    let items2;
    let obj2;
    value = sharedValue.get();
    const obj = { opacity: obj2.interpolate(value, [0, 1], items), transform: items2 };
    items = [c1, c0];
    let num = 1;
    obj2 = ReanimatedRexport2;
    if (!enabled) {
      const items1 = [c1, c0];
      const tmp2Result = ReanimatedRexport2;
      num = tmp2Result.interpolate(value, [0, 1], items1);
    }
    items2 = [{ scale: num }];
    return obj;
  }
  ({ disabled, value } = onValueChange);
  const require = value;
  onValueChange = onValueChange.onValueChange;
  let obj = sharedValue;
  const tmp2 = require;
  let tmp3 = enabled;
  ({ accessibilityLabel, accessibilityHint, "aria-hidden": tmp } = onValueChange);
  const context = sharedValue.useContext(require("react").AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  const switchIconsEnabled = context.switchIconsEnabled;
  const tmp5 = _slicedToArray(sharedValue.useState(value), 2);
  [tmp6, _slicedToArray] = tmp5;
  let num = 0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  if (value) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [value, sharedValue];
  const effect = obj.useEffect(() => {
    _slicedToArray(require);
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (require) {
      num = 1;
    }
    const result = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp10 = token2();
  let tmp2Result = tmp2(tmp3[11]);
  const token = tmp2Result.useToken(onValueChange(tmp3[6]).colors.SWITCH_BACKGROUND_DEFAULT);
  const tmp2Result11 = tmp2(tmp3[11]);
  const token1 = tmp2Result11.useToken(onValueChange(tmp3[6]).colors.SWITCH_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result12 = tmp2(tmp3[11]);
  token2 = tmp2Result12.useToken(onValueChange(tmp3[6]).colors.SWITCH_BORDER_DEFAULT);
  const tmp2Result13 = tmp2(tmp3[11]);
  const token3 = tmp2Result13.useToken(onValueChange(tmp3[6]).colors.SWITCH_BORDER_SELECTED_DEFAULT);
  const tmp2Result14 = tmp2(tmp3[11]);
  const token4 = tmp2Result14.useToken(onValueChange(tmp3[6]).modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  const tmp2Result15 = tmp2(tmp3[11]);
  const token5 = tmp2Result15.useToken(onValueChange(tmp3[6]).colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  const tmp2Result16 = tmp2(tmp3[11]);
  const token6 = tmp2Result16.useToken(onValueChange(tmp3[6]).colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result17 = tmp2(tmp3[4]);
  class D {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj3;
      value = sharedValue.get();
      const obj = { backgroundColor: obj2.interpolateColor(value, [0, 1], items), borderColor: obj3.interpolateColor(value, [0, 1], items1) };
      items = [token, token1];
      items1 = [token2, token3];
      obj2 = ReanimatedRexport2;
      obj3 = ReanimatedRexport2;
      return obj;
    }
  }
  let obj2 = { progress: sharedValue, interpolateColor: tmp2(tmp3[4]).interpolateColor, trackColor: token, trackSelectedColor: token1, trackBorderColor: token2, trackBorderSelectedColor: token3 };
  D.__closure = obj2;
  D.__workletHash = 11488728296308;
  D.__initData = token4;
  const animatedStyle = tmp2Result17.useAnimatedStyle(D);
  const fn = function y() {
    let items;
    let items1;
    let obj2;
    let obj3;
    value = sharedValue.get();
    const obj = { left: obj2.interpolate(value, [0, 1], items), backgroundColor: obj3.interpolateColor(value, [0, 1], items1) };
    items = [0, token4];
    items1 = [token5, token6];
    obj2 = ReanimatedRexport2;
    obj3 = ReanimatedRexport2;
    return obj;
  };
  const tmp2Result18 = tmp2(tmp3[4]);
  let obj3 = { progress: sharedValue, interpolate: tmp2(tmp3[4]).interpolate, knobCheckedLeft: token4, interpolateColor: tmp2(tmp3[4]).interpolateColor, knobBackgroundColor: token5, knobSelectedBackgroundColor: token6 };
  fn.__closure = obj3;
  fn.__workletHash = 10509423128696;
  fn.__initData = token5;
  const animatedStyle1 = tmp2Result18.useAnimatedStyle(fn);
  const fn2 = n;
  const tmp2Result19 = tmp2(tmp3[4]);
  fn2.__closure = { progress: sharedValue, interpolate: tmp2(tmp3[4]).interpolate, off: 0, on: 1, useReducedMotion: enabled };
  fn2.__workletHash = 12609192900422;
  fn2.__initData = token6;
  let c0 = 0;
  let c1 = 1;
  ({ progress: sharedValue, interpolate: tmp2(tmp3[4]).interpolate, off: 0, on: 1, useReducedMotion: enabled });
  const animatedStyle2 = tmp2Result19.useAnimatedStyle(fn2);
  tmp2(tmp3[4]);
  const fn3 = n;
  fn3.__closure = { progress: sharedValue, interpolate: tmp2(tmp3[4]).interpolate, off: 1, on: 0, useReducedMotion: enabled };
  fn3.__workletHash = 12609192900422;
  fn3.__initData = token6;
  let tmp25Result = null;
  ({ progress: sharedValue, interpolate: tmp2(tmp3[4]).interpolate, off: 1, on: 0, useReducedMotion: enabled });
  if (switchIconsEnabled) {
    let tmp27;
    const obj6 = { source: null, size: null, style: null };
    const tmp25 = token;
    const tmp26 = token3;
    if (tmp6) {
      obj6.source = onValueChange(tmp3[12]);
      obj6.size = onValueChange(tmp3[7]).Sizes.SMALL_20;
      let items1 = [tmp10.selectedIcon, animatedStyle2];
      obj6.style = items1;
      tmp27 = obj6;
    } else {
      obj6.source = onValueChange(tmp3[13]);
      obj6.size = onValueChange(tmp3[7]).Sizes.SMALL;
      let items2 = [tmp10.unselectedIcon, tmp23];
      obj6.style = items2;
      tmp27 = obj6;
    }
    tmp25Result = tmp25(tmp26, tmp27);
  }
  if (tmp) {
    obj7 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  } else {
    obj7 = {
      accessible: true,
      accessibilityRole: "switch",
      accessibilityLabel,
      accessibilityHint,
      accessibilityState: obj8,
      onAccessibilityTap() {
          const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
          HapticUtils;
          const tmp3 = haptics_HapticFeedbackTypesDefault;
          if (require) {
            const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
          } else {
            const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
          }
          _slicedToArray(!require);
          let num = 1;
          set = sharedValue.set;
          const withSpring = spring.withSpring;
          spring;
          if (require) {
            num = 0;
          }
          const result2 = set(withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
          const timerId = setTimeout(() => {
            if (onValueChange != null) {
              tmp(!closure_1_0);
            }
          });
        }
    };
    obj8 = { disabled, checked: tmp6 };
  }
  const obj9 = {
    style: items3,
    onPress() {
      const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
      HapticUtils;
      const tmp3 = haptics_HapticFeedbackTypesDefault;
      if (require) {
        const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
      } else {
        const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
      }
      if (onValueChange != null) {
        tmp6(!require);
      }
    },
    disabled,
    children: token(onValueChange(tmp3[4]).View, obj10)
  };
  items3 = [tmp10.switch, animatedStyle];
  const merged = Object.assign(obj7);
  obj10 = { style: items4, children: tmp25Result };
  items4 = [tmp10.knob, animatedStyle1];
  return token(token1, obj9);
};