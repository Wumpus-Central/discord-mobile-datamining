// === Module 12462: ActivitiesPrivateChannelCallTooltip ===

// Module 12462 (ActivitiesPrivateChannelCallTooltip)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 2011 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let onClosePress;

let items;
let obj2;
let View = react_native.View;
const helpdeskUrl = Constants.EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = Fragment.jsx;
let c7 = 40;
const TIMING_CONFIG = { duration: 500 };
let obj = { arrow: obj2, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } };
obj2 = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: items };
items = [{ rotateZ: "225deg" }];
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const __initData2 = { code: "function ActivitiesPrivateChannelCallTooltipTsx2(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClosePress) => {
  let num3;
  let tmp5;
  let tmp6;
  let tooltip;
  let tooltipText;
  let useReducedMotion;
  const tmp = num3;
  let obj = num3(576);
  const cResult = obj.c(23);
  onClosePress = onClosePress.onClosePress;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function p() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  num3 = 4;
  const tmpResult = tmp(504);
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    num3 = 0;
  }
  const tmpResult2 = tmp(4612);
  class F {
    constructor() {
      let items;
      let obj5;
      let withRepeat;
      let withSequence;
      let withTimingResult;
      let withTimingResult1;
      const obj = { transform: items };
      const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj3 = timing;
      withTimingResult = obj3.withTiming(c7, { duration: 0 });
      const obj4 = timing;
      withTimingResult1 = obj4.withTiming(c7 + num3, TIMING_CONFIG);
      items = [obj2];
      obj5 = timing;
      return obj;
    }
  }
  let obj2 = { withRepeat: tmp(4612).withRepeat, withSequence: tmp(4612).withSequence, withTiming: tmp(4891).withTiming, OFFSET, translateBounceOffset: num3, TIMING_CONFIG };
  F.__closure = obj2;
  F.__workletHash = 4621705591670;
  F.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(F);
  if (cResult[2] === animatedStyle) {
    let tmp9;
    let tmp10;
    let tmp12;
    let tmp11;
    let tmp16;
    let tmp18;
    if (cResult[3] === tmp4.tooltipContainer) {
      tmp9 = cResult[4];
    }
    ({ tooltip, tooltipText } = tmp4);
    if (cResult[5] !== tmp4.arrow) {
      const items1 = [tmp4.arrow];
      cResult[5] = tmp4.arrow;
      cResult[6] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      let obj3 = { helpdeskUrl };
      const formatResult = intl.format(tmp(1126).t.xAW71b, obj3);
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t.HOPqzR);
      cResult[7] = formatResult;
      cResult[8] = stringResult;
      tmp12 = stringResult;
      tmp11 = formatResult;
    } else {
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    const _Symbol2 = Symbol;
    const closeButtonWrapper = tmp4.closeButtonWrapper;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t["NX+WJN"]);
      cResult[9] = stringResult1;
      tmp16 = stringResult1;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== onClosePress) {
      const tmp20 = jsx(tmp(5594).Button, { text: tmp16, onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
      cResult[10] = onClosePress;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp4.closeButtonWrapper) {
      let tmp21;
      if (cResult[13] === tmp18) {
        tmp21 = cResult[14];
      }
      if (cResult[15] === tmp4.tooltip) {
        if (cResult[16] === tmp4.tooltipText) {
          if (cResult[17] === tmp21) {
            if (cResult[20] === tmp25) {
              let tmp28;
              if (cResult[21] === tmp9) {
                tmp28 = cResult[22];
              }
              return tmp28;
            }
            const tmp31 = jsx(ReanimatedRexportDefault.View, { style: tmp9, children: tmp25 });
            cResult[20] = tmp25;
            cResult[21] = tmp9;
            cResult[22] = tmp31;
            tmp28 = tmp31;
          }
        }
      }
      cResult[15] = tmp4.tooltip;
      cResult[16] = tmp4.tooltipText;
      cResult[17] = tmp21;
      cResult[18] = tmp10;
      cResult[19] = jsx(tmp(1188).Tooltip, { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: tmp10, label: tmp11, title: tmp12, children: tmp21 });
      jsx(tmp(1188).Tooltip, { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: tmp10, label: tmp11, title: tmp12, children: tmp21 });
      class F {
        constructor() {
          let items;
          let obj5;
          let withRepeat;
          let withSequence;
          let withTimingResult;
          let withTimingResult1;
          const obj = { transform: items };
          const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
          withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          withSequence = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const obj3 = timing;
          withTimingResult = obj3.withTiming(c7, { duration: 0 });
          const obj4 = timing;
          withTimingResult1 = obj4.withTiming(c7 + num3, TIMING_CONFIG);
          items = [obj2];
          obj5 = timing;
          return obj;
        }
      }
    }
    const tmp24 = <View style={closeButtonWrapper}>{tmp18}</View>;
    cResult[12] = tmp4.closeButtonWrapper;
    class F {
      constructor() {
        let items;
        let obj5;
        let withRepeat;
        let withSequence;
        let withTimingResult;
        let withTimingResult1;
        const obj = { transform: items };
        const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
        withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj3 = timing;
        withTimingResult = obj3.withTiming(c7, { duration: 0 });
        const obj4 = timing;
        withTimingResult1 = obj4.withTiming(c7 + num3, TIMING_CONFIG);
        items = [obj2];
        obj5 = timing;
        return obj;
      }
    }
    cResult[13] = tmp18;
    cResult[14] = tmp24;
    tmp21 = tmp24;
  }
  const items2 = [tmp4.tooltipContainer, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp4.tooltipContainer;
  cResult[4] = items2;
  tmp9 = items2;
}) : ((onClosePress) => {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let obj5;
  let useReducedMotion;
  let num;
  onClosePress = onClosePress.onClosePress;
  const tmp = closure_9();
  const tmp2 = num;
  let obj = num(504);
  let items = [AccessibilityStore];
  num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  const tmp2Result = tmp2(4612);
  class T {
    constructor() {
      let items;
      let obj5;
      let withRepeat;
      let withSequence;
      let withTimingResult;
      let withTimingResult1;
      const obj = { transform: items };
      const obj2 = { translateY: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(c7, TIMING_CONFIG)), 10) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj3 = timing;
      withTimingResult = obj3.withTiming(c7, { duration: 0 });
      const obj4 = timing;
      withTimingResult1 = obj4.withTiming(c7 + num, TIMING_CONFIG);
      items = [obj2];
      obj5 = timing;
      return obj;
    }
  }
  let obj2 = { withRepeat: tmp2(4612).withRepeat, withSequence: tmp2(4612).withSequence, withTiming: tmp2(4891).withTiming, OFFSET, translateBounceOffset: num, TIMING_CONFIG };
  T.__closure = obj2;
  T.__workletHash = 10615395921877;
  T.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(T);
  const items1 = [tmp.tooltipContainer, animatedStyle];
  View = ReanimatedRexportDefault.View;
  let obj4 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: items2, label: intl.format(tmp2(1126).t.xAW71b, obj5), title: intl2.string(tmp2(1126).t.HOPqzR), children: null };
  items2 = [tmp.arrow];
  const Tooltip = tmp2(1188).Tooltip;
  intl = tmp2(1126).intl;
  obj5 = { helpdeskUrl };
  intl2 = tmp2(1126).intl;
  ({ text: intl3.string(tmp2(1126).t["NX+WJN"]), onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
  const Button = tmp2(5594).Button;
  intl3 = tmp2(1126).intl;
  return <View style={items1}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default tmp3;