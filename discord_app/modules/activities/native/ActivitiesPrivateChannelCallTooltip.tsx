// === Module 12477: ActivitiesPrivateChannelCallTooltip ===

// Module 12477 (ActivitiesPrivateChannelCallTooltip)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const helpdeskUrl = fn(2011).EMBEDDED_ACTIVITIES_BLOG_POST_URL;
const jsx = fn(21).jsx;
let c7 = 40;
const TIMING_CONFIG = { duration: 500 };
const createStyles = fn(4896);
let obj2 = { arrow: null, tooltip: { padding: 16 }, tooltipContainer: { position: "absolute", width: 280, zIndex: 2, right: -48, top: -8 }, tooltipText: { textAlign: "center", fontSize: 14 }, closeButtonWrapper: { marginTop: 14 } };
let obj3 = { marginLeft: 200, top: 9, position: "relative", borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 16, borderLeftWidth: 16, transform: null };
let items = [{ rotateZ: "225deg" }];
obj3.transform = items;
obj2.arrow = obj3;
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function ActivitiesPrivateChannelCallTooltipTsx1(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const __initData2 = { code: "function ActivitiesPrivateChannelCallTooltipTsx2(){const{withRepeat,withSequence,withTiming,OFFSET,translateBounceOffset,TIMING_CONFIG}=this.__closure;return{transform:[{translateY:withRepeat(withSequence(withTiming(OFFSET,{duration:0}),withTiming(OFFSET+translateBounceOffset,TIMING_CONFIG),withTiming(OFFSET,TIMING_CONFIG)),10)}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesPrivateChannelCallTooltip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onClosePress) => {
  const cResult = num3(576).c(23);
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
  let obj = num3(576);
  num3 = 4;
  if (tmpResult.useStateFromStores(tmp5, tmp6)) {
    num3 = 0;
  }
  tmpResult = num3(504);
  class F {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[9]);
      obj4 = closure_0(closure_2[9]);
      obj5 = closure_0(closure_2[10]);
      withTimingResult = obj5.withTiming(c7, { duration: 0 });
      obj6 = closure_0(closure_2[10]);
      withTimingResult1 = obj6.withTiming(c7 + c0, closure_8);
      obj7 = closure_0(closure_2[10]);
      obj1.translateY = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(c7, closure_8)), 10);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmpResult2 = num3(4618);
  F.__closure = { withRepeat: num3(4618).withRepeat, withSequence: num3(4618).withSequence, withTiming: num3(4897).withTiming, OFFSET, translateBounceOffset: num3, TIMING_CONFIG };
  F.__workletHash = 4621705591670;
  F.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(F);
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp4.tooltipContainer) {
      let tmp9 = cResult[4];
    }
    ({ tooltip, tooltipText } = tmp4);
    if (cResult[5] !== tmp4.arrow) {
      const items1 = [tmp4.arrow];
      cResult[5] = tmp4.arrow;
      cResult[6] = items1;
      let tmp10 = items1;
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
      let tmp12 = stringResult;
      let tmp11 = formatResult;
    } else {
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t["NX+WJN"]);
      cResult[9] = stringResult1;
      let tmp16 = stringResult1;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== onClosePress) {
      let obj4 = { text: tmp16, onPress: onClosePress, variant: "secondary", size: "sm", grow: true };
      const tmp20 = jsx(tmp(5601).Button, { text: tmp16, onPress: onClosePress, variant: "secondary", size: "sm", grow: true });
      cResult[10] = onClosePress;
      cResult[11] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp4.closeButtonWrapper) {
      if (cResult[13] === tmp18) {
        let tmp21 = cResult[14];
      }
      if (cResult[15] === tmp4.tooltip) {
        if (cResult[16] === tmp4.tooltipText) {
          if (cResult[17] === tmp21) {
            if (cResult[20] === tmp25) {
              if (cResult[21] === tmp9) {
                let tmp28 = cResult[22];
              }
              return tmp28;
            }
            let obj5 = { style: tmp9, children: tmp25 };
            const tmp31 = jsx(ReanimatedRexportDefault.View, { style: tmp9, children: tmp25 });
            cResult[20] = tmp25;
            cResult[21] = tmp9;
            cResult[22] = tmp31;
            tmp28 = tmp31;
          }
        }
      }
      let obj6 = { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: tmp10, label: tmp11, title: tmp12, children: tmp21 };
      cResult[15] = tmp4.tooltip;
      cResult[16] = tmp4.tooltipText;
      cResult[17] = tmp21;
      cResult[18] = tmp10;
      cResult[19] = jsx(tmp(1188).Tooltip, { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: tmp10, label: tmp11, title: tmp12, children: tmp21 });
      class F {
        constructor() {
          obj = { transform: null };
          obj1 = { translateY: null };
          obj3 = closure_0(closure_2[9]);
          obj4 = closure_0(closure_2[9]);
          obj5 = closure_0(closure_2[10]);
          withTimingResult = obj5.withTiming(c7, { duration: 0 });
          obj6 = closure_0(closure_2[10]);
          withTimingResult1 = obj6.withTiming(c7 + c0, closure_8);
          obj7 = closure_0(closure_2[10]);
          obj1.translateY = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(c7, closure_8)), 10);
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      const tmp27 = jsx(tmp(1188).Tooltip, { containerStyle: tooltip, labelStyle: tooltipText, arrowStyle: tmp10, label: tmp11, title: tmp12, children: tmp21 });
    }
    const obj7 = { style: tmp4.closeButtonWrapper, children: tmp18 };
    const tmp24 = <View style={tmp4.closeButtonWrapper}>{tmp18}</View>;
    cResult[12] = tmp4.closeButtonWrapper;
    class F {
      constructor() {
        obj = { transform: null };
        obj1 = { translateY: null };
        obj3 = closure_0(closure_2[9]);
        obj4 = closure_0(closure_2[9]);
        obj5 = closure_0(closure_2[10]);
        withTimingResult = obj5.withTiming(c7, { duration: 0 });
        obj6 = closure_0(closure_2[10]);
        withTimingResult1 = obj6.withTiming(c7 + c0, closure_8);
        obj7 = closure_0(closure_2[10]);
        obj1.translateY = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(c7, closure_8)), 10);
        items = [];
        items[0] = obj1;
        obj.transform = items;
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
  let obj2 = { withRepeat: num3(4618).withRepeat, withSequence: num3(4618).withSequence, withTiming: num3(4897).withTiming, OFFSET, translateBounceOffset: num3, TIMING_CONFIG };
}) : ((onClosePress) => {
  const tmp = closure_9();
  let items = [AccessibilityStore];
  let num = 4;
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    num = 0;
  }
  obj = num(504);
  class T {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      obj3 = closure_0(closure_2[9]);
      obj4 = closure_0(closure_2[9]);
      obj5 = closure_0(closure_2[10]);
      withTimingResult = obj5.withTiming(c7, { duration: 0 });
      obj6 = closure_0(closure_2[10]);
      withTimingResult1 = obj6.withTiming(c7 + c0, closure_8);
      obj7 = closure_0(closure_2[10]);
      obj1.translateY = obj3.withRepeat(obj4.withSequence(withTimingResult, withTimingResult1, obj7.withTiming(c7, closure_8)), 10);
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const tmp2Result = num(4618);
  T.__closure = { withRepeat: num(4618).withRepeat, withSequence: num(4618).withSequence, withTiming: num(4897).withTiming, OFFSET, translateBounceOffset: num, TIMING_CONFIG };
  T.__workletHash = 10615395921877;
  T.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(T);
  let obj3 = { style: null, children: null };
  const items1 = [tmp.tooltipContainer, animatedStyle];
  obj3.style = items1;
  let obj4 = { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: null, label: null, title: null, children: null };
  const items2 = [tmp.arrow];
  obj4.arrowStyle = items2;
  const intl = tmp2(1126).intl;
  obj4.label = intl.format(num(1126).t.xAW71b, { helpdeskUrl });
  const intl2 = tmp2(1126).intl;
  obj4.title = intl2.string(num(1126).t.HOPqzR);
  let obj6 = { style: tmp.closeButtonWrapper, children: null };
  const obj7 = { text: null, onPress: null, variant: "secondary", size: "sm", grow: true };
  const intl3 = tmp2(1126).intl;
  obj7.text = intl3.string(num(1126).t["NX+WJN"]);
  obj7.onPress = onClosePress.onClosePress;
  obj6.children = jsx(num(5601).Button, { text: null, onPress: null, variant: "secondary", size: "sm", grow: true });
  obj4.children = <View style={tmp.closeButtonWrapper}>{null}</View>;
  obj3.children = jsx(num(1188).Tooltip, { containerStyle: tmp.tooltip, labelStyle: tmp.tooltipText, arrowStyle: null, label: null, title: null, children: null });
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
});