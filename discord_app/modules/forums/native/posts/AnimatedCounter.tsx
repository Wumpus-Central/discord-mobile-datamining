// === Module 10519: AnimatedCount ===

// Module 10519 (AnimatedCount)
import Text from "Text" /* 4734 */;
import defaultFormatter2 from "defaultFormatter" /* 10520 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function AnimatedCount(state) {
  state = state.state;
  const cleanUp = state.cleanUp;
  const height = state.height;
  const springConfig = state.springConfig;
  let context;
  let sharedValue;
  let memo;
  obj = context;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  context = context.useContext(closure_12);
  cleanUp(height[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  obj1 = state(height[6]);
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
  items = [height];
  memo = obj.useMemo(() => items.map((item, index) => {
    if (null == closure_2) {
      return 0;
    } else if (closure_1_10.ABOVE === item) {
    } else if (closure_1_10.BELOW !== item) {
    }
  }), items);
  let fn = function y() {
    const obj3 = state(height[8]);
    const obj4 = state(height[6]);
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_0 === state(height[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(height[6]).runOnJS(closure_1)();
        obj = state(height[6]);
      }
    };
    obj = { state, TransitionStates: state(height[7]).TransitionStates, runOnJS: state(height[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10933954976568;
    fn.__initData = closure_1_14;
    obj[0] = obj3.withSpring(state(height[6]).interpolate(sharedValue.get(), closure_1_11, memo), springConfig, "respect-motion-settings", fn);
    items = [obj];
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
    if (state === state(height[7]).TransitionStates.YEETED) {
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
  obj = { style: items2, children: null };
  items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  obj1 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  obj[1] = callback(state(height[9]).Text, obj1);
  return callback(cleanUp(height[6]).View, obj);
}
function getItemKey(arg0) {
  return "" + arg0;
}
function AnimatedCounterTransitionGroup(count) {
  count = count.count;
  const formatter = count.formatter;
  const textColor = count.textColor;
  const textVariant = count.textVariant;
  const textStyle = count.textStyle;
  const springConfig = count.springConfig;
  let callback2;
  let callback3;
  const tmp = callback3();
  const tmp2 = textVariant(textStyle.useState(), 2);
  const first = tmp2[0];
  items = [count];
  [tmp5, c8] = textVariant(textStyle.useState(items), 2);
  callback3 = textStyle.useRef(tmp5);
  const ref = textStyle.useRef(count);
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
  const items3 = [formatter, first, springConfig, textColor, textStyle, textVariant];
  const callback = textStyle.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const callback1 = textStyle.useCallback((arg0, arg1, arg2, arg3) => {
    obj = { formatter: ref, springConfig: null, count: null, state: null, cleanUp: null, height: null, textColor: null, textVariant: null, textStyle: null };
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
    return callback(AnimatedCount, obj, arg0);
  }, items3);
  obj = { items: tmp5, renderItem: callback1, getItemKey };
  obj[1] = callback(count(textColor[7]).TransitionGroup, obj);
  const items4 = [callback(redux.Provider, obj), ];
  obj1 = { style: tmp.hidden, onLayout: callback, children: null };
  const tmp4 = textVariant(textStyle.useState(items), 2);
  obj1[2] = callback(count(textColor[9]).Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
  items4[1] = callback(first, obj1);
  obj[1] = items4;
  return callback2(first, obj);
}
function BasicCounter(arg0) {
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  return callback(Text.Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
}
let c4 = importAllResult;
({ StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { flex: 0, flexGrow: 0, flexShrink: 0, justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden" }, hidden: { opacity: 0 } });
let obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
let context = importAllResult.createContext(undefined);
let closure_13 = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_14 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = importAllResult.memo((textColor) => {
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
    defaultFormatter = defaultFormatter2.defaultFormatter;
  }
  if (animate) {
    obj = { count: null, formatter: null, springConfig: null, textColor: null, textVariant: null, textStyle: null };
    obj[0] = count;
    obj[1] = defaultFormatter;
    obj[2] = textColor.springConfig;
    obj[3] = str;
    obj[4] = str2;
    obj[5] = textStyle;
    let tmp3Result = callback(AnimatedCounterTransitionGroup, obj);
  } else {
    obj = { count: null, formatter: null, textColor: null, textVariant: null, textStyle: null };
    obj[0] = count;
    obj[1] = defaultFormatter;
    obj[2] = str;
    obj[3] = str2;
    obj[4] = textStyle;
    tmp3Result = callback(BasicCounter, obj);
  }
  return tmp3Result;
});
let result = require("obj132").fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default memoResult;