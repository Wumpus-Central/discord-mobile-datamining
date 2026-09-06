// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

require = fn;
const MODE_CHANGE_PHYSICS = fn(12273).MODE_CHANGE_PHYSICS;
let jsx = fn(21).jsx;
fn(4560);
let createStyles = { pressableWrapper: null };
createStyles = {
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG,
};
createStyles.pressableWrapper = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
let closure_8 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}",
};
let closure_9 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}",
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx",
);

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
  ({ onPress, onLongPress, accessibilityLabel, accessibilityHint, children, disabled } = onPressOut);
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
        closure_1_4.lock();
        const result = pressed.set(true);
      };
    }
    const obj = { onPressIn: fn, onPressOut: null };
    let fn2 = onPressOut;
    if (onPressOut == null) {
      fn2 = () => {
        closure_1_4.unlock();
        const result = pressed.set(false);
      };
    }
    obj.onPressOut = fn2;
    return obj;
  }, items);
  width = props.width;
  height = props.height;
  sharedValue = onPressIn(style[6]).useSharedValue(0);
  let items1 = [sharedValue];
  const items2 = [sharedValue];
  const memo1 = pressed.useMemo(() => {
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const fn = function t(windowWidth) {
        const result = __initData.set(
          windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2,
        );
        let obj = { initialValues: null, animations: null };
        obj = { originX: windowWidth.targetOriginX + __initData.get(), opacity: 0, transform: null };
        const items = [{ scale: 0.5 }];
        obj.transform = items;
        obj.initialValues = obj;
        obj = {
          originX: onPressIn(style[9]).withSpring(windowWidth.targetOriginX, closure_4),
          opacity: null,
          transform: null,
        };
        const obj4 = onPressIn(style[9]);
        obj.opacity = onPressIn(style[10]).withTiming(1, { duration: 100 });
        const obj1 = { scale: null };
        const obj5 = onPressIn(style[10]);
        obj1.scale = onPressIn(style[9]).withSpring(1, closure_4);
        const items1 = [obj1];
        obj.transform = items1;
        obj.animations = obj;
        return obj;
      };
      obj = {
        offsetFromCenter: sharedValue,
        withSpring: tmp(4974).withSpring,
        MODE_CHANGE_PHYSICS,
        withTiming: tmp(4561).withTiming,
      };
      fn.__closure = obj;
      fn.__workletHash = 16238937246135;
      fn.__initData = __initData;
      return fn;
    }
  }, items1);
  const items3 = [style, tmp4.pressableWrapper, width, height];
  const memo2 = pressed.useMemo(() => {
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const fn = function t(currentOriginX) {
        let obj = { initialValues: null, animations: null };
        obj = { originX: currentOriginX.currentOriginX, opacity: 1, transform: null };
        const items = [{ scale: 1 }];
        obj.transform = items;
        obj.initialValues = obj;
        obj = {
          originX: onPressIn(style[9]).withSpring(currentOriginX.currentOriginX + __initData.get(), closure_4),
          opacity: null,
          transform: null,
        };
        const obj4 = onPressIn(style[9]);
        obj.opacity = onPressIn(style[10]).withTiming(0, { duration: 100 });
        const obj1 = { scale: null };
        const obj5 = onPressIn(style[10]);
        obj1.scale = onPressIn(style[9]).withSpring(0.5, closure_4);
        const items1 = [obj1];
        obj.transform = items1;
        obj.animations = obj;
        return obj;
      };
      obj = {
        withSpring: tmp(4974).withSpring,
        offsetFromCenter: sharedValue,
        MODE_CHANGE_PHYSICS,
        withTiming: tmp(4561).withTiming,
      };
      fn.__closure = obj;
      fn.__workletHash = 17504057367727;
      fn.__initData = __initData2;
      return fn;
    }
  }, items2);
  obj = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
  const memo3 = pressed.useMemo(() => {
    const items = [pressableWrapper.pressableWrapper, ,];
    const size = { width, height };
    items[1] = size;
    items[2] = style;
    return items;
  }, items3);
  const merged = Object.assign(memo);
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  obj.style = memo3;
  obj.children = children;
  return <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} />;
}
