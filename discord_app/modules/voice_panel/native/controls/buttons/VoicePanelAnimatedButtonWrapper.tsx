// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

const require = globalThis.__r;

require = fn;
const MODE_CHANGE_PHYSICS = fn(11989).MODE_CHANGE_PHYSICS;
let jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = {
  pressableWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG,
  },
};
let closure_6 = createStyles.createStyles(obj2);
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const __initData = {
  code: "function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}",
};
const __initData2 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx2(values_0){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values_0.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values_0.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}",
};
let closure_10 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx3(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}",
};
let closure_11 = {
  code: "function VoicePanelAnimatedButtonWrapperTsx4(values_0){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values_0.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values_0.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.modules.button.BORDER_RADIUS_LG,
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AnimatedButtonWrapper(arg0) {
      let withTiming = sharedValue;
      const cResult = pressed(sharedValue[8]).c(33);
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
      let obj = pressed(sharedValue[8]);
      if (pressed == null) {
        pressed = obj2.useSharedValue(false);
      }
      const tmp3 = require("useControlsLock")();
      importDefault = tmp3;
      const tmp4 = closure_6();
      if (cResult[0] === tmp3) {
        if (cResult[1] === onPressIn) {
          if (cResult[2] === pressed) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === tmp3) {
            if (cResult[5] === onPressOut) {
              if (cResult[6] === pressed) {
                let tmp7 = cResult[7];
              }
              if (cResult[8] === tmp5) {
                if (cResult[9] === tmp7) {
                  let tmp9 = cResult[10];
                }
                ({ width, height } = props);
                sharedValue = tmp(withTiming[6]).useSharedValue(0);
                const tmpResult = tmp(withTiming[6]);
                if (tmpResult3.isAndroid()) {
                  if (tmpResult4.isAndroid()) {
                    if (cResult[15] === height) {
                      if (cResult[16] === width) {
                        let tmp19 = cResult[17];
                      }
                      if (cResult[18] === style) {
                        if (cResult[19] === tmp4.pressableWrapper) {
                          if (cResult[20] === tmp19) {
                            let tmp20 = cResult[21];
                          }
                          if (cResult[22] === accessibilityHint) {
                            if (cResult[23] === accessibilityLabel) {
                              if (cResult[24] === children) {
                                if (cResult[25] === disabled) {
                                  if (cResult[26] === undefined) {
                                    if (cResult[27] === undefined) {
                                      if (cResult[28] === tmp20) {
                                        if (cResult[29] === onLongPress) {
                                          if (cResult[30] === onPress) {
                                            if (cResult[31] === tmp9) {
                                              let tmp21 = cResult[32];
                                            }
                                            return tmp21;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          let obj3 = { entering: undefined, exiting: undefined, onPress, onLongPress, disabled };
                          const merged = Object.assign(tmp9);
                          obj3.accessibilityRole = "button";
                          obj3.accessibilityLabel = accessibilityLabel;
                          obj3.accessibilityHint = accessibilityHint;
                          obj3.style = tmp20;
                          obj3.children = children;
                          const tmp27 = (
                            <closure_7
                              entering={undefined}
                              exiting={undefined}
                              onPress={onPress}
                              onLongPress={onLongPress}
                              disabled={disabled}
                            />
                          );
                          cResult[22] = accessibilityHint;
                          cResult[23] = accessibilityLabel;
                          cResult[24] = children;
                          cResult[25] = disabled;
                          cResult[26] = undefined;
                          cResult[27] = undefined;
                          cResult[28] = tmp20;
                          cResult[29] = onLongPress;
                          cResult[30] = onPress;
                          cResult[31] = tmp9;
                          cResult[32] = tmp27;
                          tmp21 = tmp27;
                        }
                      }
                      let items = [tmp4.pressableWrapper, tmp19, style];
                      cResult[18] = style;
                      cResult[19] = tmp4.pressableWrapper;
                      cResult[20] = tmp19;
                      cResult[21] = items;
                      tmp20 = items;
                    }
                    const size = { width, height };
                    cResult[15] = height;
                    cResult[16] = width;
                    cResult[17] = size;
                    tmp19 = size;
                  } else if (cResult[13] !== sharedValue) {
                    const fn = function k(currentOriginX) {
                      const obj = { initialValues: null, animations: null };
                      const obj2 = { originX: currentOriginX.currentOriginX, opacity: 1, transform: null };
                      const items = [{ scale: 1 }];
                      obj2.transform = items;
                      obj.initialValues = obj2;
                      const obj3 = {
                        originX: spring.withSpring(
                          currentOriginX.currentOriginX + sharedValue.get(),
                          MODE_CHANGE_PHYSICS,
                        ),
                        opacity: null,
                        transform: null,
                      };
                      obj3.opacity = timing.withTiming(0, { duration: 100 });
                      const obj6 = { scale: null };
                      obj6.scale = spring.withSpring(0.5, MODE_CHANGE_PHYSICS);
                      const items1 = [obj6];
                      obj3.transform = items1;
                      obj.animations = obj3;
                      return obj;
                    };
                    let obj4 = {
                      withSpring: tmp(withTiming[11]).withSpring,
                      offsetFromCenter: sharedValue,
                      MODE_CHANGE_PHYSICS,
                      withTiming: null,
                    };
                    withTiming = tmp(withTiming[12]).withTiming;
                    obj4.withTiming = withTiming;
                    fn.__closure = obj4;
                    fn.__workletHash = 2342569719520;
                    fn.__initData = __initData2;
                    cResult[13] = sharedValue;
                    cResult[14] = fn;
                  }
                  tmpResult4 = tmp(withTiming[10]);
                } else if (cResult[11] !== sharedValue) {
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
                  let obj5 = {
                    offsetFromCenter: sharedValue,
                    withSpring: tmp(withTiming[11]).withSpring,
                    MODE_CHANGE_PHYSICS,
                    withTiming: tmp(withTiming[12]).withTiming,
                  };
                  W.__closure = obj5;
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
                tmpResult3 = tmp(withTiming[10]);
              }
              let obj6 = { onPressIn: tmp5, onPressOut: tmp7 };
              cResult[8] = tmp5;
              cResult[9] = tmp7;
              cResult[10] = obj6;
              tmp9 = obj6;
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
          cResult[4] = tmp3;
          cResult[5] = onPressOut;
          cResult[6] = pressed;
          cResult[7] = onPressOut;
          tmp7 = onPressOut;
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
      cResult[0] = tmp3;
      cResult[1] = onPressIn;
      cResult[2] = pressed;
      cResult[3] = onPressIn;
      tmp5 = onPressIn;
      obj2 = pressed(sharedValue[6]);
    }
  : function AnimatedButtonWrapper(onPressOut) {
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
      const tmp3 = onPressOut(style[9])();
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
      obj = onPressIn(style[6]);
      sharedValue = onPressIn(style[6]).useSharedValue(0);
      let items1 = [sharedValue];
      const items2 = [sharedValue];
      const memo1 = pressed.useMemo(() => {
        if (!obj.isAndroid()) {
          const fn = function t(windowWidth) {
            const result = sharedValue.set(
              windowWidth.windowWidth / 2 - windowWidth.targetGlobalOriginX - windowWidth.targetWidth / 2,
            );
            const obj = { initialValues: null, animations: null };
            const obj2 = { originX: windowWidth.targetOriginX + sharedValue.get(), opacity: 0, transform: null };
            const items = [{ scale: 0.5 }];
            obj2.transform = items;
            obj.initialValues = obj2;
            const obj3 = {
              originX: onPressIn(style[11]).withSpring(windowWidth.targetOriginX, closure_4),
              opacity: null,
              transform: null,
            };
            const obj4 = onPressIn(style[11]);
            obj3.opacity = onPressIn(style[12]).withTiming(1, { duration: 100 });
            const obj6 = { scale: null };
            const obj5 = onPressIn(style[12]);
            obj6.scale = onPressIn(style[11]).withSpring(1, closure_4);
            const items1 = [obj6];
            obj3.transform = items1;
            obj.animations = obj3;
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
        obj = PlatformUtils;
      }, items1);
      const items3 = [style, tmp4.pressableWrapper, width, height];
      const memo2 = pressed.useMemo(() => {
        if (!obj.isAndroid()) {
          const fn = function t(currentOriginX) {
            const obj = { initialValues: null, animations: null };
            const obj2 = { originX: currentOriginX.currentOriginX, opacity: 1, transform: null };
            const items = [{ scale: 1 }];
            obj2.transform = items;
            obj.initialValues = obj2;
            const obj3 = {
              originX: onPressIn(style[11]).withSpring(currentOriginX.currentOriginX + sharedValue.get(), closure_4),
              opacity: null,
              transform: null,
            };
            const obj4 = onPressIn(style[11]);
            obj3.opacity = onPressIn(style[12]).withTiming(0, { duration: 100 });
            const obj6 = { scale: null };
            const obj5 = onPressIn(style[12]);
            obj6.scale = onPressIn(style[11]).withSpring(0.5, closure_4);
            const items1 = [obj6];
            obj3.transform = items1;
            obj.animations = obj3;
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
        obj = PlatformUtils;
      }, items2);
      let obj2 = { entering: memo1, exiting: memo2, onPress, onLongPress, disabled };
      const memo3 = pressed.useMemo(() => {
        const items = [pressableWrapper.pressableWrapper, ,];
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
      return (
        <height entering={memo1} exiting={memo2} onPress={onPress} onLongPress={onLongPress} disabled={disabled} />
      );
    };
