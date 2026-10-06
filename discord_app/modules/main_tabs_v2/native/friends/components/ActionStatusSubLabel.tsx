// === Module 16422: ActionStatusSubLabel ===

// Module 16422 (ActionStatusSubLabel)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import timing from "timing" /* 4897 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let c3;
let closure_4;
function announceActioned(intl) {
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(intl);
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => ({ container: { overflow: "hidden" }, actionStatus: { position: "absolute" } }));
let closure_7 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
const __initData = { code: "function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}" };
const __initData2 = { code: "function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}" };
const __initData3 = { code: "function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue_0=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue_0:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue_0,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}" };
const __initData4 = { code: "function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}" };
const __initData5 = { code: "function ActionStatusSubLabelTsx5(actioned_0,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned_0&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}" };
const __initData6 = { code: "function ActionStatusSubLabelTsx6(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}" };
const __initData7 = { code: "function ActionStatusSubLabelTsx7(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}" };
const __initData8 = { code: "function ActionStatusSubLabelTsx8(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue_0=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue_0:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue_0,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}" };
const __initData9 = { code: "function ActionStatusSubLabelTsx9(){const{actioned}=this.__closure;return actioned.get();}" };
const __initData10 = { code: "function ActionStatusSubLabelTsx10(actioned_0,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned_0&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actionStatus;
  let actionStatusAccessibilityLabel;
  let actioned;
  let animate;
  let items;
  let label;
  let lineHeight;
  let maxFontSizeMultiplier;
  let secondaryLabel;
  let textVariant;
  let obj = actioned(animate[7]);
  const cResult = obj.c(27);
  ({ lineHeight, textVariant, actioned } = arg0);
  ({ label, secondaryLabel, actionStatus, actionStatusAccessibilityLabel } = arg0);
  ({ maxFontSizeMultiplier, animate } = arg0);
  let num = 16;
  if (undefined !== lineHeight) {
    num = lineHeight;
  }
  let str = "text-xs/medium";
  if (undefined !== textVariant) {
    str = textVariant;
  }
  let closure_4 = tmp4;
  const tmpResult = actioned(animate[8]);
  const fontScale = tmpResult.useFontScale();
  const tmp6 = fontScale();
  const fn = function f() {
    const tmp = closure_4 && !actioned.get();
    const result = num * fontScale;
    let result1 = result;
    if (tmp) {
      result1 = 2 * result;
    }
    let height = result1;
    if (animate) {
      height = result1;
      if (actioned.get()) {
        const withTiming = timing.withTiming;
        timing;
        const interpolate = ReanimatedRexport2.interpolate;
        let num2 = 0;
        ReanimatedRexport2;
        if (actioned.get()) {
          num2 = 1;
        }
        let result2 = result;
        if (tmp) {
          result2 = 2 * result;
        }
        const items = [result2, result];
        height = withTiming(interpolate(num2, [0, 1], items));
      }
    }
    return { height };
  };
  const tmpResult5 = actioned(animate[4]);
  let obj2 = { hasSecondLine: tmp4, actioned, lineHeight: num, fontScale, animate, withTiming: actioned(animate[9]).withTiming, interpolate: actioned(animate[4]).interpolate };
  fn.__closure = obj2;
  fn.__workletHash = 14210085997091;
  fn.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(fn);
  const fn2 = function b() {
    let items1;
    num = 0;
    if (actioned.get()) {
      num = num * fontScale;
    }
    let withTimingResult = num;
    if (animate) {
      const withTiming = timing.withTiming;
      timing;
      const interpolate = ReanimatedRexport2.interpolate;
      let num2 = 0;
      ReanimatedRexport2;
      if (actioned.get()) {
        num2 = 1;
      }
      const items = [0, num];
      withTimingResult = withTiming(interpolate(num2, [0, 1], items));
    }
    const obj2 = { transform: items1 };
    items1 = [{ translateY: withTimingResult }];
    return obj2;
  };
  const tmpResult6 = actioned(animate[4]);
  fn2.__closure = { actioned, lineHeight: num, fontScale, animate, withTiming: actioned(animate[9]).withTiming, interpolate: actioned(animate[4]).interpolate };
  fn2.__workletHash = 1040596522101;
  fn2.__initData = __initData2;
  ({ actioned, lineHeight: num, fontScale, animate, withTiming: actioned(animate[9]).withTiming, interpolate: actioned(animate[4]).interpolate });
  const animatedStyle1 = tmpResult6.useAnimatedStyle(fn2);
  const fn3 = function p() {
    let items1;
    let num3;
    num = 0;
    if (!actioned.get()) {
      num = -num * fontScale;
    }
    let withTimingResult = num;
    if (animate) {
      const withTiming = timing.withTiming;
      timing;
      const interpolate = ReanimatedRexport2.interpolate;
      let num2 = 0;
      ReanimatedRexport2;
      if (actioned.get()) {
        num2 = 1;
      }
      const items = [num, 0];
      withTimingResult = withTiming(interpolate(num2, [0, 1], items));
    }
    const obj2 = { transform: items1, opacity: num3 };
    items1 = [{ translateY: withTimingResult }];
    if (animate) {
      const withTiming2 = timing.withTiming;
      let num4 = 0;
      timing;
      if (actioned.get()) {
        num4 = 1;
      }
      num3 = withTiming2(num4);
    } else {
      num3 = 0;
      if (actioned.get()) {
        num3 = 1;
      }
    }
    return obj2;
  };
  const tmpResult7 = actioned(animate[4]);
  fn3.__closure = { actioned, lineHeight: num, fontScale, animate, withTiming: actioned(animate[9]).withTiming, interpolate: actioned(animate[4]).interpolate };
  fn3.__workletHash = 9519694880373;
  fn3.__initData = __initData3;
  ({ actioned, lineHeight: num, fontScale, animate, withTiming: actioned(animate[9]).withTiming, interpolate: actioned(animate[4]).interpolate });
  const animatedStyle2 = tmpResult7.useAnimatedStyle(fn3);
  const tmpResult8 = actioned(animate[4]);
  class A {
    constructor() {
      return actioned.get();
    }
  }
  A.__closure = { actioned };
  A.__workletHash = 9609826744629;
  A.__initData = __initData4;
  class H {
    constructor(arg0, arg1) {
      const tmp = arg0 && false === arg1 && null != actionStatusAccessibilityLabel;
      if (tmp) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(announceActioned)(actionStatusAccessibilityLabel);
      }
    }
  }
  H.__closure = { actionStatusAccessibilityLabel, runOnJS: actioned(animate[4]).runOnJS, announceActioned };
  H.__workletHash = 14569076805033;
  H.__initData = __initData5;
  ({ actionStatusAccessibilityLabel, runOnJS: actioned(animate[4]).runOnJS, announceActioned });
  const animatedReaction = tmpResult8.useAnimatedReaction(A, H);
  if (cResult[0] === animatedStyle) {
    let tmp11;
    if (cResult[1] === tmp6.container) {
      tmp11 = cResult[2];
    }
    if (cResult[3] === label) {
      if (cResult[4] === animatedStyle1) {
        if (cResult[5] === maxFontSizeMultiplier) {
          let tmp12;
          if (cResult[6] === str) {
            tmp12 = cResult[7];
          }
          if (cResult[8] === null != secondaryLabel) {
            if (cResult[9] === animatedStyle1) {
              if (cResult[10] === maxFontSizeMultiplier) {
                if (cResult[11] === secondaryLabel) {
                  let tmp16;
                  if (cResult[12] === str) {
                    tmp16 = cResult[13];
                  }
                  if (cResult[14] === animatedStyle2) {
                    let tmp20;
                    if (cResult[15] === tmp6.actionStatus) {
                      tmp20 = cResult[16];
                    }
                    if (cResult[17] === actionStatus) {
                      if (cResult[18] === maxFontSizeMultiplier) {
                        if (cResult[19] === tmp20) {
                          let tmp21;
                          if (cResult[20] === str) {
                            tmp21 = cResult[21];
                          }
                          if (cResult[22] === tmp11) {
                            if (cResult[23] === tmp12) {
                              if (cResult[24] === tmp16) {
                                let tmp25;
                                if (cResult[25] === tmp21) {
                                  tmp25 = cResult[26];
                                }
                                return tmp25;
                              }
                            }
                          }
                          const obj6 = { style: tmp11, children: items };
                          items = [tmp12, tmp16, tmp21];
                          const tmp28 = closure_4(actionStatusAccessibilityLabel(animate[4]).View, obj6);
                          cResult[22] = tmp11;
                          cResult[23] = tmp12;
                          cResult[24] = tmp16;
                          cResult[25] = tmp21;
                          cResult[26] = tmp28;
                          tmp25 = tmp28;
                        }
                      }
                    }
                    const obj7 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: tmp20, lineClamp: 1, children: actionStatus };
                    const tmp24 = num(closure_7, obj7);
                    cResult[17] = actionStatus;
                    cResult[18] = maxFontSizeMultiplier;
                    cResult[19] = tmp20;
                    cResult[20] = str;
                    cResult[21] = tmp24;
                    tmp21 = tmp24;
                  }
                  let items1 = [tmp6.actionStatus, animatedStyle2];
                  cResult[14] = animatedStyle2;
                  cResult[15] = tmp6.actionStatus;
                  cResult[16] = items1;
                  tmp20 = items1;
                }
              }
            }
          }
          let tmp17 = tmp4;
          if (tmp17) {
            const obj8 = { variant: str, maxFontSizeMultiplier, style: animatedStyle1, color: "text-default", lineClamp: 1, children: secondaryLabel };
            tmp17 = num(closure_7, obj8);
          }
          cResult[8] = null != secondaryLabel;
          cResult[9] = animatedStyle1;
          cResult[10] = maxFontSizeMultiplier;
          cResult[11] = secondaryLabel;
          cResult[12] = str;
          cResult[13] = tmp17;
          tmp16 = tmp17;
        }
      }
    }
    const obj9 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label };
    const tmp15 = num(closure_7, obj9);
    let num2 = 3;
    cResult[3] = label;
    let num3 = 4;
    cResult[4] = animatedStyle1;
    let num4 = 5;
    cResult[5] = maxFontSizeMultiplier;
    cResult[6] = str;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
  const items2 = [tmp6.container, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp6.container;
  cResult[2] = items2;
  tmp11 = items2;
}) : ((lineHeight) => {
  let actionStatus;
  let actionStatusAccessibilityLabel;
  let animate;
  let items;
  let items1;
  let items2;
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
  let tmp = null != secondaryLabel;
  let closure_4 = tmp;
  ({ label, actionStatus } = lineHeight);
  let obj = num(actionStatusAccessibilityLabel[8]);
  const fontScale = obj.useFontScale();
  const tmp3 = fontScale();
  let obj2 = num(actionStatusAccessibilityLabel[4]);
  const fn = function x() {
    const tmp = closure_4 && !actioned.get();
    const result = num * fontScale;
    let result1 = result;
    if (tmp) {
      result1 = 2 * result;
    }
    let height = result1;
    if (animate) {
      height = result1;
      if (actioned.get()) {
        const withTiming = timing.withTiming;
        timing;
        const interpolate = ReanimatedRexport2.interpolate;
        let num2 = 0;
        ReanimatedRexport2;
        if (actioned.get()) {
          num2 = 1;
        }
        let result2 = result;
        if (tmp) {
          result2 = 2 * result;
        }
        const items = [result2, result];
        height = withTiming(interpolate(num2, [0, 1], items));
      }
    }
    return { height };
  };
  fn.__closure = { hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[9]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  fn.__workletHash = 9804318235876;
  fn.__initData = __initData6;
  ({ hasSecondLine: tmp, actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[9]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function y() {
    let items1;
    num = 0;
    if (actioned.get()) {
      num = num * fontScale;
    }
    let withTimingResult = num;
    if (animate) {
      const withTiming = timing.withTiming;
      timing;
      const interpolate = ReanimatedRexport2.interpolate;
      let num2 = 0;
      ReanimatedRexport2;
      if (actioned.get()) {
        num2 = 1;
      }
      const items = [0, num];
      withTimingResult = withTiming(interpolate(num2, [0, 1], items));
    }
    const obj2 = { transform: items1 };
    items1 = [{ translateY: withTimingResult }];
    return obj2;
  };
  const obj4 = num(actionStatusAccessibilityLabel[4]);
  fn2.__closure = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[9]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  fn2.__workletHash = 11945556935472;
  fn2.__initData = __initData7;
  ({ actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[9]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate });
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const obj6 = num(actionStatusAccessibilityLabel[4]);
  class V {
    constructor() {
      let items1;
      let num3;
      num = 0;
      if (!actioned.get()) {
        num = -num * fontScale;
      }
      let withTimingResult = num;
      if (animate) {
        const withTiming = timing.withTiming;
        timing;
        const interpolate = ReanimatedRexport2.interpolate;
        let num2 = 0;
        ReanimatedRexport2;
        if (actioned.get()) {
          num2 = 1;
        }
        const items = [num, 0];
        withTimingResult = withTiming(interpolate(num2, [0, 1], items));
      }
      const obj2 = { transform: items1, opacity: num3 };
      items1 = [{ translateY: withTimingResult }];
      if (animate) {
        const withTiming2 = timing.withTiming;
        let num4 = 0;
        timing;
        if (actioned.get()) {
          num4 = 1;
        }
        num3 = withTiming2(num4);
      } else {
        num3 = 0;
        if (actioned.get()) {
          num3 = 1;
        }
      }
      return obj2;
    }
  }
  V.__closure = { actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[9]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate };
  V.__workletHash = 15212560434750;
  V.__initData = __initData8;
  ({ actioned, lineHeight: num, fontScale, animate, withTiming: num(actionStatusAccessibilityLabel[9]).withTiming, interpolate: num(actionStatusAccessibilityLabel[4]).interpolate });
  const animatedStyle2 = obj6.useAnimatedStyle(V);
  const obj8 = num(actionStatusAccessibilityLabel[4]);
  class Y {
    constructor() {
      return actioned.get();
    }
  }
  Y.__closure = { actioned };
  Y.__workletHash = 6264362886136;
  Y.__initData = __initData9;
  const fn3 = function v(arg0, arg1) {
    const tmp = arg0 && false === arg1 && null != actionStatusAccessibilityLabel;
    if (tmp) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(announceActioned)(actionStatusAccessibilityLabel);
    }
  };
  fn3.__closure = { actionStatusAccessibilityLabel, runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS, announceActioned };
  fn3.__workletHash = 11344856974461;
  fn3.__initData = __initData10;
  ({ actionStatusAccessibilityLabel, runOnJS: num(actionStatusAccessibilityLabel[4]).runOnJS, announceActioned });
  const animatedReaction = obj8.useAnimatedReaction(Y, fn3);
  const tmp8 = closure_4;
  const obj10 = { style: items, children: items1 };
  items = [tmp3.container, animatedStyle];
  const View = actioned(actionStatusAccessibilityLabel[4]).View;
  items1 = [animate(closure_7, { variant: str, maxFontSizeMultiplier, color: "text-default", style: animatedStyle1, lineClamp: 1, children: label }), , ];
  if (tmp) {
    const obj11 = { variant: str, maxFontSizeMultiplier, style: animatedStyle1, color: "text-default", lineClamp: 1, children: secondaryLabel };
    tmp = animate(closure_7, obj11);
  }
  items1[1] = tmp;
  const obj12 = { variant: str, maxFontSizeMultiplier, color: "text-default", style: items2, lineClamp: 1, children: actionStatus };
  items2 = [tmp3.actionStatus, animatedStyle2];
  items1[2] = animate(closure_7, obj12);
  return tmp8(View, obj10);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx");

export const ACTION_STATUS_SUB_LABEL_LINE_HEIGHT = 16;
export const ActionStatusSubLabel = tmp4;