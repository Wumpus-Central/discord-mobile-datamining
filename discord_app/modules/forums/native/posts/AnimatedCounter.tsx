// discord_app/modules/forums/native/posts/AnimatedCounter.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import AnimatedCounterUtils from "AnimatedCounterUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, height, obj1, set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getItemKey(arg0) {
  return "" + arg0;
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ref = createStyles.createStyles({
  container: {
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  hidden: { opacity: 0 },
});
let obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, ,];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
const redux = react.createContext(undefined);
const __initData = {
  code: 'function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,"respect-motion-settings",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}',
};
const __initData2 = {
  code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
const __initData3 = {
  code: "function AnimatedCounterTsx3(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}",
};
let closure_16 = {
  code: "function AnimatedCounterTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (cleanUp) => {
      let NEUTRAL;
      let context;
      let count;
      let current;
      let formatter;
      let previous;
      let state;
      let textColor;
      let textStyle;
      let textVariant;
      let tmp13;
      let obj = state(height[6]);
      const cResult = obj.c(23);
      ({ count, formatter, state } = cleanUp);
      cleanUp = cleanUp.cleanUp;
      height = cleanUp.height;
      const springConfig = cleanUp.springConfig;
      ({ textColor, textVariant, textStyle } = cleanUp);
      let obj2 = context;
      context = context.useContext(closure_12);
      cleanUp(height[7])(null != context, "[AnimatedCount] Context should not be nullish.");
      const useSharedValue = state(height[8]).useSharedValue;
      state(height[8]);
      const tmp5 = cleanUp;
      if (state === state(height[9]).TransitionStates.MOUNTED) {
        NEUTRAL = obj.NEUTRAL;
      } else {
        ({ current, previous } = context);
        if (current > previous) {
          NEUTRAL = obj.BELOW;
        } else if (current < previous) {
          NEUTRAL = obj.ABOVE;
        } else {
          NEUTRAL = obj.NEUTRAL;
        }
      }
      const sharedValue = useSharedValue(NEUTRAL);
      if (cResult[0] !== height) {
        const mapped = items.map((item) => {
          let num = 0;
          if (null != height) {
            let num2;
            if (obj.ABOVE === item) {
              num2 = -1 * height;
            } else {
              num2 = height;
              if (obj.BELOW !== item) {
                if (obj.NEUTRAL === item) {
                  num2 = 0;
                }
              }
            }
            num = num2;
          }
          return num;
        });
        let num = 0;
        cResult[0] = height;
        let num2 = 1;
        cResult[1] = mapped;
        tmp13 = mapped;
      } else {
        tmp13 = cResult[1];
      }
      let closure_6 = tmp13;
      const tmpResult = state(height[8]);
      class N {
        constructor() {
          obj = { transform: null };
          obj1 = { translateY: null };
          tmp = closure_0(closure_2[10]);
          withSpring = tmp.withSpring;
          obj3 = closure_0(closure_2[8]);
          interpolateResult = obj3.interpolate(closure_5.get(), closure_11, closure_6);
          fn = function t(arg0) {
            const tmp = arg0 && closure_1_0 === state(height[9]).TransitionStates.YEETED;
            if (tmp) {
              const obj = state(height[8]);
              obj.runOnJS(cleanUp)();
            }
          };
          obj5 = {
            state,
            TransitionStates: closure_0(closure_2[9]).TransitionStates,
            runOnJS: closure_0(closure_2[8]).runOnJS,
            cleanUp,
          };
          fn.__closure = obj5;
          fn.__workletHash = 10933954976568;
          fn.__initData = closure_14;
          obj1.translateY = withSpring(interpolateResult, springConfig, "respect-motion-settings", fn);
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      let obj3 = {
        withSpring: state(tmp2[10]).withSpring,
        interpolate: state(tmp2[8]).interpolate,
        animationState: sharedValue,
        ANIMATION_INPUT: items,
        animationOutput: tmp13,
        springConfig,
        state,
        TransitionStates: state(tmp2[9]).TransitionStates,
        runOnJS: state(tmp2[8]).runOnJS,
        cleanUp,
      };
      N.__closure = obj3;
      N.__workletHash = 8316525106418;
      N.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(N);
      if (cResult[2] === sharedValue) {
        if (cResult[3] === context) {
          let tmp17;
          let tmp18;
          let tmp20;
          if (cResult[4] === state) {
            tmp17 = cResult[5];
            tmp18 = cResult[6];
          }
          const effect = obj2.useEffect(tmp17, tmp18);
          if (cResult[7] !== height) {
            const obj4 = { height };
            cResult[7] = height;
            cResult[8] = obj4;
            tmp20 = obj4;
          } else {
            tmp20 = cResult[8];
          }
          if (cResult[9] === animatedStyle) {
            let tmp21;
            if (cResult[10] === tmp20) {
              tmp21 = cResult[11];
            }
            if (cResult[12] === count) {
              let tmp23;
              if (cResult[13] === formatter) {
                tmp23 = cResult[14];
              }
              if (cResult[15] === tmp23) {
                if (cResult[16] === textColor) {
                  if (cResult[17] === textStyle) {
                    let tmp25;
                    if (cResult[18] === textVariant) {
                      tmp25 = cResult[19];
                    }
                    if (cResult[20] === tmp21) {
                      let tmp28;
                      if (cResult[21] === tmp25) {
                        tmp28 = cResult[22];
                      }
                      return tmp28;
                    }
                    const obj5 = { style: tmp21, children: tmp25 };
                    const tmp30 = closure_7(tmp5(height[8]).View, obj5);
                    cResult[20] = tmp21;
                    cResult[21] = tmp25;
                    cResult[22] = tmp30;
                    tmp28 = tmp30;
                  }
                }
              }
              const obj6 = { variant: textVariant, color: textColor, style: textStyle, children: tmp23 };
              const tmp27 = closure_7(state(height[11]).Text, obj6);
              cResult[15] = tmp23;
              cResult[16] = textColor;
              cResult[17] = textStyle;
              cResult[18] = textVariant;
              cResult[19] = tmp27;
              tmp25 = tmp27;
            }
            const formatterResult = formatter(count);
            cResult[12] = count;
            cResult[13] = formatter;
            cResult[14] = formatterResult;
            tmp23 = formatterResult;
          }
          items = [sharedValue.absoluteFill, animatedStyle, tmp20];
          cResult[9] = animatedStyle;
          cResult[10] = tmp20;
          cResult[11] = items;
          tmp21 = items;
        }
      }
      class I {
        constructor() {
          let NEUTRAL;
          let current;
          let previous;
          set = sharedValue.set;
          if (state === native.TransitionStates.YEETED) {
            let NEUTRAL2;
            ({ current, previous } = context);
            if (current > previous) {
              NEUTRAL2 = obj.BELOW;
            } else if (current < previous) {
              NEUTRAL2 = obj.ABOVE;
            } else {
              NEUTRAL2 = obj.NEUTRAL;
            }
            NEUTRAL = -1 * NEUTRAL2;
          } else {
            NEUTRAL = obj.NEUTRAL;
          }
          const result = set(NEUTRAL);
        }
      }
      const items1 = [sharedValue, context, state];
      cResult[2] = sharedValue;
      cResult[3] = context;
      cResult[4] = state;
      cResult[5] = I;
      cResult[6] = items1;
      tmp18 = items1;
      tmp17 = I;
    }
  : (state) => {
      let NEUTRAL;
      let Text;
      let count;
      let current;
      let formatter;
      let items2;
      let obj4;
      let previous;
      let textColor;
      let textStyle;
      let textVariant;
      state = state.state;
      const cleanUp = state.cleanUp;
      height = state.height;
      const springConfig = state.springConfig;
      let context;
      let sharedValue;
      let memo;
      let obj = context;
      ({ count, formatter, textColor, textVariant, textStyle } = state);
      context = context.useContext(closure_12);
      cleanUp(height[7])(null != context, "[AnimatedCount] Context should not be nullish.");
      const useSharedValue = state(height[8]).useSharedValue;
      state(height[8]);
      const tmp2 = cleanUp;
      if (state === state(height[9]).TransitionStates.MOUNTED) {
        NEUTRAL = obj.NEUTRAL;
      } else {
        ({ current, previous } = context);
        if (current > previous) {
          NEUTRAL = obj.BELOW;
        } else if (current < previous) {
          NEUTRAL = obj.ABOVE;
        } else {
          NEUTRAL = obj.NEUTRAL;
        }
      }
      sharedValue = useSharedValue(NEUTRAL);
      items = [height];
      memo = obj.useMemo(
        () =>
          items.map((item) => {
            let num = 0;
            if (null != height) {
              let num2;
              if (obj.ABOVE === item) {
                num2 = -1 * height;
              } else {
                num2 = height;
                if (obj.BELOW !== item) {
                  if (obj.NEUTRAL === item) {
                    num2 = 0;
                  }
                }
              }
              num = num2;
            }
            return num;
          }),
        items,
      );
      let fn = function y() {
        let fn;
        let interpolateResult;
        let withSpring;
        let obj = { transform: items };
        const obj2 = { translateY: withSpring(interpolateResult, springConfig, "respect-motion-settings", fn) };
        let tmp = spring;
        withSpring = tmp.withSpring;
        fn = function t(arg0) {
          const tmp = arg0 && closure_1_0 === state(height[9]).TransitionStates.YEETED;
          if (tmp) {
            const obj = state(height[8]);
            obj.runOnJS(cleanUp)();
          }
        };
        const obj3 = ReanimatedRexport;
        interpolateResult = obj3.interpolate(sharedValue.get(), items, memo);
        fn.__closure = {
          state,
          TransitionStates: native.TransitionStates,
          runOnJS: ReanimatedRexport.runOnJS,
          cleanUp,
        };
        fn.__workletHash = 5094957138174;
        fn.__initData = __initData;
        ({ state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
        items = [obj2];
        return obj;
      };
      const tmp5Result = state(height[8]);
      let obj2 = {
        withSpring: tmp5(tmp3[10]).withSpring,
        interpolate: tmp5(tmp3[8]).interpolate,
        animationState: sharedValue,
        ANIMATION_INPUT: items,
        animationOutput: memo,
        springConfig,
        state,
        TransitionStates: tmp5(tmp3[9]).TransitionStates,
        runOnJS: tmp5(tmp3[8]).runOnJS,
        cleanUp,
      };
      fn.__closure = obj2;
      fn.__workletHash = 1794490545008;
      fn.__initData = __initData3;
      const items1 = [sharedValue, context, state];
      const animatedStyle = tmp5Result.useAnimatedStyle(fn);
      const effect = obj.useEffect(() => {
        let NEUTRAL;
        let current;
        let previous;
        set = sharedValue.set;
        if (state === native.TransitionStates.YEETED) {
          let NEUTRAL2;
          ({ current, previous } = context);
          if (current > previous) {
            NEUTRAL2 = obj.BELOW;
          } else if (current < previous) {
            NEUTRAL2 = obj.ABOVE;
          } else {
            NEUTRAL2 = obj.NEUTRAL;
          }
          NEUTRAL = -1 * NEUTRAL2;
        } else {
          NEUTRAL = obj.NEUTRAL;
        }
        const result = set(NEUTRAL);
      }, items1);
      let obj3 = { style: items2, children: closure_7(Text, obj4) };
      items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
      const View = tmp2(tmp3[8]).View;
      obj4 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
      Text = tmp5(tmp3[11]).Text;
      return closure_7(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (count) => {
      let closure_8;
      let textColor;
      let tmp11;
      let tmp6;
      let tmp8;
      let obj = count(textColor[6]);
      const cResult = obj.c(34);
      count = count.count;
      const formatter = count.formatter;
      textColor = count.textColor;
      const textVariant = count.textVariant;
      const textStyle = count.textStyle;
      const springConfig = count.springConfig;
      ref();
      const tmp4 = textVariant(textStyle.useState(), 2);
      height = tmp4[0];
      let closure_7 = tmp4[1];
      if (cResult[0] !== count) {
        items = [count];
        cResult[0] = count;
        cResult[1] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[1];
      }
      [tmp8, closure_8] = textVariant(textStyle.useState(tmp6), 2);
      textVariant(textStyle.useState(tmp6), 2);
      obj2.useRef(tmp8);
      ref = obj2.useRef(count);
      if (cResult[2] !== count) {
        class N {
          constructor() {
            ref.current = ref.current[0];
            items = [count];
            ref.current = items;
            const items1 = [count];
            closure_8(items1);
          }
        }
        let items1 = [count];
        cResult[2] = count;
        cResult[3] = N;
        cResult[4] = items1;
        tmp11 = items1;
      } else {
        class N {
          constructor() {
            ref.current = ref.current[0];
            items = [count];
            ref.current = items;
            const items1 = [count];
            closure_8(items1);
          }
        }
        tmp11 = cResult[4];
      }
      const effect = obj2.useEffect(N, tmp11);
      _require = tmp8;
      const items2 = [tmp8, ref];
      const memo = obj2.useMemo(() => ({ current: count[0], previous: ref.current }), items2);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(nativeEvent) {
            closure_7(nativeEvent.nativeEvent.layout.height);
          }
        }
        cResult[5] = P;
      } else {
        class P {
          constructor(nativeEvent) {
            closure_7(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      if (cResult[6] === formatter) {
        class P {
          constructor(nativeEvent) {
            closure_7(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      class Y {
        constructor(id, count, state, cleanUp) {
          let springStandard;
          const obj = {
            formatter,
            springConfig: springStandard,
            count,
            state,
            cleanUp,
            height,
            textColor,
            textVariant,
            textStyle,
          };
          springStandard = springConfig;
          if (null == springConfig) {
            springStandard = springPresets.springStandard;
          }
          return metroImportDefault(closure_17, obj, id);
        }
      }
      cResult[6] = formatter;
      cResult[7] = height;
      cResult[8] = springConfig;
      cResult[9] = textColor;
      cResult[10] = textStyle;
      cResult[11] = textVariant;
      cResult[12] = Y;
    }
  : (count) => {
      let Text;
      let _undefined;
      let c8;
      let items4;
      let obj3;
      let obj5;
      let tmp5;
      count = count.count;
      const formatter = count.formatter;
      const textColor = count.textColor;
      const textVariant = count.textVariant;
      const textStyle = count.textStyle;
      const springConfig = count.springConfig;
      c8 = undefined;
      ref = undefined;
      const tmp = ref();
      const tmp2 = textVariant(textStyle.useState(), 2);
      height = tmp2[0];
      let closure_7 = tmp2[1];
      items = [count];
      [tmp5, c8] = textVariant(textStyle.useState(items), 2);
      textVariant(textStyle.useState(items), 2);
      textStyle.useRef(tmp5);
      ref = textStyle.useRef(count);
      let items1 = [count];
      const effect = textStyle.useEffect(() => {
        ref.current = ref.current[0];
        items = [count];
        ref.current = items;
        const items1 = [count];
        _undefined(items1);
      }, items1);
      let closure_0 = tmp5;
      const items2 = [tmp5, ref];
      const memo = textStyle.useMemo(() => ({ current: count[0], previous: ref.current }), items2);
      const items3 = [formatter, height, springConfig, textColor, textStyle, textVariant];
      const callback = textStyle.useCallback((nativeEvent) => {
        closure_7(nativeEvent.nativeEvent.layout.height);
      }, []);
      let obj = { style: tmp.container, children: items4 };
      const obj2 = { value: memo, children: closure_7(count(textColor[9]).TransitionGroup, obj3) };
      const callback1 = textStyle.useCallback((id, count, state, cleanUp) => {
        let springStandard;
        const obj = {
          formatter,
          springConfig: springStandard,
          count,
          state,
          cleanUp,
          height,
          textColor,
          textVariant,
          textStyle,
        };
        springStandard = springConfig;
        if (null == springConfig) {
          springStandard = springPresets.springStandard;
        }
        return metroImportDefault(closure_17, obj, id);
      }, items3);
      const Provider = redux.Provider;
      obj3 = { items: tmp5, renderItem: callback1, getItemKey };
      items4 = [closure_7(Provider, obj2)];
      const obj4 = { style: tmp.hidden, onLayout: callback, children: closure_7(Text, obj5) };
      obj5 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
      Text = count(textColor[11]).Text;
      items4[1] = closure_7(height, obj4);
      return c8(height, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let count;
      let formatter;
      let textColor;
      let textStyle;
      let textVariant;
      const obj = react2;
      const cResult = obj.c(8);
      ({ count, textStyle, textColor, textVariant, formatter } = arg0);
      if (cResult[0] === count) {
        let tmp4;
        if (cResult[1] === formatter) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === tmp4) {
          if (cResult[4] === textColor) {
            if (cResult[5] === textStyle) {
              let tmp6;
              if (cResult[6] === textVariant) {
                tmp6 = cResult[7];
              }
              return tmp6;
            }
          }
        }
        const obj2 = { variant: textVariant, color: textColor, style: textStyle, children: tmp4 };
        const tmp8 = metroImportDefault(Text_Text.Text, obj2);
        cResult[3] = tmp4;
        cResult[4] = textColor;
        cResult[5] = textStyle;
        cResult[6] = textVariant;
        cResult[7] = tmp8;
        tmp6 = tmp8;
      }
      const formatterResult = formatter(count);
      cResult[0] = count;
      cResult[1] = formatter;
      cResult[2] = formatterResult;
      tmp4 = formatterResult;
    }
  : (arg0) => {
      let count;
      let formatter;
      let textColor;
      let textStyle;
      let textVariant;
      ({ count, textStyle, textColor, textVariant, formatter } = arg0);
      const obj = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
      const Text = Text_Text.Text;
      return metroImportDefault(Text, obj);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let animate;
        let count;
        let formatter;
        let springConfig;
        let textColor;
        let textStyle;
        let textVariant;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(13);
        ({ count, springConfig, textStyle, animate, textColor, textVariant, formatter } = arg0);
        let str = "text-default";
        const tmp4 = undefined === animate || animate;
        if (undefined !== textColor) {
          str = textColor;
        }
        let str2 = "text-sm/normal";
        if (undefined !== textVariant) {
          str2 = textVariant;
        }
        if (undefined === formatter) {
          formatter = AnimatedCounterUtils.defaultFormatter;
        }
        if (tmp4) {
          if (cResult[0] === count) {
            if (cResult[1] === formatter) {
              if (cResult[2] === springConfig) {
                if (cResult[3] === str) {
                  if (cResult[4] === textStyle) {
                    let tmp9;
                    if (cResult[5] === str2) {
                      tmp9 = cResult[6];
                    }
                    tmp5 = tmp9;
                  }
                }
              }
            }
          }
          const obj2 = { count, formatter, springConfig, textColor: str, textVariant: str2, textStyle };
          const tmp12 = metroImportDefault(closure_19, obj2);
          cResult[0] = count;
          cResult[1] = formatter;
          cResult[2] = springConfig;
          cResult[3] = str;
          cResult[4] = textStyle;
          cResult[5] = str2;
          cResult[6] = tmp12;
          tmp9 = tmp12;
        } else {
          if (cResult[7] === count) {
            if (cResult[8] === formatter) {
              if (cResult[9] === str) {
                if (cResult[10] === textStyle) {
                  if (cResult[11] === str2) {
                    tmp5 = cResult[12];
                  }
                }
              }
            }
          }
          const obj3 = { count, formatter, textColor: str, textVariant: str2, textStyle };
          const tmp8 = metroImportDefault(closure_20, obj3);
          cResult[7] = count;
          cResult[8] = formatter;
          cResult[9] = str;
          cResult[10] = textStyle;
          cResult[11] = str2;
          cResult[12] = tmp8;
          tmp5 = tmp8;
        }
        return tmp5;
      }
    : (springConfig) => {
        let animate;
        let count;
        let textStyle;
        let tmp3Result;
        ({ count, textStyle, animate } = springConfig);
        springConfig = springConfig.springConfig;
        if (animate === undefined) {
          animate = true;
        }
        let str = springConfig.textColor;
        if (str === undefined) {
          str = "text-default";
        }
        let str2 = springConfig.textVariant;
        if (str2 === undefined) {
          str2 = "text-sm/normal";
        }
        let defaultFormatter = springConfig.formatter;
        if (defaultFormatter === undefined) {
          defaultFormatter = AnimatedCounterUtils.defaultFormatter;
        }
        if (animate) {
          const obj2 = {
            count,
            formatter: defaultFormatter,
            springConfig,
            textColor: str,
            textVariant: str2,
            textStyle,
          };
          tmp3Result = metroImportDefault(closure_19, obj2);
        } else {
          const obj = { count, formatter: defaultFormatter, textColor: str, textVariant: str2, textStyle };
          tmp3Result = metroImportDefault(closure_20, obj);
        }
        return tmp3Result;
      },
);
let result = size.fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default memoResult;
