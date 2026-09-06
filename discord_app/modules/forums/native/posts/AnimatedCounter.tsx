// === Module 11316: AnimatedCounter ===

// Module 11316 (AnimatedCounter)
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import AnimatedCounterUtils from "AnimatedCounterUtils" /* 11317 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AnimatedCount(state) {
  state = state.state;
  const cleanUp = state.cleanUp;
  const height = state.height;
  const springConfig = state.springConfig;
  let context;
  let sharedValue;
  let memo;
  __closure = context;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  context = context.useContext(closure_12);
  cleanUp(height[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  let obj1 = state(height[6]);
  if (state === state(height[7]).TransitionStates.MOUNTED) {
    let NEUTRAL = __closure.NEUTRAL;
  } else {
    ({ current, previous } = context);
    if (current > previous) {
      NEUTRAL = __closure.BELOW;
    } else if (current < previous) {
      NEUTRAL = __closure.ABOVE;
    } else {
      NEUTRAL = __closure.NEUTRAL;
    }
  }
  sharedValue = obj1.useSharedValue(NEUTRAL);
  items = [height];
  memo = __closure.useMemo(() => items.map((item) => {
    if (null == height) {
      return 0;
    } else if (constants.ABOVE === item) {
      const num = -1 * tmp;
    } else if (tmp3.BELOW !== item) {
    }
  }), items);
  let fn = function y() {
    __closure = { transform: null };
    __closure = { translateY: null };
    const obj3 = spring;
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1_0 === state(height[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(height[6]).runOnJS(cleanUp)();
        const obj = state(height[6]);
      }
    };
    __closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__closure = __closure;
    fn.__workletHash = 10933954976568;
    fn.__initData = __initData;
    __closure.translateY = obj3.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), items, memo), springConfig, "respect-motion-settings", fn);
    items = [__closure];
    __closure.transform = items;
    return __closure;
  };
  __closure = { withSpring: tmp5(tmp3[8]).withSpring, interpolate: tmp5(tmp3[6]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: tmp5(tmp3[7]).TransitionStates, runOnJS: tmp5(tmp3[6]).runOnJS, cleanUp };
  fn.__closure = __closure;
  fn.__workletHash = 13513457118386;
  fn.__initData = __initData;
  const items1 = [sharedValue, context, state];
  const animatedStyle = state(height[6]).useAnimatedStyle(fn);
  const effect = __closure.useEffect(() => {
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
  __closure = { style: null, children: null };
  const items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  __closure.style = items2;
  obj1 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  __closure.children = closure_7(state(height[9]).Text, obj1);
  return closure_7(cleanUp(height[6]).View, __closure);
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
  c8 = undefined;
  let ref;
  const tmp = ref();
  const tmp2 = textVariant(textStyle.useState(), 2);
  const height = tmp2[0];
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
  let obj = { style: tmp.container, children: null };
  obj = { value: memo, children: null };
  const callback1 = textStyle.useCallback((arg0, count, state, cleanUp) => {
    const obj = { formatter: ref, springConfig: null, count: null, state: null, cleanUp: null, height: null, textColor: null, textVariant: null, textStyle: null };
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
    return React5(AnimatedCount, obj, arg0);
  }, items3);
  obj = { items: tmp5, renderItem: callback1, getItemKey };
  obj.children = closure_7(count(textColor[7]).TransitionGroup, obj);
  const items4 = [closure_7(redux.Provider, obj), ];
  const obj1 = { style: tmp.hidden, onLayout: callback, children: null };
  const tmp4 = textVariant(textStyle.useState(items), 2);
  obj1.children = closure_7(count(textColor[9]).Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
  items4[1] = closure_7(height, obj1);
  obj.children = items4;
  return c8(height, obj);
}
function BasicCounter(arg0) {
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  return React5(Text_Text.Text, { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) });
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ container: { flex: 0, flexGrow: 0, flexShrink: 0, justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden" }, hidden: { opacity: 0 } });
let __closure = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = __closure);
const redux = noop.createContext(undefined);
const __initData = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_14 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default noop.memo((textColor) => {
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
    let obj = { count, formatter: defaultFormatter, springConfig: textColor.springConfig, textColor: str, textVariant: str2, textStyle };
    let tmp3Result = tmp3(AnimatedCounterTransitionGroup, obj);
  } else {
    obj = { count, formatter: defaultFormatter, textColor: str, textVariant: str2, textStyle };
    tmp3Result = tmp3(BasicCounter, obj);
  }
  return tmp3Result;
});