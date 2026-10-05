// === Module 11070: AnimatedCounter ===

// Module 11070 (AnimatedCounter)
import c from "c" /* 576 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import AnimatedCounterUtils from "AnimatedCounterUtils" /* 11071 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function getItemKey(arg0) {
  return "" + arg0;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
createStyles.createStyles({ container: { flex: 0, flexGrow: 0, flexShrink: 0, justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden" }, hidden: { opacity: 0 } });
let obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
const redux = noop.createContext(undefined);
const __initData = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
const __initData2 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function AnimatedCounterTsx3(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_16 = { code: "function AnimatedCounterTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((cleanUp) => {
  obj = state(height[6]);
  const cResult = obj.c(23);
  ({ count, formatter, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  height = cleanUp.height;
  const springConfig = cleanUp.springConfig;
  ({ textColor, textVariant, textStyle } = cleanUp);
  context = context.useContext(closure_12);
  cleanUp(height[7])(null != context, "[AnimatedCount] Context should not be nullish.");
  if (state === state(height[9]).TransitionStates.MOUNTED) {
    let NEUTRAL = obj.NEUTRAL;
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
  const sharedValue = state(height[8]).useSharedValue(NEUTRAL);
  if (cResult[0] !== height) {
    const mapped = items.map((item) => {
      if (null == height) {
        return 0;
      } else if (obj.ABOVE === item) {
        const num = -1 * height;
      } else if (obj.BELOW !== item) {
      }
    });
    cResult[0] = height;
    cResult[1] = mapped;
    let tmp12 = mapped;
  } else {
    tmp12 = cResult[1];
  }
  closure_6 = tmp12;
  let obj2 = context;
  let obj3 = state(height[8]);
  const tmp5 = cleanUp;
  class N {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[10]);
      obj4 = closure_0(closure_2[8]);
      interpolateResult = obj4.interpolate(closure_5.get(), closure_11, closure_6);
      fn = function t(arg0) {
        let tmp = arg0;
        if (arg0) {
          tmp = closure_1_0 === state(height[9]).TransitionStates.YEETED;
        }
        if (tmp) {
          state(height[8]).runOnJS(cleanUp)();
          obj = state(height[8]);
        }
      };
      obj6 = { state, TransitionStates: closure_0(closure_2[9]).TransitionStates, runOnJS: closure_0(closure_2[8]).runOnJS, cleanUp };
      fn.__closure = obj6;
      fn.__workletHash = 10933954976568;
      fn.__initData = closure_14;
      obj1.translateY = obj3.withSpring(interpolateResult, springConfig, "respect-motion-settings", fn);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmpResult = state(height[8]);
  N.__closure = { withSpring: state(height[10]).withSpring, interpolate: state(height[8]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: tmp12, springConfig, state, TransitionStates: state(height[9]).TransitionStates, runOnJS: state(height[8]).runOnJS, cleanUp };
  N.__workletHash = 8316525106418;
  N.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(N);
  if (cResult[2] === sharedValue) {
    if (cResult[3] === context) {
      if (cResult[4] === state) {
        let tmp16 = cResult[5];
        let tmp17 = cResult[6];
      }
      const effect = obj2.useEffect(tmp16, tmp17);
      if (cResult[7] !== height) {
        const obj5 = { height };
        cResult[7] = height;
        cResult[8] = obj5;
        let tmp19 = obj5;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === animatedStyle) {
        if (cResult[10] === tmp19) {
          let tmp20 = cResult[11];
        }
        if (cResult[12] === count) {
          if (cResult[13] === formatter) {
            let tmp22 = cResult[14];
          }
          if (cResult[15] === tmp22) {
            if (cResult[16] === textColor) {
              if (cResult[17] === textStyle) {
                if (cResult[18] === textVariant) {
                  let tmp24 = cResult[19];
                }
                if (cResult[20] === tmp20) {
                  if (cResult[21] === tmp24) {
                    let tmp27 = cResult[22];
                  }
                  return tmp27;
                }
                const obj6 = { style: tmp20, children: tmp24 };
                const tmp29 = closure_7(tmp5(tmp2[8]).View, obj6);
                cResult[20] = tmp20;
                cResult[21] = tmp24;
                cResult[22] = tmp29;
                tmp27 = tmp29;
              }
            }
          }
          const obj7 = { variant: textVariant, color: textColor, style: textStyle, children: tmp22 };
          const tmp26 = closure_7(state(tmp2[11]).Text, obj7);
          cResult[15] = tmp22;
          cResult[16] = textColor;
          cResult[17] = textStyle;
          cResult[18] = textVariant;
          cResult[19] = tmp26;
          tmp24 = tmp26;
        }
        const formatterResult = formatter(count);
        cResult[12] = count;
        cResult[13] = formatter;
        cResult[14] = formatterResult;
        tmp22 = formatterResult;
      }
      items = [sharedValue.absoluteFill, animatedStyle, tmp19];
      cResult[9] = animatedStyle;
      cResult[10] = tmp19;
      cResult[11] = items;
      tmp20 = items;
    }
  }
  class I {
    constructor() {
      tmp = closure_5;
      if (state === closure_0(closure_2[9]).TransitionStates.YEETED) {
        tmp3 = closure_4;
        ({ current, previous } = closure_4);
        if (current > previous) {
          tmp6 = closure_10;
          NEUTRAL = closure_10.BELOW;
        } else if (current < previous) {
          tmp5 = closure_10;
          NEUTRAL = closure_10.ABOVE;
        } else {
          tmp4 = closure_10;
          NEUTRAL = closure_10.NEUTRAL;
        }
        num = -1;
        result = -1 * NEUTRAL;
      } else {
        tmp2 = closure_10;
        result1 = closure_5.set(closure_10.NEUTRAL);
        return;
      }
      return;
    }
  }
  const items1 = [sharedValue, context, state];
  cResult[2] = sharedValue;
  cResult[3] = context;
  cResult[4] = state;
  cResult[5] = I;
  cResult[6] = items1;
  tmp17 = items1;
  tmp16 = I;
  let obj4 = { withSpring: state(height[10]).withSpring, interpolate: state(height[8]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: tmp12, springConfig, state, TransitionStates: state(height[9]).TransitionStates, runOnJS: state(height[8]).runOnJS, cleanUp };
}) : ((state) => {
  state = state.state;
  const cleanUp = state.cleanUp;
  height = state.height;
  const springConfig = state.springConfig;
  let context;
  let sharedValue;
  let memo;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  context = context.useContext(closure_12);
  cleanUp(height[7])(null != context, "[AnimatedCount] Context should not be nullish.");
  if (state === state(height[9]).TransitionStates.MOUNTED) {
    let NEUTRAL = obj.NEUTRAL;
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
  sharedValue = state(height[8]).useSharedValue(NEUTRAL);
  items = [height];
  memo = obj.useMemo(() => items.map((item) => {
    if (null == height) {
      return 0;
    } else if (constants.ABOVE === item) {
      const num = -1 * height;
    } else if (constants.BELOW !== item) {
    }
  }), items);
  let obj2 = state(height[8]);
  const tmp2 = cleanUp;
  let fn = function y() {
    obj = { transform: null };
    const obj2 = { translateY: null };
    const obj3 = spring;
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(height[9]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(height[8]).runOnJS(cleanUp)();
        obj = state(height[8]);
      }
    };
    const interpolateResult = ReanimatedRexport.interpolate(sharedValue.get(), items, memo);
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 5094957138174;
    fn.__initData = __initData;
    obj2.translateY = obj3.withSpring(interpolateResult, springConfig, "respect-motion-settings", fn);
    items = [obj2];
    obj.transform = items;
    return obj;
  };
  const tmp5Result = state(height[8]);
  fn.__closure = { withSpring: state(height[10]).withSpring, interpolate: state(height[8]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: state(height[9]).TransitionStates, runOnJS: state(height[8]).runOnJS, cleanUp };
  fn.__workletHash = 1794490545008;
  fn.__initData = __initData3;
  const items1 = [sharedValue, context, state];
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      ({ current, previous } = context);
      if (current > previous) {
        let NEUTRAL = obj.BELOW;
      } else if (current < previous) {
        NEUTRAL = obj.ABOVE;
      } else {
        NEUTRAL = obj.NEUTRAL;
      }
      const result = -1 * NEUTRAL;
    } else {
      const result1 = sharedValue.set(obj.NEUTRAL);
    }
  }, items1);
  let obj4 = { style: null, children: null };
  const items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  obj4.style = items2;
  let obj3 = { withSpring: state(height[10]).withSpring, interpolate: state(height[8]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: state(height[9]).TransitionStates, runOnJS: state(height[8]).runOnJS, cleanUp };
  obj4.children = closure_7(state(height[11]).Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
  return closure_7(tmp2(height[8]).View, obj4);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((count) => {
  const cResult = count(textColor[6]).c(34);
  count = count.count;
  const formatter = count.formatter;
  ref = formatter;
  textColor = count.textColor;
  const textVariant = count.textVariant;
  const textStyle = count.textStyle;
  const springConfig = count.springConfig;
  ref();
  const tmp4 = textVariant(textStyle.useState(), 2);
  height = tmp4[0];
  closure_7 = tmp4[1];
  if (cResult[0] !== count) {
    items = [count];
    cResult[0] = count;
    cResult[1] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
  }
  obj = count(textColor[6]);
  [tmp8, closure_8] = textVariant(textStyle.useState(tmp6), 2);
  obj2.useRef(tmp8);
  ref = obj2.useRef(count);
  if (cResult[2] !== count) {
    class N {
      constructor() {
        closure_10.current = closure_9.current[0];
        items = [];
        items[0] = closure_0;
        closure_9.current = items;
        items1 = [];
        items1[0] = closure_0;
        tmp = closure_8(items1);
        return;
      }
    }
    let items1 = [count];
    cResult[2] = count;
    cResult[3] = N;
    cResult[4] = items1;
    let tmp11 = items1;
  } else {
    class N {
      constructor() {
        closure_10.current = closure_9.current[0];
        items = [];
        items[0] = closure_0;
        closure_9.current = items;
        items1 = [];
        items1[0] = closure_0;
        tmp = closure_8(items1);
        return;
      }
    }
    tmp11 = cResult[4];
  }
  const effect = obj2.useEffect(N, tmp11);
  count = tmp8;
  const items2 = [tmp8, ref];
  const memo = obj2.useMemo(() => ({ current: count[0], previous: ref.current }), items2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        tmp = closure_7(count.nativeEvent.layout.height);
        return;
      }
    }
    cResult[5] = P;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_7(count.nativeEvent.layout.height);
        return;
      }
    }
  }
  if (cResult[6] === formatter) {
    class P {
      constructor(arg0) {
        tmp = closure_7(count.nativeEvent.layout.height);
        return;
      }
    }
  }
  class Y {
    constructor(arg0, arg1, arg2, arg3) {
      obj = { formatter: closure_1, springConfig: null, count: null, state: null, cleanUp: null, height: null, textColor: null, textVariant: null, textStyle: null };
      springStandard = springConfig;
      tmp = jsx;
      tmp2 = f56650;
      if (null == springConfig) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        springStandard = closure_0(closure_2[12]).springStandard;
      }
      obj.springConfig = springStandard;
      obj.count = arg1;
      obj.state = arg2;
      obj.cleanUp = arg3;
      obj.height = closure_6;
      obj.textColor = textColor;
      obj.textVariant = textVariant;
      obj.textStyle = textStyle;
      return tmp(tmp2, obj, count);
    }
  }
  cResult[6] = formatter;
  cResult[7] = height;
  cResult[8] = springConfig;
  cResult[9] = textColor;
  cResult[10] = textStyle;
  cResult[11] = textVariant;
  cResult[12] = Y;
  const tmp3Result = textVariant(textStyle.useState(tmp6), 2);
}) : ((count) => {
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
  closure_7 = tmp2[1];
  items = [count];
  [tmp5, c8] = textVariant(textStyle.useState(items), 2);
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
  count = tmp5;
  const items2 = [tmp5, ref];
  const memo = textStyle.useMemo(() => ({ current: count[0], previous: ref.current }), items2);
  const items3 = [formatter, height, springConfig, textColor, textStyle, textVariant];
  const callback = textStyle.useCallback((nativeEvent) => {
    closure_7(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { style: tmp.container, children: null };
  const obj2 = { value: memo, children: null };
  const callback1 = textStyle.useCallback((arg0, count, state, cleanUp) => {
    obj = { formatter: ref, springConfig: null, count: null, state: null, cleanUp: null, height: null, textColor: null, textVariant: null, textStyle: null };
    let springStandard = springConfig;
    if (null == springConfig) {
      springStandard = springPresets.springStandard;
    }
    obj.springConfig = springStandard;
    obj.count = count;
    obj.state = state;
    obj.cleanUp = cleanUp;
    obj.height = height;
    obj.textColor = textColor;
    obj.textVariant = textVariant;
    obj.textStyle = textStyle;
    return React5(closure_17, obj, arg0);
  }, items3);
  obj2.children = closure_7(count(textColor[9]).TransitionGroup, { items: tmp5, renderItem: callback1, getItemKey });
  const items4 = [closure_7(redux.Provider, obj2), ];
  const obj4 = { style: tmp.hidden, onLayout: callback, children: null };
  const obj3 = { items: tmp5, renderItem: callback1, getItemKey };
  const tmp4 = textVariant(textStyle.useState(items), 2);
  obj4.children = closure_7(count(textColor[11]).Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
  items4[1] = closure_7(height, obj4);
  obj.children = items4;
  return c8(height, obj);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  if (cResult[0] === count) {
    if (cResult[1] === formatter) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      if (cResult[4] === textColor) {
        if (cResult[5] === textStyle) {
          if (cResult[6] === textVariant) {
            let tmp6 = cResult[7];
          }
          return tmp6;
        }
      }
    }
    const obj2 = { variant: textVariant, color: textColor, style: textStyle, children: tmp4 };
    const tmp8 = React5(Text_Text.Text, obj2);
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
}) : ((arg0) => {
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  return React5(Text_Text.Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ count, springConfig, textStyle, animate, textColor, textVariant, formatter } = arg0);
  let str = "text-default";
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
            }
          }
        }
      }
    }
    const obj2 = { count, formatter, springConfig, textColor: str, textVariant: str2, textStyle };
    const tmp12 = React5(closure_19, obj2);
    cResult[0] = count;
    cResult[1] = formatter;
    cResult[2] = springConfig;
    cResult[3] = str;
    cResult[4] = textStyle;
    cResult[5] = str2;
    cResult[6] = tmp12;
  } else {
    if (cResult[7] === count) {
      if (cResult[8] === formatter) {
        if (cResult[9] === str) {
          if (cResult[10] === textStyle) {
            if (cResult[11] === str2) {
              let tmp5 = cResult[12];
            }
            return tmp5;
          }
        }
      }
    }
    const obj3 = { count, formatter, textColor: str, textVariant: str2, textStyle };
    const tmp8 = React5(closure_20, obj3);
    cResult[7] = count;
    cResult[8] = formatter;
    cResult[9] = str;
    cResult[10] = textStyle;
    cResult[11] = str2;
    cResult[12] = tmp8;
    tmp5 = tmp8;
  }
  tmp4 = undefined === animate || animate;
}) : ((textColor) => {
  ({ count, textStyle, animate } = textColor);
  if (animate === undefined) {
    animate = true;
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let str2 = textColor.textVariant;
  if (str2 === undefined) {
    str2 = "text-sm/normal";
  }
  let defaultFormatter = textColor.formatter;
  if (defaultFormatter === undefined) {
    defaultFormatter = AnimatedCounterUtils.defaultFormatter;
  }
  if (animate) {
    const obj2 = { count, formatter: defaultFormatter, springConfig: textColor.springConfig, textColor: str, textVariant: str2, textStyle };
    let tmp3Result = React5(closure_19, obj2);
  } else {
    obj = { count, formatter: defaultFormatter, textColor: str, textVariant: str2, textStyle };
    tmp3Result = React5(closure_20, obj);
  }
  return tmp3Result;
}));