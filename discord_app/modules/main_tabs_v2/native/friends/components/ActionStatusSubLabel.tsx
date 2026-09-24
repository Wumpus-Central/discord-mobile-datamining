// discord_app/modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport2 from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function announceActioned(intl) {
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles(() => ({
  container: { overflow: "hidden" },
  actionStatus: { position: "absolute" },
}));
let closure_7 = ReanimatedRexport.createAnimatedComponent(fn(4825).Text);
const __initData = {
  code: "function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}",
};
const __initData2 = {
  code: "function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}",
};
const __initData3 = {
  code: "function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}",
};
const __initData4 = {
  code: "function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}",
};
const __initData5 = {
  code: "function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ACTION_STATUS_SUB_LABEL_LINE_HEIGHT = 16;
export const ActionStatusSubLabel = function ActionStatusSubLabel(lineHeight) {
  let num = lineHeight.lineHeight;
  if (num === undefined) {
    num = 16;
  }
  let str = lineHeight.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const actioned = lineHeight.actioned;
  ({ secondaryLabel, actionStatusAccessibilityLabel } = lineHeight);
  ({ maxFontSizeMultiplier, animate } = lineHeight);
  let tmp = null != secondaryLabel;
  closure_4 = tmp;
  ({ label, actionStatus } = lineHeight);
  const fontScale = num(actionStatusAccessibilityLabel[6]).useFontScale();
  const tmp3 = fontScale();
  let obj = num(actionStatusAccessibilityLabel[6]);
  const fn = function x() {
    let tmp = closure_4;
    if (closure_4) {
      tmp = !actioned.get();
    }
    const result = num * fontScale;
    let result1 = result;
    if (tmp) {
      result1 = 2 * result;
    }
    let height = result1;
    if (animate) {
      height = result1;
      if (actioned.get()) {
        const obj2 = timing;
        let num2 = 0;
        if (actioned.get()) {
          num2 = 1;
        }
        let result2 = result;
        if (tmp) {
          result2 = 2 * result;
        }
        const items = [result2, result];
        height = obj2.withTiming(ReanimatedRexport2.interpolate(num2, [0, 1], items));
      }
    }
    return { height };
  };
  let obj2 = num(actionStatusAccessibilityLabel[4]);
  fn.__closure = {
    hasSecondLine: tmp,
    actioned,
    lineHeight: num,
    fontScale,
    animate,
    withTiming: num(actionStatusAccessibilityLabel[7]).withTiming,
    interpolate: num(actionStatusAccessibilityLabel[4]).interpolate,
  };
  fn.__workletHash = 14210085997091;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = {
    hasSecondLine: tmp,
    actioned,
    lineHeight: num,
    fontScale,
    animate,
    withTiming: num(actionStatusAccessibilityLabel[7]).withTiming,
    interpolate: num(actionStatusAccessibilityLabel[4]).interpolate,
  };
  const fn2 = function y() {
    num = 0;
    if (actioned.get()) {
      num = num * fontScale;
    }
    let withTimingResult = num;
    if (animate) {
      const obj2 = timing;
      let num2 = 0;
      if (actioned.get()) {
        num2 = 1;
      }
      const items = [0, num];
      withTimingResult = obj2.withTiming(ReanimatedRexport2.interpolate(num2, [0, 1], items));
    }
    const obj4 = { transform: null };
    const items1 = [{ translateY: withTimingResult }];
    obj4.transform = items1;
    return obj4;
  };
  let obj4 = num(actionStatusAccessibilityLabel[4]);
  fn2.__closure = {
    actioned,
    lineHeight: num,
    fontScale,
    animate,
    withTiming: num(actionStatusAccessibilityLabel[7]).withTiming,
    interpolate: num(actionStatusAccessibilityLabel[4]).interpolate,
  };
  fn2.__workletHash = 1040596522101;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  let obj5 = {
    actioned,
    lineHeight: num,
    fontScale,
    animate,
    withTiming: num(actionStatusAccessibilityLabel[7]).withTiming,
    interpolate: num(actionStatusAccessibilityLabel[4]).interpolate,
  };
  class V {
    constructor() {
      obj = actioned;
      num = 0;
      if (!actioned.get()) {
        tmp = c0;
        tmp2 = closure_5;
        num = -c0 * closure_5;
      }
      withTimingResult = num;
      tmp3 = animate;
      if (animate) {
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj2 = closure_0(closure_2[7]);
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj3 = closure_0(closure_2[4]);
        num2 = 0;
        if (obj.get()) {
          num2 = 1;
        }
        items = [,];
        items[0] = num;
        items[1] = 0;
        withTimingResult = obj2.withTiming(obj3.interpolate(num2, [0, 1], items));
      }
      obj1 = { transform: null, opacity: null };
      items1 = [];
      items1[0] = { translateY: withTimingResult };
      obj1.transform = items1;
      if (tmp3) {
        tmp9 = closure_0;
        tmp10 = closure_2;
        obj5 = closure_0(closure_2[7]);
        num4 = 0;
        if (obj.get()) {
          num4 = 1;
        }
        num3 = obj5.withTiming(num4);
      } else {
        num3 = 0;
        if (obj.get()) {
          num3 = 1;
        }
      }
      obj1.opacity = num3;
      return obj1;
    }
  }
  const obj6 = num(actionStatusAccessibilityLabel[4]);
  V.__closure = {
    actioned,
    lineHeight: num,
    fontScale,
    animate,
    withTiming: num(actionStatusAccessibilityLabel[7]).withTiming,
    interpolate: num(actionStatusAccessibilityLabel[4]).interpolate,
  };
  V.__workletHash = 2183035188794;
  V.__initData = __initData3;
  const animatedStyle2 = obj6.useAnimatedStyle(V);
  const obj7 = {
    actioned,
    lineHeight: num,
    fontScale,
    animate,
    withTiming: num(actionStatusAccessibilityLabel[7]).withTiming,
    interpolate: num(actionStatusAccessibilityLabel[4]).interpolate,
  };
  class Y {
    constructor() {
      return actioned.get();
    }
  }
  Y.__closure = { actioned };
  Y.__workletHash = 9609826744629;
  Y.__initData = __initData4;
  const fn3 = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = false === arg1;
    }
    if (tmp) {
      tmp = null != actionStatusAccessibilityLabel;
    }
    if (tmp) {
      ReanimatedRexport2.runOnJS(announceActioned)(actionStatusAccessibilityLabel);
    }
  };
  const obj8 = num(actionStatusAccessibilityLabel[4]);
  fn3.__closure = {
    actionStatusAccessibilityLabel,
    runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS,
    announceActioned,
  };
  fn3.__workletHash = 14141240445417;
  fn3.__initData = __initData5;
  const animatedReaction = obj8.useAnimatedReaction(Y, fn3);
  const obj10 = { style: null, children: null };
  let items = [tmp3.container, animatedStyle];
  obj10.style = items;
  let items1 = [
    animate(closure_7, {
      variant: str,
      maxFontSizeMultiplier,
      color: "text-default",
      style: animatedStyle1,
      lineClamp: 1,
      children: label,
    }),
    ,
  ];
  if (tmp) {
    const obj11 = {
      variant: str,
      maxFontSizeMultiplier,
      style: animatedStyle1,
      color: "text-default",
      lineClamp: 1,
      children: secondaryLabel,
    };
    tmp = animate(closure_7, obj11);
  }
  items1[1] = tmp;
  const obj12 = {
    variant: str,
    maxFontSizeMultiplier,
    color: "text-default",
    style: null,
    lineClamp: 1,
    children: actionStatus,
  };
  const items2 = [tmp3.actionStatus, animatedStyle2];
  obj12.style = items2;
  items1[2] = animate(closure_7, obj12);
  obj10.children = items1;
  return closure_4(actioned(actionStatusAccessibilityLabel[4]).View, obj10);
};
