import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function AnimatedCount(state) {
  let count;
  let current;
  let formatter;
  let previous;
  let textColor;
  let textStyle;
  let textVariant;
  state = state.state;
  const cleanUp = state.cleanUp;
  const height = state.height;
  const springConfig = state.springConfig;
  let context;
  let sharedValue;
  let memo;
  let obj = context;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  context = context.useContext(closure_12);
  cleanUp(height[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  let obj1 = state(height[6]);
  if (state === state(height[7]).TransitionStates.MOUNTED) {
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
  sharedValue = obj1.useSharedValue(NEUTRAL);
  let items = [height];
  memo = obj.useMemo(() => outer1_11.map((arg0) => {
    if (null == closure_2) {
      return 0;
    } else if (outer1_10.ABOVE === arg0) {
      let num = -1 * tmp;
    } else {
      num = tmp;
      if (tmp3.BELOW !== arg0) {
        if (tmp3.NEUTRAL === arg0) {
          num = 0;
        }
      }
    }
  }), items);
  let fn = function y() {
    let obj = { transform: null };
    obj = { translateY: null };
    const obj3 = state(height[8]);
    const obj4 = state(height[6]);
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_0 === outer1_0(outer1_2[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        outer1_0(outer1_2[6]).runOnJS(closure_1)();
        const obj = outer1_0(outer1_2[6]);
      }
    };
    obj = { state, TransitionStates: state(height[7]).TransitionStates, runOnJS: state(height[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10933954976568;
    fn.__initData = outer1_14;
    obj[0] = obj3.withSpring(state(height[6]).interpolate(sharedValue.get(), outer1_11, memo), springConfig, "respect-motion-settings", fn);
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { withSpring: tmp5(tmp3[8]).withSpring, interpolate: tmp5(tmp3[6]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: tmp5(tmp3[7]).TransitionStates, runOnJS: tmp5(tmp3[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 13513457118386;
  fn.__initData = closure_13;
  const items1 = [sharedValue, context, state];
  const animatedStyle = state(height[6]).useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    let current;
    let previous;
    if (state === state(height[7]).TransitionStates.YEETED) {
      ({ current, previous } = context);
      if (current > previous) {
        let NEUTRAL = outer1_10.BELOW;
      } else if (current < previous) {
        NEUTRAL = outer1_10.ABOVE;
      } else {
        NEUTRAL = outer1_10.NEUTRAL;
      }
      const result = -1 * NEUTRAL;
    } else {
      const result1 = sharedValue.set(outer1_10.NEUTRAL);
    }
  }, items1);
  obj = { style: items2, children: null };
  items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  obj1 = { variant: textVariant, color: textColor, style: textStyle, children: null };
  obj1[3] = formatter(count);
  obj[1] = callback(state(height[9]).Text, obj1);
  return callback(cleanUp(height[6]).View, obj);
}
function getItemKey(arg0) {
  return "" + arg0;
}
function AnimatedCounterTransitionGroup(count) {
  let c8;
  let tmp5;
  count = count.count;
  const formatter = count.formatter;
  let ref = formatter;
  const textColor = count.textColor;
  const textVariant = count.textVariant;
  const textStyle = count.textStyle;
  const springConfig = count.springConfig;
  let first;
  let callback;
  let callback2;
  let callback3;
  ref = undefined;
  const tmp = callback3();
  const tmp2 = textVariant(textStyle.useState(), 2);
  first = tmp2[0];
  callback = tmp2[1];
  let items = [count];
  [tmp5, c8] = textVariant(textStyle.useState(items), 2);
  callback3 = textStyle.useRef(tmp5);
  ref = textStyle.useRef(count);
  let items1 = [count];
  const effect = textStyle.useEffect(() => {
    ref.current = ref.current[0];
    const items = [count];
    ref.current = items;
    const items1 = [count];
    _undefined(items1);
  }, items1);
  count = tmp5;
  const items2 = [tmp5, ref];
  const memo = textStyle.useMemo(() => ({ current: count[0], previous: ref.current }), items2);
  const items3 = [formatter, first, springConfig, textColor, textStyle, textVariant];
  callback = textStyle.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj = { style: tmp.container, children: null };
  obj = { value: memo, children: null };
  const callback1 = textStyle.useCallback((arg0, arg1, arg2, arg3) => {
    const obj = { formatter: ref, springConfig: null, count: null, state: null, cleanUp: null, height: null, textColor: null, textVariant: null, textStyle: null };
    let springStandard = springConfig;
    if (null == springConfig) {
      springStandard = count(textColor[10]).springStandard;
    }
    obj[1] = springStandard;
    obj[2] = arg1;
    obj[3] = arg2;
    obj[4] = arg3;
    obj[5] = first;
    obj[6] = textColor;
    obj[7] = textVariant;
    obj[8] = textStyle;
    return closure_7(outer1_15, obj, arg0);
  }, items3);
  obj = { items: tmp5, renderItem: callback1, getItemKey };
  obj[1] = callback(count(textColor[7]).TransitionGroup, obj);
  const items4 = [callback(redux.Provider, obj), ];
  const obj1 = { style: tmp.hidden, onLayout: callback, children: null };
  const obj2 = { variant: textVariant, color: textColor, style: textStyle, children: null };
  obj2[3] = formatter(count);
  obj1[2] = callback(count(textColor[9]).Text, obj2);
  items4[1] = callback(first, obj1);
  obj[1] = items4;
  return callback2(first, obj);
}
function BasicCounter(arg0) {
  let count;
  let formatter;
  let textColor;
  let textStyle;
  let textVariant;
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  const obj = { variant: textVariant, color: textColor, style: textStyle, children: null };
  obj[3] = formatter(count);
  return callback(require(4189) /* Text */.Text, obj);
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flex: 0, flexGrow: 0, flexShrink: 0, justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden" }, hidden: { opacity: 0 } });
let obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
let context = importAllResult.createContext(undefined);
let closure_13 = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_14 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo((textColor) => {
  let animate;
  let count;
  let textStyle;
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
    defaultFormatter = require(10391) /* defaultFormatter */.defaultFormatter;
  }
  if (animate) {
    let obj = { count: null, formatter: null, springConfig: null, textColor: null, textVariant: null, textStyle: null };
    obj[0] = count;
    obj[1] = defaultFormatter;
    obj[2] = textColor.springConfig;
    obj[3] = str;
    obj[4] = str2;
    obj[5] = textStyle;
    let tmp3Result = tmp3(AnimatedCounterTransitionGroup, obj);
  } else {
    obj = { count: null, formatter: null, textColor: null, textVariant: null, textStyle: null };
    obj[0] = count;
    obj[1] = defaultFormatter;
    obj[2] = str;
    obj[3] = str2;
    obj[4] = textStyle;
    tmp3Result = tmp3(BasicCounter, obj);
  }
  return tmp3Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default memoResult;