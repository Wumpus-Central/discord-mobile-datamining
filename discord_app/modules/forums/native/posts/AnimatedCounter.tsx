// discord_app/modules/forums/native/posts/AnimatedCounter.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import AnimatedCounterUtils from "AnimatedCounterUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = tmp2(1652);
require = fn;
function AnimatedCount(state) {
  state = state.state;
  _require = state;
  const height = state.height;
  importDefault = height;
  c3 = undefined;
  ({ count, formatter, cleanUp, springConfig, textColor, textVariant, textStyle } = state);
  const context = noop.useContext(closure_12);
  dependencyMap = context;
  _modDef38(null != context, "[AnimatedCount] Context should not be nullish.");
  if (state === require("native").TransitionStates.MOUNTED) {
    let NEUTRAL = c10.NEUTRAL;
  } else {
    ({ current, previous } = context);
    if (current > previous) {
      NEUTRAL = c10.BELOW;
    } else if (current < previous) {
      NEUTRAL = c10.ABOVE;
    } else {
      NEUTRAL = c10.NEUTRAL;
    }
  }
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(NEUTRAL);
  items = [height];
  const memo = obj.useMemo(
    () =>
      items.map((item) => {
        if (null == _undefined) {
          return 0;
        } else if (constants.ABOVE === item) {
          const num = -1 * _undefined;
        } else if (constants.BELOW !== item) {
        }
      }),
    items,
  );
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  let items1 = [
    closure_14,
    require("spring/spring").withSpring,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    sharedValue,
    items,
    memo,
    springConfig,
    closure_13,
    state,
    require("native").TransitionStates,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    cleanUp,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  absoluteFill = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items1;
  class AnimatedCounterTsx2 {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_1(closure_2.get(), closure_3, closure_4);
      tmp3 = closure_5;
      items = [, , , ,];
      items[0] = closure_6;
      items[1] = closure_7;
      items[2] = closure_8;
      items[3] = closure_9;
      items[4] = closure_10;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj = { transform: null };
      obj1 = { translateY: null };
      class AnimatedCounterTsx1 {
        constructor(arg0) {
          tmp = state;
          if (state) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , ,];
      items1[0] = tmp5;
      items1[1] = tmp6;
      items1[2] = tmp7;
      items1[3] = tmp8;
      AnimatedCounterTsx1.__closure = items1;
      AnimatedCounterTsx1.__workletHash = 10398437053283;
      AnimatedCounterTsx1.__initData = tmp4;
      obj1.translateY = tmp(tmp2, tmp3, "respect-motion-settings", AnimatedCounterTsx1);
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  AnimatedCounterTsx2.__closure = items2;
  AnimatedCounterTsx2.__workletHash = 10296245481336;
  AnimatedCounterTsx2.__initData = tmp12;
  const items3 = [sharedValue, context, state];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(AnimatedCounterTsx2);
  const effect = obj.useEffect(() => {
    if (c0 === native.TransitionStates.YEETED) {
      ({ current, previous } = c2);
      if (current > previous) {
        let NEUTRAL = obj.BELOW;
      } else if (current < previous) {
        NEUTRAL = obj.ABOVE;
      } else {
        NEUTRAL = obj.NEUTRAL;
      }
      const result = -1 * NEUTRAL;
    } else {
      const result1 = _undefined3.set(obj.NEUTRAL);
    }
  }, items3);
  const obj3 = { style: null, children: null };
  const items4 = [absoluteFill.absoluteFill, animatedStyle, { height }];
  obj3.style = items4;
  const tmp5Result = require("../../../../../_runtime/metro/01652__.js");
  obj3.children = c7(require("Text/Text").Text, {
    variant: textVariant,
    color: textColor,
    style: textStyle,
    children: formatter(count),
  });
  return c7(_modDef1652.View, obj3);
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
  obj = { style: tmp.container, children: null };
  const obj2 = { value: memo, children: null };
  const callback1 = textStyle.useCallback((arg0, count, state, cleanUp) => {
    obj = {
      formatter: ref,
      springConfig: null,
      count: null,
      state: null,
      cleanUp: null,
      height: null,
      textColor: null,
      textVariant: null,
      textStyle: null,
    };
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
  obj2.children = closure_7(count(textColor[7]).TransitionGroup, { items: tmp5, renderItem: callback1, getItemKey });
  const items4 = [closure_7(redux.Provider, obj2)];
  const obj4 = { style: tmp.hidden, onLayout: callback, children: null };
  const obj3 = { items: tmp5, renderItem: callback1, getItemKey };
  const tmp4 = textVariant(textStyle.useState(items), 2);
  obj4.children = closure_7(count(textColor[10]).Text, {
    variant: textVariant,
    color: textColor,
    style: textStyle,
    children: formatter(count),
  });
  items4[1] = closure_7(height, obj4);
  obj.children = items4;
  return c8(height, obj);
}
function BasicCounter(arg0) {
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  return React5(Text_Text.Text, {
    variant: textVariant,
    color: textColor,
    style: textStyle,
    children: formatter(count),
  });
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5141);
let closure_9 = createStyles.createStyles({
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
const redux = noop.createContext(undefined);
let closure_13 = {
  code: "(function AnimatedCounterTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})",
};
let closure_14 = {
  code: "(function AnimatedCounterTsx2(){let[withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,_worklet_10398437053283_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function AnimatedCounterTsx1Factory([_worklet_10398437053283_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const AnimatedCounterTsx1=function(finished){if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};AnimatedCounterTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];AnimatedCounterTsx1.__workletHash=10398437053283;AnimatedCounterTsx1.__initData=_worklet_10398437053283_init_data;return AnimatedCounterTsx1;}([_worklet_10398437053283_init_data,state,TransitionStates,scheduleOnRN,cleanUp]))}]};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default noop.memo(function AnimatedCounter(textColor) {
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
    const obj2 = {
      count,
      formatter: defaultFormatter,
      springConfig: textColor.springConfig,
      textColor: str,
      textVariant: str2,
      textStyle,
    };
    let tmp3Result = React5(AnimatedCounterTransitionGroup, obj2);
  } else {
    obj = { count, formatter: defaultFormatter, textColor: str, textVariant: str2, textStyle };
    tmp3Result = React5(BasicCounter, obj);
  }
  return tmp3Result;
});
