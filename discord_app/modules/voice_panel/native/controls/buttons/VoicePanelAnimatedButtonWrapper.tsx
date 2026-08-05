// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
import noop from "noop";
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4116";

const require = arg1;
createCacheKey = { pressableWrapper: null };
createCacheKey = { justifyContent: "center", alignItems: "center", borderRadius: require("Themes").modules.button.BORDER_RADIUS_LG };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_7 = require("module_4116").createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_8 = { code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}" };
let closure_9 = { code: "function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}" };
let result = require("VoicePanelModes").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx");

export default function AnimatedButtonWrapper(onPressOut) {
  let accessibilityLabel;
  let children;
  let disabled;
  let onLongPress;
  let onPress;
  let onPressIn;
  let props;
  ({ props, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  const style = onPressOut.style;
  let pressed = onPressOut.pressed;
  pressed = undefined;
  let c4;
  let jsx;
  let width;
  let height;
  let sharedValue;
  ({ onPress, onLongPress, accessibilityLabel, children, disabled } = onPressOut);
  let obj = onPressIn(style[6]);
  if (pressed == null) {
    pressed = obj.useSharedValue(false);
  }
  const tmp3 = onPressOut(style[7])();
  c4 = tmp3;
  const tmp4 = width();
  jsx = tmp4;
  let items = [pressed, tmp3, onPressIn, onPressOut];
  const memo = pressed.useMemo(() => {
    let fn = onPressIn;
    if (onPressIn == null) {
      fn = () => {
        closure_4.lock();
        const result = store.set(true);
      };
    }
    const obj = { onPressIn: fn, onPressOut: null };
    let fn2 = onPressOut;
    if (onPressOut == null) {
      fn2 = () => {
        closure_4.unlock();
        const result = store.set(false);
      };
    }
    obj[1] = fn2;
    return obj;
  }, items);
  width = props.width;
  height = props.height;
  sharedValue = onPressIn(style[6]).useSharedValue(0);
  let items1 = [sharedValue];
  const items2 = [sharedValue];
  const memo1 = pressed.useMemo(() => {
    let obj = onPressIn(style[8]);
    if (!obj.isAndroid()) {
      const fn = function t(windowWidth) {
        const result = store.set(windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2);
        let obj = { initialValues: null, animations: null };
        obj = { originX: windowWidth.targetOriginX + store.get(), opacity: 0, transform: items };
        items = [{ scale: 0.5 }];
        obj[0] = obj;
        obj = { originX: null, opacity: null, transform: null };
        obj[0] = outer1_0(outer1_2[9]).withSpring(windowWidth.targetOriginX, outer1_4);
        const obj4 = outer1_0(outer1_2[9]);
        obj[1] = outer1_0(outer1_2[10]).withTiming(1, { duration: 100 });
        const obj1 = { scale: null };
        const obj5 = outer1_0(outer1_2[10]);
        obj1[0] = outer1_0(outer1_2[9]).withSpring(1, outer1_4);
        const items1 = [obj1];
        obj[2] = items1;
        obj[1] = obj;
        return obj;
      };
      obj = { offsetFromCenter: null, withSpring: null, MODE_CHANGE_PHYSICS: null, withTiming: null };
      obj[0] = sharedValue;
      obj[1] = tmp(tmp2[9]).withSpring;
      obj[2] = c4;
      obj[3] = tmp(tmp2[10]).withTiming;
      fn.__closure = obj;
      fn.__workletHash = 16238937246135;
      fn.__initData = sharedValue;
      return fn;
    }
  }, items1);
  const items3 = [style, tmp4.pressableWrapper, width, height];
  const memo2 = pressed.useMemo(() => {
    let obj = onPressIn(style[8]);
    if (!obj.isAndroid()) {
      const fn = function t(currentOriginX) {
        obj = { initialValues: obj, animations: null };
        obj = { originX: currentOriginX.currentOriginX, opacity: 1, transform: items };
        items = [{ scale: 1 }];
        obj = { originX: null, opacity: null, transform: null };
        obj[0] = outer1_0(outer1_2[9]).withSpring(currentOriginX.currentOriginX + closure_8.get(), outer1_4);
        const obj4 = outer1_0(outer1_2[9]);
        obj[1] = outer1_0(outer1_2[10]).withTiming(0, { duration: 100 });
        const obj1 = { scale: null };
        const obj5 = outer1_0(outer1_2[10]);
        obj1[0] = outer1_0(outer1_2[9]).withSpring(0.5, outer1_4);
        const items1 = [obj1];
        obj[2] = items1;
        obj[1] = obj;
        return obj;
      };
      obj = { withSpring: null, offsetFromCenter: null, MODE_CHANGE_PHYSICS: null, withTiming: null };
      obj[0] = tmp(tmp2[9]).withSpring;
      obj[1] = sharedValue;
      obj[2] = c4;
      obj[3] = tmp(tmp2[10]).withTiming;
      fn.__closure = obj;
      fn.__workletHash = 17504057367727;
      fn.__initData = outer1_9;
      return fn;
    }
  }, items2);
  obj = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
  const memo3 = pressed.useMemo(() => {
    const items = [_undefined.pressableWrapper, { width, height }, style];
    return items;
  }, items3);
  const merged = Object.assign(memo);
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = accessibilityLabel;
  obj.style = memo3;
  obj.children = children;
  return <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} />;
};