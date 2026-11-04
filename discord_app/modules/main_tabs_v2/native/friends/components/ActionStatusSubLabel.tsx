// === Module 18783: ActionStatusSubLabel ===

// Module 18783 (ActionStatusSubLabel)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import timing_timing from "timing/timing" /* 5378 */;
import useFontScale from "useFontScale" /* 5776 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
function announceActioned(intl) {
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5141);
let closure_5 = createStyles.createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
let closure_7 = module_1652.createAnimatedComponent(fn(5761).Text);
let closure_8 = { code: "(function ActionStatusSubLabelTsx1(){let[hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate]=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};})" };
let closure_9 = { code: "(function ActionStatusSubLabelTsx2(){let[actioned,lineHeight,fontScale,animate,withTiming,interpolate]=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};})" };
let closure_10 = { code: "(function ActionStatusSubLabelTsx3(){let[actioned,lineHeight,fontScale,animate,withTiming,interpolate]=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};})" };
let closure_11 = { code: "(function ActionStatusSubLabelTsx4(){let[actioned]=this.__closure;return actioned.get();})" };
let closure_12 = { code: "(function ActionStatusSubLabelTsx5(actioned,actionedPrev){let[actionStatusAccessibilityLabel,scheduleOnRN,announceActioned]=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}scheduleOnRN(announceActioned,actionStatusAccessibilityLabel);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ACTION_STATUS_SUB_LABEL_LINE_HEIGHT = 16;
export function ActionStatusSubLabel(lineHeight) {
  let num = lineHeight.lineHeight;
  if (num === undefined) {
    num = 16;
  }
  let str = lineHeight.textVariant;
  if (str === undefined) {
    str = "body-xs/medium";
  }
  ({ actioned, secondaryLabel, maxFontSizeMultiplier, animate } = lineHeight);
  let tmp = null != secondaryLabel;
  ({ label, actionStatus, actionStatusAccessibilityLabel } = lineHeight);
  const fontScale = useFontScale.useFontScale();
  const tmp5 = _undefined2();
  items = [closure_8, tmp, actioned, num, fontScale, animate, timing_timing.withTiming, _mod1652.interpolate];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class ActionStatusSubLabelTsx1 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp = !closure_1.get();
      }
      result = closure_2 * closure_3;
      result1 = result;
      if (tmp) {
        num = 2;
        result1 = 2 * result;
      }
      tmp6Result = result1;
      if (closure_4) {
        obj = closure_1;
        tmp6Result = result1;
        if (closure_1.get()) {
          tmp6 = closure_5;
          tmp7 = closure_6;
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
          tmp6Result = tmp6(tmp7(num2, [0, 1], items));
        }
      }
      return { height: tmp6Result };
    }
  }
  let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  ActionStatusSubLabelTsx1.__closure = items1;
  ActionStatusSubLabelTsx1.__workletHash = 12298524109370;
  ActionStatusSubLabelTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(ActionStatusSubLabelTsx1);
  const items2 = [closure_9, actioned, num, fontScale, animate, timing_timing.withTiming, _mod1652.interpolate];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
  class ActionStatusSubLabelTsx2 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num = closure_1 * closure_2;
      }
      tmp4Result = num;
      if (closure_3) {
        tmp4 = closure_4;
        tmp5 = closure_5;
        num2 = 0;
        if (obj.get()) {
          num2 = 1;
        }
        items = [0];
        items[1] = num;
        tmp4Result = tmp4(tmp5(num2, [0, 1], items));
      }
      obj1 = { transform: null };
      items1 = [];
      items1[0] = { translateY: tmp4Result };
      obj1.transform = items1;
      return obj1;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  ActionStatusSubLabelTsx2.__closure = items3;
  ActionStatusSubLabelTsx2.__workletHash = 15614830393132;
  ActionStatusSubLabelTsx2.__initData = tmp15;
  const animatedStyle1 = _mod1652.useAnimatedStyle(ActionStatusSubLabelTsx2);
  const tmp2Result = _mod1652;
  const items4 = [closure_10, actioned, num, fontScale, animate, timing_timing.withTiming, _mod1652.interpolate];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items4;
  class ActionStatusSubLabelTsx3 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (!closure_0.get()) {
        tmp = closure_1;
        tmp2 = closure_2;
        num = -closure_1 * closure_2;
      }
      tmp5Result = num;
      tmp3 = closure_3;
      if (closure_3) {
        tmp5 = closure_4;
        tmp6 = closure_5;
        num2 = 0;
        if (obj.get()) {
          num2 = 1;
        }
        items = [, ];
        items[0] = num;
        items[1] = 0;
        tmp5Result = tmp5(tmp6(num2, [0, 1], items));
      }
      obj1 = { transform: null, opacity: null };
      items1 = [];
      items1[0] = { translateY: tmp5Result };
      obj1.transform = items1;
      if (tmp3) {
        tmp7 = closure_4;
        num4 = 0;
        if (obj.get()) {
          num4 = 1;
        }
        num3 = tmp7(num4);
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
  const items5 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  ActionStatusSubLabelTsx3.__closure = items5;
  ActionStatusSubLabelTsx3.__workletHash = 16077800905475;
  ActionStatusSubLabelTsx3.__initData = tmp23;
  const animatedStyle2 = _mod1652.useAnimatedStyle(ActionStatusSubLabelTsx3);
  const tmp2Result3 = _mod1652;
  const items6 = [closure_11, actioned];
  c0 = undefined;
  [tmp31, tmp32] = items6;
  class ActionStatusSubLabelTsx4 {
    constructor() {
      return closure_0.get();
    }
  }
  const items7 = [tmp32];
  ActionStatusSubLabelTsx4.__closure = items7;
  ActionStatusSubLabelTsx4.__workletHash = 4722175005996;
  ActionStatusSubLabelTsx4.__initData = tmp31;
  const items8 = [closure_12, actionStatusAccessibilityLabel, _mod1705.scheduleOnRN, announceActioned];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items8;
  class ActionStatusSubLabelTsx5 {
    constructor(arg0, arg1) {
      tmp = lineHeight;
      if (lineHeight) {
        tmp2 = arg1;
        flag = false;
        tmp = false === arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = null;
        tmp = null != closure_0;
      }
      if (tmp) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        tmp7 = closure_0;
        tmp8 = closure_1(closure_2, closure_0);
      }
      return;
    }
  }
  const items9 = [tmp34, tmp35, tmp36];
  ActionStatusSubLabelTsx5.__closure = items9;
  ActionStatusSubLabelTsx5.__workletHash = 9075232784509;
  ActionStatusSubLabelTsx5.__initData = tmp33;
  const animatedReaction = _mod1652.useAnimatedReaction(ActionStatusSubLabelTsx4, ActionStatusSubLabelTsx5);
  const obj3 = { style: null, children: null };
  const items10 = [tmp5.container, animatedStyle];
  obj3.style = items10;
  const items11 = [React3(closure_7, { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label }), , ];
  if (tmp) {
    const obj4 = { variant: str, maxFontSizeMultiplier, style: animatedStyle1, color: "text-default", lineClamp: 1, children: secondaryLabel };
    tmp = React3(closure_7, obj4);
  }
  items11[1] = tmp;
  const obj5 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: null, lineClamp: 1, children: actionStatus };
  const items12 = [tmp5.actionStatus, animatedStyle2];
  obj5.style = items12;
  items11[2] = React3(closure_7, obj5);
  obj3.children = items11;
  return React4(module_1652.View, obj3);
}