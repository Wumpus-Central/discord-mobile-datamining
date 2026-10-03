// discord_app/design/components/Tooltip/native/Tooltip.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
const createStyles = fn(4890);
let obj2 = {
  container: { position: "absolute", alignItems: "center" },
  textContainer: {
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.sm,
    maxWidth: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  },
  text: { textAlign: "center" },
  arrow: null,
  bottomArrow: null,
  topArrow: null,
};
let size = {
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderTopColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj2.arrow = size;
obj2.bottomArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 };
obj2.topArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 };
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: 'function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: 'function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,"animate-always"),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData3 = {
  code: "function TooltipNativeTsx3(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}",
};
const __initData4 = {
  code: "function TooltipNativeTsx4(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  maxWidth: 150,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
size = fn(2);
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = sharedValue(token1[7]).c(43);
      ({ targetMeasurements, surfaceMeasurements, label, position, onPress } = arg0);
      closure_9();
      let obj = sharedValue(token1[7]);
      sharedValue = sharedValue(token1[8]).useSharedValue(0);
      let obj2 = sharedValue(token1[8]);
      token = sharedValue(token1[9]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
      let obj3 = sharedValue(token1[9]);
      const tmp6 = token;
      token1 = sharedValue(token1[9]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
      if (cResult[0] !== sharedValue) {
        const fn = function _() {
          const result = sharedValue.set(1);
        };
        cResult[0] = sharedValue;
        cResult[1] = fn;
      }
      if (cResult[2] !== sharedValue) {
        class T {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
        cResult[2] = sharedValue;
        cResult[3] = T;
      } else {
        class T {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
      }
      let obj4 = sharedValue(token1[9]);
      [tmp12, _slicedToArray] = noop.useState(null);
      const tmp11 = _slicedToArray(noop.useState(null), 2);
      ({ adjustmentX, tooltipX, tooltipY } = tmp6(token1[10])(
        tmp12,
        surfaceMeasurements,
        targetMeasurements,
        position,
        4,
      ));
      const tmp13 = tmp6(token1[10])(tmp12, surfaceMeasurements, targetMeasurements, position, 4);
      const fn2 = function x() {
        const obj = { backgroundColor: null };
        const obj2 = spring;
        const items = [token, token1];
        obj.backgroundColor = obj2.withSpring(
          ReanimatedRexport.interpolateColor(sharedValue.get(), [0, 1], items),
          closure_8,
          "animate-always",
        );
        return obj;
      };
      const tmpResult = sharedValue(token1[8]);
      fn2.__closure = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
      fn2.__workletHash = 15323606626185;
      fn2.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      const obj5 = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
      class I {
        constructor() {
          obj = { borderTopColor: null, borderBottomColor: null };
          obj2 = closure_0(closure_2[11]);
          obj3 = closure_0(closure_2[8]);
          items = [,];
          items[0] = closure_1;
          items[1] = closure_2;
          obj.borderTopColor = obj2.withSpring(
            obj3.interpolateColor(closure_0.get(), [0, 1], items),
            closure_8,
            "animate-always",
          );
          obj4 = closure_0(closure_2[11]);
          obj5 = closure_0(closure_2[8]);
          items1 = [,];
          items1[0] = closure_1;
          items1[1] = closure_2;
          obj.borderBottomColor = obj4.withSpring(
            obj5.interpolateColor(closure_0.get(), [0, 1], items1),
            closure_8,
            "animate-always",
          );
          return obj;
        }
      }
      const tmpResult2 = sharedValue(token1[8]);
      I.__closure = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
      I.__workletHash = 6345133227978;
      I.__initData = __initData2;
      const animatedStyle1 = tmpResult2.useAnimatedStyle(I);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
        cResult[4] = tmp17;
      } else {
        class T {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
      }
      if (null != tmp12) {
        class T {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
      }
      if (cResult[5] === 0) {
        class T {
          constructor() {
            result = closure_0.set(0);
            return;
          }
        }
      }
      const rect = { opacity: num4, top: tooltipY, left: tooltipX };
      cResult[5] = 0;
      cResult[6] = tooltipX;
      cResult[7] = tooltipY;
      cResult[8] = rect;
      const obj6 = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
    }
  : (targetMeasurements) => {
      ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
      let sharedValue;
      let token;
      let token1;
      _slicedToArray = undefined;
      const tmp = closure_9();
      let num = 0;
      sharedValue = sharedValue(token1[8]).useSharedValue(0);
      let obj = sharedValue(token1[8]);
      const tmp2 = sharedValue;
      token = sharedValue(token1[9]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
      let obj2 = sharedValue(token1[9]);
      token1 = sharedValue(token1[9]).useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
      let items = [sharedValue];
      let items1 = [sharedValue];
      const callback = noop.useCallback(() => {
        const result = sharedValue.set(1);
      }, items);
      const callback1 = noop.useCallback(() => {
        const result = sharedValue.set(0);
      }, items1);
      let obj3 = sharedValue(token1[9]);
      [tmp11, c3] = noop.useState(null);
      const tmp10 = _slicedToArray(noop.useState(null), 2);
      ({ adjustmentX, tooltipX, tooltipY } = token(token1[10])(
        tmp11,
        surfaceMeasurements,
        targetMeasurements.targetMeasurements,
        position,
        4,
      ));
      const tmp12 = token(token1[10])(tmp11, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4);
      class P {
        constructor() {
          obj = { backgroundColor: null };
          obj2 = closure_0(closure_2[11]);
          obj3 = closure_0(closure_2[8]);
          items = [,];
          items[0] = closure_1;
          items[1] = closure_2;
          obj.backgroundColor = obj2.withSpring(
            obj3.interpolateColor(closure_0.get(), [0, 1], items),
            closure_8,
            "animate-always",
          );
          return obj;
        }
      }
      let obj4 = sharedValue(token1[8]);
      P.__closure = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
      P.__workletHash = 17276673117291;
      P.__initData = __initData3;
      const animatedStyle = obj4.useAnimatedStyle(P);
      const obj5 = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
      class R {
        constructor() {
          obj = { borderTopColor: null, borderBottomColor: null };
          obj2 = closure_0(closure_2[11]);
          obj3 = closure_0(closure_2[8]);
          items = [,];
          items[0] = closure_1;
          items[1] = closure_2;
          obj.borderTopColor = obj2.withSpring(
            obj3.interpolateColor(closure_0.get(), [0, 1], items),
            closure_8,
            "animate-always",
          );
          obj4 = closure_0(closure_2[11]);
          obj5 = closure_0(closure_2[8]);
          items1 = [,];
          items1[0] = closure_1;
          items1[1] = closure_2;
          obj.borderBottomColor = obj4.withSpring(
            obj5.interpolateColor(closure_0.get(), [0, 1], items1),
            closure_8,
            "animate-always",
          );
          return obj;
        }
      }
      const obj6 = sharedValue(token1[8]);
      R.__closure = {
        withSpring: sharedValue(token1[11]).withSpring,
        interpolateColor: sharedValue(token1[8]).interpolateColor,
        pressed: sharedValue,
        backgroundColor: token,
        backgroundColorPressed: token1,
        ON_PRESS_SPRING,
      };
      R.__workletHash = 5305172198540;
      R.__initData = __initData4;
      const animatedStyle1 = obj6.useAnimatedStyle(R);
      const obj8 = {
        disabled: null == onPress,
        onPress,
        onLayout(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
          _undefined(size);
        },
        onPressIn: callback,
        onPressOut: callback1,
        accessibilityLabel: label,
        accessibilityRole: "button",
        style: null,
        children: null,
      };
      const items2 = [tmp.container];
      if (null != tmp11) {
        num = 1;
      }
      items2[1] = { opacity: num, top: tooltipY, left: tooltipX };
      obj8.style = items2;
      let tmp17 = "bottom" === position;
      if (tmp17) {
        const obj9 = { style: null };
        const items3 = [, , ,];
        ({ arrow: arr4[0], topArrow: arr4[1] } = tmp);
        const obj10 = { left: -adjustmentX };
        items3[2] = obj10;
        items3[3] = animatedStyle1;
        obj9.style = items3;
        tmp17 = closure_6(tmp5(tmp3[8]).View, obj9);
      }
      const items4 = [tmp17, ,];
      const obj11 = {
        style: null,
        children: closure_6(tmp2(token1[12]).Text, {
          style: tmp.text,
          variant: "text-xs/bold",
          color: "text-overlay-light",
          children: label,
        }),
      };
      const items5 = [tmp.textContainer, animatedStyle];
      obj11.style = items5;
      items4[1] = closure_6(token(token1[8]).View, obj11);
      let tmp19Result = "top" === position;
      if (tmp19Result) {
        const obj13 = { style: null };
        const items6 = [, , ,];
        ({ arrow: arr7[0], bottomArrow: arr7[1] } = tmp);
        const obj14 = { left: -adjustmentX };
        items6[2] = obj14;
        items6[3] = animatedStyle1;
        obj13.style = items6;
        tmp19Result = closure_6(tmp5(tmp3[8]).View, obj13);
      }
      items4[2] = tmp19Result;
      obj8.children = items4;
      return closure_7(Pressable, obj8);
    };
