// === Module 9940: ModalFloatingAction ===

// Module 9940 (ModalFloatingAction)
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ floating: { position: "absolute", bottom: 0, width: "100%", paddingHorizontal: 16 }, spacer: { height: 96 } });
let closure_9 = { code: "function ModalFloatingActionNativeTsx1(){const{interpolate,sharedValue,floatingBackgroundColor,useReducedMotion}=this.__closure;return{opacity:interpolate(sharedValue.get(),[0,1],[0,1]),borderBottomColor:floatingBackgroundColor,borderBottomWidth:16,transform:[{translateY:interpolate(sharedValue.get(),[useReducedMotion?0.999999:0,1],[32,0])}]};}" };
let result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalFloatingAction.native.tsx");

export const ModalFloatingAction = function ModalFloatingAction(isVisible) {
  isVisible = isVisible.isVisible;
  const floatingBackgroundColor = isVisible.floatingBackgroundColor;
  const merged = Object.assign(isVisible, Object.create(null));
  let sharedValue;
  let enabled;
  let obj = isVisible(sharedValue[4]);
  let num = 0;
  if (isVisible) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  enabled = enabled.useContext(tmp3(tmp4[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let items = [isVisible, sharedValue];
  const tmp2 = callback2();
  const effect = enabled.useEffect(() => {
    let num = 0;
    if (isVisible) {
      num = 1;
    }
    const result = sharedValue.set(isVisible(sharedValue[7]).withSpring(num, isVisible(sharedValue[8]).SUBTLE_SPRING, "animate-always"));
  }, items);
  const tmp7 = floatingBackgroundColor(sharedValue[6])();
  const fn = function y() {
    let obj = { opacity: null, borderBottomColor: null, borderBottomWidth: 16, transform: null };
    obj[0] = isVisible(sharedValue[4]).interpolate(sharedValue.get(), [0, 1], [0, 1]);
    obj[1] = floatingBackgroundColor;
    const obj2 = isVisible(sharedValue[4]);
    let num = 0;
    const value = sharedValue.get();
    if (enabled) {
      num = 0.999999;
    }
    obj = { translateY: isVisible(sharedValue[4]).interpolate(value, items, [32, 0]) };
    items = [num, 1];
    const items1 = [obj];
    obj[3] = items1;
    return obj;
  };
  obj = { interpolate: tmp3(tmp4[4]).interpolate, sharedValue, floatingBackgroundColor, useReducedMotion: enabled };
  fn.__closure = obj;
  fn.__workletHash = 1679390676673;
  fn.__initData = closure_9;
  const animatedStyle = isVisible(sharedValue[4]).useAnimatedStyle(fn);
  obj = { style: items1, pointerEvents: null, children: null };
  items1 = [animatedStyle, tmp2.floating, { paddingBottom: tmp7.bottom }];
  let str = "none";
  if (isVisible) {
    str = "auto";
  }
  obj[1] = str;
  const obj1 = { colors: null, locations: null, style: null };
  const tmp10 = closure_7;
  const tmp3Result = isVisible(sharedValue[4]);
  const tmp6Result = floatingBackgroundColor(sharedValue[9]);
  const obj6 = floatingBackgroundColor(sharedValue[10])(floatingBackgroundColor);
  const items2 = [floatingBackgroundColor(sharedValue[10])(floatingBackgroundColor).alpha(0).hex(), floatingBackgroundColor];
  obj1[0] = items2;
  obj1[1] = [0, 0.5];
  obj1[2] = absoluteFill.absoluteFill;
  const items3 = [callback(tmp6Result, obj1), ];
  let obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.variant = "primary";
  items3[1] = callback(isVisible(sharedValue[11]).ModalActionButton, obj2);
  obj[2] = items3;
  return tmp10(floatingBackgroundColor(sharedValue[4]).View, obj);
};
export const ModalFloatingActionSpacer = function ModalFloatingActionSpacer() {
  return callback(closure_5, { style: callback2().spacer });
};