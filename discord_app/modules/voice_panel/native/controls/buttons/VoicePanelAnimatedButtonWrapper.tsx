// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import 01652__ from "../../../../../../_runtime/metro/01652__.js";

require = fn;
const MODE_CHANGE_PHYSICS = fn(11419).MODE_CHANGE_PHYSICS;
let jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { pressableWrapper: { justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG } };
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = module_1652.createAnimatedComponent(fn(17).Pressable);
let closure_8 = { code: "(function VoicePanelAnimatedButtonWrapperTsx1(values){let[offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming]=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};})" };
let closure_9 = { code: "(function VoicePanelAnimatedButtonWrapperTsx2(values){let[withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming]=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx");

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
  if (pressed == null) {
    pressed = obj.useSharedValue(false);
  }
  const tmp3 = onPressOut(style[7])();
  closure_4 = tmp3;
  const tmp4 = width();
  jsx = tmp4;
  items = [pressed, tmp3, onPressIn, onPressOut];
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
  obj = onPressIn(style[6]);
  sharedValue = onPressIn(style[6]).useSharedValue(0);
  let items1 = [sharedValue];
  const items2 = [sharedValue];
  const memo1 = pressed.useMemo(() => {
    if (!obj.isAndroid()) {
      items = [closure_8, sharedValue, spring_spring.withSpring, MODE_CHANGE_PHYSICS, timing_timing.withTiming];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      class VoicePanelAnimatedButtonWrapperTsx1 {
        constructor(arg0) {
          result = closure_0.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
          obj = { initialValues: null, animations: null };
          obj1 = { originX: arg0.targetOriginX + closure_0.get(), opacity: 0, transform: null };
          items = [];
          items[0] = { scale: 0.5 };
          obj1.transform = items;
          obj.initialValues = obj1;
          obj5 = { originX: closure_1(arg0.targetOriginX, closure_2), opacity: closure_3(1, { duration: 100 }), transform: null };
          obj6 = { scale: closure_1(1, closure_2) };
          items1 = [];
          items1[0] = obj6;
          obj5.transform = items1;
          obj.animations = obj5;
          return obj;
        }
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11];
      VoicePanelAnimatedButtonWrapperTsx1.__closure = items1;
      VoicePanelAnimatedButtonWrapperTsx1.__workletHash = 6115796697934;
      VoicePanelAnimatedButtonWrapperTsx1.__initData = tmp7;
      return VoicePanelAnimatedButtonWrapperTsx1;
    }
    obj = PlatformUtils;
  }, items1);
  const items3 = [style, tmp4.pressableWrapper, width, height];
  const memo2 = pressed.useMemo(() => {
    if (!obj.isAndroid()) {
      items = [closure_9, spring_spring.withSpring, sharedValue, MODE_CHANGE_PHYSICS, timing_timing.withTiming];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      [tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      class VoicePanelAnimatedButtonWrapperTsx2 {
        constructor(arg0) {
          obj = { initialValues: null, animations: null };
          obj1 = { originX: arg0.currentOriginX, opacity: 1, transform: null };
          items = [];
          items[0] = { scale: 1 };
          obj1.transform = items;
          obj.initialValues = obj1;
          obj5 = { originX: closure_0(arg0.currentOriginX + closure_1.get(), closure_2), opacity: closure_3(0, { duration: 100 }), transform: null };
          obj6 = { scale: closure_0(0.5, closure_2) };
          items1 = [];
          items1[0] = obj6;
          obj5.transform = items1;
          obj.animations = obj5;
          return obj;
        }
      }
      let items1 = [tmp8, tmp9, tmp10, tmp11];
      VoicePanelAnimatedButtonWrapperTsx2.__closure = items1;
      VoicePanelAnimatedButtonWrapperTsx2.__workletHash = 1297258033910;
      VoicePanelAnimatedButtonWrapperTsx2.__initData = tmp7;
      return VoicePanelAnimatedButtonWrapperTsx2;
    }
    obj = PlatformUtils;
  }, items2);
  let obj2 = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
  const memo3 = pressed.useMemo(() => {
    items = [pressableWrapper.pressableWrapper, , ];
    const size = { width, height };
    items[1] = size;
    items[2] = style;
    return items;
  }, items3);
  const merged = Object.assign(memo);
  obj2.accessibilityRole = "button";
  obj2.accessibilityLabel = accessibilityLabel;
  obj2.accessibilityHint = accessibilityHint;
  obj2.style = memo3;
  obj2.children = children;
  return <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} />;
};