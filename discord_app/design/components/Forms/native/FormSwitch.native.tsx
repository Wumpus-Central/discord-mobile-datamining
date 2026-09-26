// === Module 6622: FormSwitch ===

// Module 6622 (FormSwitch)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import spring from "spring" /* 5280 */;
import IconDefault from "Icon" /* 5283 */;
import springPresets from "springPresets" /* 5284 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const ReanimatedRexport_mod = ReanimatedRexport2;

require = fn;
const jsx = fn(21).jsx;
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(4836);
let obj = { switch: null, unselectedIcon: null, selectedIcon: null, knob: null };
let size = { width: nativeDefault.modules.mobile.CONTROL_SWITCH_WIDTH, height: nativeDefault.modules.mobile.CONTROL_SWITCH_HEIGHT, padding: nativeDefault.space.PX_4 - 1, flexGrow: 0, flexShrink: 0, borderRadius: nativeDefault.radii.lg, borderWidth: 1, backgroundColor: nativeDefault.colors.SWITCH_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.SWITCH_BORDER_DEFAULT };
obj.switch = size;
obj.unselectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_DEFAULT };
obj.selectedIcon = { tintColor: nativeDefault.colors.SWITCH_THUMB_ICON_ACTIVE };
const size1 = { height: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, width: nativeDefault.modules.mobile.CONTROL_SWITCH_KNOB_SIZE, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.SWITCH_THUMB_BACKGROUND_DEFAULT };
obj.knob = size1;
let closure_7 = createStyles.createStyles(obj);
let ReanimatedRexport = ReanimatedRexport_mod;
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
let closure_9 = { code: "function FormSwitchNativeTsx1(){const{progress,interpolateColor,trackColor,trackSelectedColor,trackBorderColor,trackBorderSelectedColor}=this.__closure;const t=progress.get();return{backgroundColor:interpolateColor(t,[0,1],[trackColor,trackSelectedColor]),borderColor:interpolateColor(t,[0,1],[trackBorderColor,trackBorderSelectedColor])};}" };
let closure_10 = { code: "function FormSwitchNativeTsx2(){const{progress,interpolate,knobCheckedLeft,interpolateColor,knobBackgroundColor,knobSelectedBackgroundColor}=this.__closure;const t=progress.get();return{left:interpolate(t,[0,1],[0,knobCheckedLeft]),backgroundColor:interpolateColor(t,[0,1],[knobBackgroundColor,knobSelectedBackgroundColor])};}" };
let closure_11 = { code: "function FormSwitchNativeTsx3(){const{progress,interpolate,off,on,useReducedMotion}=this.__closure;const t=progress.get();const opacity=interpolate(t,[0,1],[off,on]);const scale=useReducedMotion?1:interpolate(t,[0,1],[off,on]);return{opacity:opacity,transform:[{scale:scale}]};}" };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Forms/native/FormSwitch.native.tsx");

export const FormSwitch = function FormSwitch(onValueChange) {
  ({ disabled, value } = onValueChange);
  _require = value;
  importDefault = onValueChange.onValueChange;
  ({ accessibilityLabel, accessibilityHint, aria-hidden: tmp } = onValueChange);
  const context = sharedValue.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext);
  enabled = context.reducedMotion.enabled;
  [tmp6, _slicedToArray] = sharedValue.useState(value);
  let obj = sharedValue;
  const tmp5 = _slicedToArray(sharedValue.useState(value), 2);
  let num = 0;
  if (value) {
    num = 1;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  let items = [value, sharedValue];
  const effect = obj.useEffect(() => {
    _slicedToArray(c0);
    let num = 0;
    if (c0) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp9 = token2();
  let obj2 = require("ReanimatedRexport");
  const token = require("useToken").useToken(require("native").colors.SWITCH_BACKGROUND_DEFAULT);
  let tmp2Result = require("useToken");
  const token1 = require("useToken").useToken(require("native").colors.SWITCH_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result11 = require("useToken");
  token2 = require("useToken").useToken(require("native").colors.SWITCH_BORDER_DEFAULT);
  const tmp2Result12 = require("useToken");
  const token3 = require("useToken").useToken(require("native").colors.SWITCH_BORDER_SELECTED_DEFAULT);
  const tmp2Result13 = require("useToken");
  const token4 = require("useToken").useToken(require("native").modules.mobile.CONTROL_SWITCH_KNOB_CHECKED_OFFSET);
  const tmp2Result14 = require("useToken");
  const token5 = require("useToken").useToken(require("native").colors.SWITCH_THUMB_BACKGROUND_DEFAULT);
  const tmp2Result15 = require("useToken");
  const token6 = require("useToken").useToken(require("native").colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT);
  const tmp2Result16 = require("useToken");
  class D {
    constructor() {
      value = closure_4.get();
      obj = { backgroundColor: null, borderColor: null };
      obj2 = closure_0(closure_2[4]);
      items = [, ];
      items[0] = closure_5;
      items[1] = closure_6;
      obj.backgroundColor = obj2.interpolateColor(value, [0, 1], items);
      obj3 = closure_0(closure_2[4]);
      items1 = [, ];
      items1[0] = closure_7;
      items1[1] = closure_8;
      obj.borderColor = obj3.interpolateColor(value, [0, 1], items1);
      return obj;
    }
  }
  const tmp2Result17 = require("ReanimatedRexport");
  D.__closure = { progress: sharedValue, interpolateColor: require("ReanimatedRexport").interpolateColor, trackColor: token, trackSelectedColor: token1, trackBorderColor: token2, trackBorderSelectedColor: token3 };
  D.__workletHash = 11488728296308;
  D.__initData = token4;
  const animatedStyle = tmp2Result17.useAnimatedStyle(D);
  const obj3 = { progress: sharedValue, interpolateColor: require("ReanimatedRexport").interpolateColor, trackColor: token, trackSelectedColor: token1, trackBorderColor: token2, trackBorderSelectedColor: token3 };
  const fn = function y() {
    value = sharedValue.get();
    const obj = { left: null, backgroundColor: null };
    const items = [0, token4];
    obj.left = ReanimatedRexport2.interpolate(value, [0, 1], items);
    const items1 = [token5, token6];
    obj.backgroundColor = ReanimatedRexport2.interpolateColor(value, [0, 1], items1);
    return obj;
  };
  const tmp2Result18 = require("ReanimatedRexport");
  fn.__closure = { progress: sharedValue, interpolate: require("ReanimatedRexport").interpolate, knobCheckedLeft: token4, interpolateColor: require("ReanimatedRexport").interpolateColor, knobBackgroundColor: token5, knobSelectedBackgroundColor: token6 };
  fn.__workletHash = 7732502313271;
  fn.__initData = token5;
  _require = 1;
  const animatedStyle1 = tmp2Result18.useAnimatedStyle(fn);
  const obj4 = { progress: sharedValue, interpolate: require("ReanimatedRexport").interpolate, knobCheckedLeft: token4, interpolateColor: require("ReanimatedRexport").interpolateColor, knobBackgroundColor: token5, knobSelectedBackgroundColor: token6 };
  const fn2 = function n() {
    value = noop.get();
    const obj = { opacity: null, transform: null };
    const items = [c1, c0];
    obj.opacity = v0(enabled[4]).interpolate(value, [0, 1], items);
    let num = 1;
    if (!dependencyMap) {
      const items1 = [c1, c0];
      num = v0(enabled[4]).interpolate(value, [0, 1], items1);
      const tmp2Result = v0(enabled[4]);
    }
    const items2 = [{ scale: num }];
    obj.transform = items2;
    return obj;
  };
  const tmp2Result19 = require("ReanimatedRexport");
  fn2.__closure = { progress: sharedValue, interpolate: require("ReanimatedRexport").interpolate, off: 0, on: 1, useReducedMotion: enabled };
  fn2.__workletHash = 12190941017160;
  fn2.__initData = token6;
  _require = 0;
  importDefault = 1;
  const animatedStyle2 = tmp2Result19.useAnimatedStyle(fn2);
  require("ReanimatedRexport");
  const fn3 = function n() {
    value = noop.get();
    const obj = { opacity: null, transform: null };
    const items = [c1, c0];
    obj.opacity = v0(enabled[4]).interpolate(value, [0, 1], items);
    let num = 1;
    if (!dependencyMap) {
      const items1 = [c1, c0];
      num = v0(enabled[4]).interpolate(value, [0, 1], items1);
      const tmp2Result = v0(enabled[4]);
    }
    const items2 = [{ scale: num }];
    obj.transform = items2;
    return obj;
  };
  const obj5 = { progress: sharedValue, interpolate: require("ReanimatedRexport").interpolate, off: 0, on: 1, useReducedMotion: enabled };
  fn3.__closure = { progress: sharedValue, interpolate: require("ReanimatedRexport").interpolate, off: 1, on: 0, useReducedMotion: enabled };
  fn3.__workletHash = 12190941017160;
  fn3.__initData = token6;
  if (!context.switchIconsEnabled) {
    if (tmp) {
      let obj7 = { "aria-hidden": true, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    } else {
      obj7 = { accessible: true, accessibilityRole: "switch", accessibilityLabel, accessibilityHint, accessibilityState: null, onAccessibilityTap: null };
      const obj8 = { disabled, checked: tmp6 };
      obj7.accessibilityState = obj8;
      obj7.onAccessibilityTap = function onAccessibilityTap() {
        const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
        const tmp3 = haptics_HapticFeedbackTypesDefault;
        if (c0) {
          const result = triggerHapticFeedback(tmp3.TOGGLE_OFF);
        } else {
          const result1 = triggerHapticFeedback(tmp3.TOGGLE_ON);
        }
        _slicedToArray(!c0);
        let num = 1;
        if (c0) {
          num = 0;
        }
        const result2 = sharedValue.set(spring.withSpring(num, springPresets.SUBTLE_SPRING, "animate-always"));
        const timerId = setTimeout(() => {
          if (closure_1_1 != null) {
            tmp(!v0);
          }
        });
      };
    }
    const obj9 = { style: null, onPress: null, disabled: null };
    let items1 = [tmp9.switch, animatedStyle];
    obj9.style = items1;
    obj9.onPress = function onPress() {
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
    obj9.disabled = disabled;
    const merged = Object.assign(obj7);
    const obj10 = { style: null, children: null };
    let items2 = [tmp9.knob, animatedStyle1];
    obj10.style = items2;
    obj10.children = null;
    obj9.children = token(tmp10(tmp3[4]).View, obj10);
    return token(token1, obj9);
  } else {
    const obj11 = { source: null, size: null, style: null };
    if (tmp6) {
      obj11.source = tmp10(tmp3[12]);
      obj11.size = tmp10(tmp3[7]).Sizes.SMALL_20;
      const items3 = [tmp9.selectedIcon, animatedStyle2];
      obj11.style = items3;
      let tmp25 = obj11;
    } else {
      obj11.source = tmp10(tmp3[13]);
      obj11.size = tmp10(tmp3[7]).Sizes.SMALL;
      const items4 = [tmp9.unselectedIcon, tmp22];
      obj11.style = items4;
      tmp25 = obj11;
    }
    token(token3, tmp25);
  }
};