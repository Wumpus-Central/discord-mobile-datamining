// discord_app/design/void/Ellipsis/native/Ellipsis.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../modules/a11y/AccessibilityStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
function AnimatedEllipsisDot(disableScale) {
  disableScale = disableScale.disableScale;
  const delay = disableScale.delay;
  const sequenceStartDelay = disableScale.sequenceStartDelay;
  const sequenceEndDelay = disableScale.sequenceEndDelay;
  let sharedValue;
  let sharedValue1;
  let tmp = callback();
  sharedValue = disableScale(sequenceStartDelay[6]).useSharedValue(0.4);
  let obj = disableScale(sequenceStartDelay[6]);
  sharedValue1 = disableScale(sequenceStartDelay[6]).useSharedValue(0.75);
  let items = [delay, sequenceStartDelay, sequenceEndDelay, disableScale, sharedValue, sharedValue1];
  const effect = sequenceEndDelay.useEffect(() => {
    function animateValue(sharedValue, value, value) {
      const obj = closure_1_0(closure_1_2[6]);
      const obj2 = closure_1_0(closure_1_2[6]);
      const obj3 = closure_1_0(closure_1_2[6]);
      const obj4 = closure_1_0(closure_1_2[7]);
      const withDelayResult = obj3.withDelay(closure_2, closure_1_0(closure_1_2[7]).withTiming(value, { duration: 0 }));
      const obj5 = closure_1_0(closure_1_2[6]);
      const obj6 = closure_1_0(closure_1_2[6]);
      const obj7 = closure_1_0(closure_1_2[7]);
      const withTimingResult = closure_1_0(closure_1_2[7]).withTiming(value, { duration: 350 });
      const obj8 = closure_1_0(closure_1_2[7]);
      const withDelayResult1 = obj5.withDelay(
        closure_1,
        obj6.withSequence(withTimingResult, closure_1_0(closure_1_2[7]).withTiming(value, { duration: 350 })),
      );
      const obj9 = closure_1_0(closure_1_2[6]);
      const result = sharedValue.set(
        obj.withRepeat(
          obj2.withSequence(
            withDelayResult,
            withDelayResult1,
            obj9.withDelay(closure_3, closure_1_0(closure_1_2[7]).withTiming(value, { duration: 0 })),
          ),
          -1,
        ),
      );
    }
    animateValue.__closure = {
      withRepeat: disableScale(sequenceStartDelay[6]).withRepeat,
      withSequence: disableScale(sequenceStartDelay[6]).withSequence,
      withDelay: disableScale(sequenceStartDelay[6]).withDelay,
      sequenceStartDelay,
      withTiming: disableScale(sequenceStartDelay[7]).withTiming,
      delay,
      animationTimeMs: 350,
      sequenceEndDelay,
    };
    animateValue.__workletHash = 13305770376274;
    animateValue.__initData = closure_1_10;
    animateValue(sharedValue, 0.4, 1);
    if (!disableScale) {
      animateValue(sharedValue1, 0.75, 1);
    }
    return () => {
      closure_1_0(closure_1_2[6]).cancelAnimation(closure_4);
      const obj = closure_1_0(closure_1_2[6]);
      closure_1_0(closure_1_2[6]).cancelAnimation(closure_5);
    };
  }, items);
  let obj2 = disableScale(sequenceStartDelay[6]);
  class S {
    constructor() {
      obj = { opacity: closure_4.get(), transform: null };
      tmp = undefined;
      if (!disableScale) {
        obj = { scale: null };
        tmp2 = closure_5;
        obj[0] = closure_5.get();
        items = [];
        items[0] = obj;
        tmp = items;
      }
      obj[1] = tmp;
      return obj;
    }
  }
  S.__closure = { opacityValue: sharedValue, disableScale, scaleValue: sharedValue1 };
  S.__workletHash = 5071157079925;
  S.__initData = closure_11;
  const animatedStyle = disableScale(sequenceStartDelay[6]).useAnimatedStyle(S);
  const style = [tmp.typingIndicatorDot, disableScale.dotStyle, animatedStyle];
  return jsx(delay(sequenceStartDelay[6]).View, { style });
}
function EllipsisDot(dotStyle) {
  const obj = { style: null };
  const items = [callback().typingIndicatorDot, { opacity: 0.4 }, dotStyle.dotStyle];
  obj[0] = items;
  return <View style={null} />;
}
let c3 = importAllResult;
let c7 = 233.33333333333334;
let c8 = 116.66666666666667;
let obj = {
  typingIndicator: { justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 4 },
  typingIndicatorDot: null,
};
obj = {
  backgroundColor: ThemesDefault.colors.TEXT_DEFAULT,
  borderRadius: ThemesDefault.radii.round,
  marginRight: 2,
  height: 6,
  width: 6,
};
obj[1] = obj;
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = {
  code: "function animateValue_EllipsisTsx1(value,fromValue,toValue){const{withRepeat,withSequence,withDelay,sequenceStartDelay,withTiming,delay,animationTimeMs,sequenceEndDelay}=this.__closure;value.set(withRepeat(withSequence(withDelay(sequenceStartDelay,withTiming(fromValue,{duration:0})),withDelay(delay,withSequence(withTiming(toValue,{duration:animationTimeMs}),withTiming(fromValue,{duration:animationTimeMs}))),withDelay(sequenceEndDelay,withTiming(fromValue,{duration:0}))),-1));}",
};
let closure_11 = {
  code: "function EllipsisTsx2(){const{opacityValue,disableScale,scaleValue}=this.__closure;return{opacity:opacityValue.get(),transform:disableScale?undefined:[{scale:scaleValue.get()}]};}",
};
const memoResult = importAllResult.memo(function Ellipsis(style) {
  ({ dotStyle: require, disableScale: importDefault } = style);
  dependencyMap = undefined;
  let obj = initialize;
  const items = [closure_5];
  dependencyMap = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)
    ? EllipsisDot
    : AnimatedEllipsisDot;
  obj = {
    style: items1,
    collapsable: false,
    children: items2.map((arg0, arg1, arg2) =>
      closure_1_6(
        closure_2,
        {
          delay: arg0 * closure_1_7,
          sequenceStartDelay: closure_1_8,
          sequenceEndDelay: closure_1_8 + closure_1_7 * (arg2.length - 1 - arg0),
          dotStyle: closure_0,
          disableScale: closure_1,
        },
        arg0,
      ),
    ),
  };
  items1 = [callback().typingIndicator, style.style];
  items2 = [0, 1, 2];
  return (
    <View style={items1} collapsable={false}>
      {items2.map((arg0, arg1, arg2) =>
        closure_1_6(
          closure_2,
          {
            delay: arg0 * closure_1_7,
            sequenceStartDelay: closure_1_8,
            sequenceEndDelay: closure_1_8 + closure_1_7 * (arg2.length - 1 - arg0),
            dotStyle: closure_0,
            disableScale: closure_1,
          },
          arg0,
        ),
      )}
    </View>
  );
});
let result = require("set").fileFinishedImporting("design/void/Ellipsis/native/Ellipsis.tsx");

export default memoResult;
