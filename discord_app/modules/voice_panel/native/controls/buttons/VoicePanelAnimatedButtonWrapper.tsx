// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { MODE_CHANGE_PHYSICS } from "../../../VoicePanelConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../../../reanimated/ReanimatedRexport.tsx";

const require = fn;
const createCacheKey = { justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.modules.button.BORDER_RADIUS_LG };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let closure_7 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_8 = { code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}" };
let closure_9 = { code: "function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}" };
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx");

export default function AnimatedButtonWrapper(onPressOut) {
  ({ props, onPressIn } = onPressOut);
  onPressOut = onPressOut.onPressOut;
  const style = onPressOut.style;
  let pressed;
  closure_4 = undefined;
  jsx = undefined;
  let width;
  let height;
  let sharedValue;
  ({ onPress, onLongPress, accessibilityLabel, children, disabled } = onPressOut);
  let obj = onPressIn(style[6]);
  if (pressed == null) {
    pressed = obj.useSharedValue(false);
  }
  const tmp3 = onPressOut(style[7])();
  closure_4 = tmp3;
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
        let obj = { originX: windowWidth.targetOriginX + store.get(), opacity: 0, transform: items };
        items = [{ scale: 0.5 }];
        obj[0] = obj;
        obj = { originX: onPressIn(style[9]).withSpring(windowWidth.targetOriginX, closure_1_4), opacity: null, transform: null };
        const obj4 = onPressIn(style[9]);
        obj[1] = onPressIn(style[10]).withTiming(1, { duration: 100 });
        obj1 = { scale: null };
        const obj5 = onPressIn(style[10]);
        obj1[0] = onPressIn(style[9]).withSpring(1, closure_1_4);
        const items1 = [obj1];
        obj[2] = items1;
        obj[1] = obj;
        return obj;
      };
      obj = { offsetFromCenter: null, withSpring: null, MODE_CHANGE_PHYSICS: null, withTiming: null };
      obj[0] = sharedValue;
      obj[1] = onPressIn(style[9]).withSpring;
      obj[2] = closure_4;
      obj[3] = onPressIn(style[10]).withTiming;
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
        const items = [{ scale: 1 }];
        const obj = { originX: onPressIn(style[9]).withSpring(currentOriginX.currentOriginX + closure_8.get(), closure_1_4), opacity: null, transform: null };
        const obj4 = onPressIn(style[9]);
        obj[1] = onPressIn(style[10]).withTiming(0, { duration: 100 });
        obj1 = { scale: null };
        const obj5 = onPressIn(style[10]);
        obj1[0] = onPressIn(style[9]).withSpring(0.5, closure_1_4);
        const items1 = [obj1];
        obj[2] = items1;
        obj[1] = obj;
        return obj;
      };
      obj = { withSpring: null, offsetFromCenter: null, MODE_CHANGE_PHYSICS: null, withTiming: null };
      obj[0] = onPressIn(style[9]).withSpring;
      obj[1] = sharedValue;
      obj[2] = closure_4;
      obj[3] = onPressIn(style[10]).withTiming;
      fn.__closure = obj;
      fn.__workletHash = 17504057367727;
      fn.__initData = closure_1_9;
      return fn;
    }
  }, items2);
  obj = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
  const memo3 = pressed.useMemo(() => {
    const items = [pressableWrapper.pressableWrapper, { width, height }, style];
    return items;
  }, items3);
  const merged = Object.assign(memo);
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = accessibilityLabel;
  obj.style = memo3;
  obj.children = children;
  return <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} />;
};