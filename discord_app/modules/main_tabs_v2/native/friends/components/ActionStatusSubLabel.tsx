// discord_app/modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4116";
import { AccessibilityAnnouncer } from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";

let c3;
let c4;
const require = arg1;
function announceActioned(intl) {
  const AccessibilityAnnouncer = AccessibilityAnnouncer.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
let closure_7 = require("module_4116").createAnimatedComponent(require("Text").Text);
let closure_8 = { code: "function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}" };
let closure_9 = { code: "function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}" };
let closure_10 = { code: "function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}" };
let closure_11 = { code: "function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}" };
let closure_12 = { code: "function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}" };
let result = require("createCacheKey").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ActionStatusSubLabel = function ActionStatusSubLabel(lineHeight) {
  let actionStatus;
  let actionStatusAccessibilityLabel;
  let animate;
  let label;
  let maxFontSizeMultiplier;
  let secondaryLabel;
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
  let c4;
  let fontScale;
  let tmp = null != secondaryLabel;
  c4 = tmp;
  ({ label, actionStatus } = lineHeight);
  let obj = num(actionStatusAccessibilityLabel[6]);
  fontScale = obj.useFontScale();
  const tmp3 = fontScale();
  let obj1 = num(actionStatusAccessibilityLabel[4]);
  class L {
    constructor() {
      tmp = c4;
      if (c4) {
        tmp2 = actioned;
        tmp = !actioned.get();
      }
      result = c0 * c5;
      result1 = result;
      if (tmp) {
        num = 2;
        result1 = 2 * result;
      }
      withTimingResult = result1;
      if (animate) {
        obj = actioned;
        withTimingResult = result1;
        if (actioned.get()) {
          tmp6 = c0;
          tmp7 = outer1_2;
          obj2 = c0(outer1_2[7]);
          obj3 = c0(outer1_2[4]);
          num2 = 0;
          if (obj.get()) {
            num2 = 1;
          }
          result2 = result;
          if (tmp) {
            num3 = 2;
            result2 = 2 * result;
          }
          items = [, ];
          items[0] = result2;
          items[1] = result;
          withTimingResult = obj2.withTiming(obj3.interpolate(num2, [0, 1], items));
        }
      }
      return { height: withTimingResult };
    }
  }
  obj = { hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  L.__closure = obj;
  L.__workletHash = 14210085997091;
  L.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(L);
  let obj3 = num(actionStatusAccessibilityLabel[4]);
  const fn = function y() {
    let num = 0;
    if (actioned.get()) {
      num = num * fontScale;
    }
    let withTimingResult = num;
    if (animate) {
      const obj2 = num(actionStatusAccessibilityLabel[7]);
      let num2 = 0;
      if (actioned.get()) {
        num2 = 1;
      }
      const items = [0, num];
      withTimingResult = obj2.withTiming(num(actionStatusAccessibilityLabel[4]).interpolate(num2, [0, 1], items));
      const obj3 = num(actionStatusAccessibilityLabel[4]);
    }
    const transform = [{ translateY: withTimingResult }];
    return { transform };
  };
  obj = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  fn.__closure = obj;
  fn.__workletHash = 1040596522101;
  fn.__initData = closure_9;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  class V {
    constructor() {
      obj = actioned;
      num = 0;
      if (!actioned.get()) {
        tmp = c0;
        tmp2 = c5;
        num = -c0 * c5;
      }
      withTimingResult = num;
      tmp3 = animate;
      if (animate) {
        tmp5 = c0;
        tmp6 = outer1_2;
        obj2 = c0(outer1_2[7]);
        tmp7 = c0;
        tmp8 = outer1_2;
        obj3 = c0(outer1_2[4]);
        num2 = 0;
        if (obj.get()) {
          num2 = 1;
        }
        items = [, ];
        items[0] = num;
        items[1] = 0;
        withTimingResult = obj2.withTiming(obj3.interpolate(num2, [0, 1], items));
      }
      obj = { transform: items1, opacity: null };
      items1 = [];
      items1[0] = { translateY: withTimingResult };
      if (tmp3) {
        tmp9 = c0;
        tmp10 = outer1_2;
        obj5 = c0(outer1_2[7]);
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
      obj[1] = num3;
      return obj;
    }
  }
  obj1 = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[7]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  V.__closure = obj1;
  V.__workletHash = 2183035188794;
  V.__initData = closure_10;
  const animatedStyle2 = num(actionStatusAccessibilityLabel[4]).useAnimatedStyle(V);
  const obj6 = num(actionStatusAccessibilityLabel[4]);
  class Y {
    constructor() {
      return actioned.get();
    }
  }
  Y.__closure = { actioned };
  Y.__workletHash = 9609826744629;
  Y.__initData = closure_11;
  const fn2 = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = false === arg1;
    }
    if (tmp) {
      tmp = null != actionStatusAccessibilityLabel;
    }
    if (tmp) {
      num(actionStatusAccessibilityLabel[4]).runOnJS(outer1_6)(actionStatusAccessibilityLabel);
      const obj = num(actionStatusAccessibilityLabel[4]);
    }
  };
  const obj8 = num(actionStatusAccessibilityLabel[4]);
  fn2.__closure = { actionStatusAccessibilityLabel, runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS, announceActioned };
  fn2.__workletHash = 14141240445417;
  fn2.__initData = closure_12;
  const animatedReaction = obj8.useAnimatedReaction(Y, fn2);
  obj3 = { style: items, children: null };
  items = [tmp3.container, animatedStyle];
  let items1 = [animate(closure_7, { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label }), , ];
  if (tmp) {
    const obj4 = { variant: null, maxFontSizeMultiplier: null, style: null, color: "text-default", lineClamp: 1, children: null };
    obj4[0] = str;
    obj4[1] = maxFontSizeMultiplier;
    obj4[2] = animatedStyle1;
    obj4[5] = secondaryLabel;
    tmp = tmp9(tmp10, obj4);
  }
  items1[1] = tmp;
  const items2 = [tmp3.actionStatus, animatedStyle2];
  items1[2] = animate(closure_7, { variant: str, maxFontSizeMultiplier, color: "text-default", style: items2, lineClamp: 1, children: actionStatus });
  obj3[1] = items1;
  return c4(actioned(actionStatusAccessibilityLabel[4]).View, obj3);
};