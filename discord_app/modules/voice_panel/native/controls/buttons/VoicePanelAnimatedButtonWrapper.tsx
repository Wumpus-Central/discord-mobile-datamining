// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import VoicePanelConstants from "../../../VoicePanelConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault, obj1, obj8, obj9;

let obj2;
const Pressable = react_native.Pressable;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
let jsx = Fragment.jsx;
let obj = { pressableWrapper: obj2 };
obj2 = { justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
const __initData = {
  code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}",
};
let closure_9 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx2(values_0){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values_0.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values_0.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}",
};
let closure_10 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx3(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}",
};
let closure_11 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx4(values_0){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values_0.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values_0.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityHint;
      let accessibilityLabel;
      let children;
      let closure_1;
      let disabled;
      let height;
      let onLongPress;
      let onPress;
      let onPressIn;
      let onPressOut;
      let pressed;
      let props;
      let sharedValue;
      let style;
      let width;
      let obj = pressed(sharedValue[8]);
      const cResult = obj.c(33);
      ({
        props,
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        accessibilityLabel,
        accessibilityHint,
        style,
        children,
        pressed,
        disabled,
      } = arg0);
      let obj2 = pressed(sharedValue[6]);
      if (pressed == null) {
        pressed = obj2.useSharedValue(false);
      }
      const tmp4 = require("useControlsLock")();
      importDefault = tmp4;
      const tmp5 = closure_6();
      if (cResult[0] === tmp4) {
        if (cResult[1] === onPressIn) {
          let tmp6;
          if (cResult[2] === pressed) {
            tmp6 = cResult[3];
          }
          if (cResult[4] === tmp4) {
            if (cResult[5] === onPressOut) {
              let tmp8;
              if (cResult[6] === pressed) {
                tmp8 = cResult[7];
              }
              if (cResult[8] === tmp6) {
                ({ width, height } = props);
                const tmpResult = pressed(sharedValue[6]);
                sharedValue = tmpResult.useSharedValue(0);
                const tmpResult3 = pressed(sharedValue[10]);
                if (!tmpResult3.isAndroid()) {
                  if (cResult[11] !== sharedValue) {
                    class W {
                      constructor(arg0) {
                        result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
                        obj = { initialValues: null, animations: null };
                        obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
                        items = [];
                        items[0] = { scale: 0.5 };
                        obj1.transform = items;
                        obj.initialValues = obj1;
                        obj8 = { originX: null, opacity: null, transform: null };
                        obj4 = closure_0(closure_2[11]);
                        obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
                        obj5 = closure_0(closure_2[12]);
                        obj8.opacity = obj5.withTiming(1, { duration: 100 });
                        obj9 = { scale: null };
                        obj7 = closure_0(closure_2[11]);
                        obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
                        items1 = [];
                        items1[0] = obj9;
                        obj8.transform = items1;
                        obj.animations = obj8;
                        return obj;
                      }
                    }
                    let obj3 = {
                      offsetFromCenter: sharedValue,
                      withSpring: pressed(sharedValue[11]).withSpring,
                      MODE_CHANGE_PHYSICS,
                      withTiming: pressed(sharedValue[12]).withTiming,
                    };
                    W.__closure = obj3;
                    W.__workletHash = 16238937246135;
                    W.__initData = __initData;
                    cResult[11] = sharedValue;
                    cResult[12] = W;
                  } else {
                    class W {
                      constructor(arg0) {
                        result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
                        obj = { initialValues: null, animations: null };
                        obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
                        items = [];
                        items[0] = { scale: 0.5 };
                        obj1.transform = items;
                        obj.initialValues = obj1;
                        obj8 = { originX: null, opacity: null, transform: null };
                        obj4 = closure_0(closure_2[11]);
                        obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
                        obj5 = closure_0(closure_2[12]);
                        obj8.opacity = obj5.withTiming(1, { duration: 100 });
                        obj9 = { scale: null };
                        obj7 = closure_0(closure_2[11]);
                        obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
                        items1 = [];
                        items1[0] = obj9;
                        obj8.transform = items1;
                        obj.animations = obj8;
                        return obj;
                      }
                    }
                  }
                }
                const tmpResult4 = pressed(sharedValue[10]);
                if (!tmpResult4.isAndroid()) {
                  class W {
                    constructor(arg0) {
                      result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
                      obj = { initialValues: null, animations: null };
                      obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
                      items = [];
                      items[0] = { scale: 0.5 };
                      obj1.transform = items;
                      obj.initialValues = obj1;
                      obj8 = { originX: null, opacity: null, transform: null };
                      obj4 = closure_0(closure_2[11]);
                      obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
                      obj5 = closure_0(closure_2[12]);
                      obj8.opacity = obj5.withTiming(1, { duration: 100 });
                      obj9 = { scale: null };
                      obj7 = closure_0(closure_2[11]);
                      obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
                      items1 = [];
                      items1[0] = obj9;
                      obj8.transform = items1;
                      obj.animations = obj8;
                      return obj;
                    }
                  }
                }
                if (cResult[15] === height) {
                  class W {
                    constructor(arg0) {
                      result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
                      obj = { initialValues: null, animations: null };
                      obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
                      items = [];
                      items[0] = { scale: 0.5 };
                      obj1.transform = items;
                      obj.initialValues = obj1;
                      obj8 = { originX: null, opacity: null, transform: null };
                      obj4 = closure_0(closure_2[11]);
                      obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
                      obj5 = closure_0(closure_2[12]);
                      obj8.opacity = obj5.withTiming(1, { duration: 100 });
                      obj9 = { scale: null };
                      obj7 = closure_0(closure_2[11]);
                      obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
                      items1 = [];
                      items1[0] = obj9;
                      obj8.transform = items1;
                      obj.animations = obj8;
                      return obj;
                    }
                  }
                  if (cResult[18] === style) {
                    class W {
                      constructor(arg0) {
                        result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
                        obj = { initialValues: null, animations: null };
                        obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
                        items = [];
                        items[0] = { scale: 0.5 };
                        obj1.transform = items;
                        obj.initialValues = obj1;
                        obj8 = { originX: null, opacity: null, transform: null };
                        obj4 = closure_0(closure_2[11]);
                        obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
                        obj5 = closure_0(closure_2[12]);
                        obj8.opacity = obj5.withTiming(1, { duration: 100 });
                        obj9 = { scale: null };
                        obj7 = closure_0(closure_2[11]);
                        obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
                        items1 = [];
                        items1[0] = obj9;
                        obj8.transform = items1;
                        obj.animations = obj8;
                        return obj;
                      }
                    }
                  }
                  let items = [tmp5.pressableWrapper, tmp18, style];
                  cResult[18] = style;
                  cResult[19] = tmp5.pressableWrapper;
                  cResult[20] = tmp18;
                  cResult[21] = items;
                }
                size = { width, height };
                cResult[15] = height;
                cResult[16] = width;
                cResult[17] = size;
              }
              let obj4 = { onPressIn: tmp6, onPressOut: tmp8 };
              cResult[8] = tmp6;
              cResult[9] = tmp8;
              cResult[10] = obj4;
            }
          }
          if (onPressOut == null) {
            class W {
              constructor(arg0) {
                result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
                obj = { initialValues: null, animations: null };
                obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
                items = [];
                items[0] = { scale: 0.5 };
                obj1.transform = items;
                obj.initialValues = obj1;
                obj8 = { originX: null, opacity: null, transform: null };
                obj4 = closure_0(closure_2[11]);
                obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
                obj5 = closure_0(closure_2[12]);
                obj8.opacity = obj5.withTiming(1, { duration: 100 });
                obj9 = { scale: null };
                obj7 = closure_0(closure_2[11]);
                obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
                items1 = [];
                items1[0] = obj9;
                obj8.transform = items1;
                obj.animations = obj8;
                return obj;
              }
            }
          }
          cResult[4] = tmp4;
          cResult[5] = onPressOut;
          cResult[6] = pressed;
          cResult[7] = onPressOut;
          tmp8 = onPressOut;
        }
      }
      if (onPressIn == null) {
        class W {
          constructor(arg0) {
            result = closure_2.set(arg0.windowWidth / 2 - arg0.targetGlobalOriginX - arg0.targetWidth / 2);
            obj = { initialValues: null, animations: null };
            obj1 = { originX: arg0.targetOriginX + closure_2.get(), opacity: 0, transform: null };
            items = [];
            items[0] = { scale: 0.5 };
            obj1.transform = items;
            obj.initialValues = obj1;
            obj8 = { originX: null, opacity: null, transform: null };
            obj4 = closure_0(closure_2[11]);
            obj8.originX = obj4.withSpring(arg0.targetOriginX, MODE_CHANGE_PHYSICS);
            obj5 = closure_0(closure_2[12]);
            obj8.opacity = obj5.withTiming(1, { duration: 100 });
            obj9 = { scale: null };
            obj7 = closure_0(closure_2[11]);
            obj9.scale = obj7.withSpring(1, MODE_CHANGE_PHYSICS);
            items1 = [];
            items1[0] = obj9;
            obj8.transform = items1;
            obj.animations = obj8;
            return obj;
          }
        }
      }
      cResult[0] = tmp4;
      cResult[1] = onPressIn;
      cResult[2] = pressed;
      cResult[3] = onPressIn;
      tmp6 = onPressIn;
    }
  : (onPressOut) => {
      let accessibilityHint;
      let accessibilityLabel;
      let children;
      let disabled;
      let onLongPress;
      let onPress;
      let onPressIn;
      let pressableWrapper;
      let props;
      ({ props, onPressIn } = onPressOut);
      onPressOut = onPressOut.onPressOut;
      const style = onPressOut.style;
      let pressed;
      let closure_4;
      jsx = undefined;
      let width;
      let height;
      let sharedValue;
      ({ onPress, onLongPress, accessibilityLabel, accessibilityHint, children, disabled } = onPressOut);
      let obj = onPressIn(style[6]);
      const tmp = onPressIn;
      if (pressed == null) {
        pressed = obj.useSharedValue(false);
      }
      const tmp3 = onPressOut(style[9])();
      closure_4 = tmp3;
      const tmp4 = width();
      jsx = tmp4;
      let items = [pressed, tmp3, onPressIn, onPressOut];
      const memo = pressed.useMemo(() => {
        let fn2;
        let fn = onPressIn;
        if (onPressIn == null) {
          fn = () => {
            closure_1_4.lock();
            const result = pressed.set(true);
          };
        }
        const obj = { onPressIn: fn, onPressOut: fn2 };
        fn2 = onPressOut;
        if (onPressOut == null) {
          fn2 = () => {
            closure_1_4.unlock();
            const result = pressed.set(false);
          };
        }
        return obj;
      }, items);
      width = props.width;
      height = props.height;
      const tmpResult = tmp(style[6]);
      sharedValue = tmpResult.useSharedValue(0);
      let items1 = [sharedValue];
      const items2 = [sharedValue];
      const memo1 = pressed.useMemo(() => {
        let obj = PlatformUtils;
        if (!obj.isAndroid()) {
          const fn = function t(windowWidth) {
            let items;
            let items1;
            let obj2;
            let obj3;
            let obj4;
            let obj5;
            let obj7;
            const result = sharedValue.set(
              windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2,
            );
            const obj = { initialValues: obj2, animations: obj3 };
            obj2 = { originX: windowWidth.targetOriginX + sharedValue.get(), opacity: 0, transform: items };
            items = [{ scale: 0.5 }];
            obj3 = {
              originX: obj4.withSpring(windowWidth.targetOriginX, closure_4),
              opacity: obj5.withTiming(1, { duration: 100 }),
              transform: items1,
            };
            obj4 = onPressIn(style[11]);
            obj5 = onPressIn(style[12]);
            const obj6 = { scale: obj7.withSpring(1, closure_4) };
            items1 = [obj6];
            obj7 = onPressIn(style[11]);
            return obj;
          };
          let obj2 = {
            offsetFromCenter: sharedValue,
            withSpring: spring.withSpring,
            MODE_CHANGE_PHYSICS,
            withTiming: timing.withTiming,
          };
          fn.__closure = obj2;
          fn.__workletHash = 6215568626677;
          fn.__initData = __initData;
          return fn;
        }
      }, items1);
      const items3 = [style, tmp4.pressableWrapper, width, height];
      const memo2 = pressed.useMemo(() => {
        let obj = PlatformUtils;
        if (!obj.isAndroid()) {
          const fn = function t(currentOriginX) {
            let items;
            let items1;
            let obj2;
            let obj3;
            let obj4;
            let obj5;
            let obj7;
            const obj = { initialValues: obj2, animations: obj3 };
            obj2 = { originX: currentOriginX.currentOriginX, opacity: 1, transform: items };
            items = [{ scale: 1 }];
            obj3 = {
              originX: obj4.withSpring(currentOriginX.currentOriginX + sharedValue.get(), closure_4),
              opacity: obj5.withTiming(0, { duration: 100 }),
              transform: items1,
            };
            obj4 = onPressIn(style[11]);
            obj5 = onPressIn(style[12]);
            const obj6 = { scale: obj7.withSpring(0.5, closure_4) };
            items1 = [obj6];
            obj7 = onPressIn(style[11]);
            return obj;
          };
          let obj2 = {
            withSpring: spring.withSpring,
            offsetFromCenter: sharedValue,
            MODE_CHANGE_PHYSICS,
            withTiming: timing.withTiming,
          };
          fn.__closure = obj2;
          fn.__workletHash = 7809254653734;
          fn.__initData = __initData2;
          return fn;
        }
      }, items2);
      const memo3 = pressed.useMemo(() => {
        const items = [pressableWrapper.pressableWrapper, ,];
        size = { width, height };
        items[1] = size;
        items[2] = style;
        return items;
      }, items3);
      const merged = Object.assign(memo);
      return (
        <height
          entering={memo1}
          exiting={memo2}
          onPress={onPress}
          onLongPress={onLongPress}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          style={memo3}
        >
          {children}
        </height>
      );
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx",
);

export default tmp2;
