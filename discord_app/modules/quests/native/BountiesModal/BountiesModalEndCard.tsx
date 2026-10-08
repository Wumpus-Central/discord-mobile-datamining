// === Module 15143: BountiesModalEndCard ===

// Module 15143 (BountiesModalEndCard)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import timingPresets from "timingPresets" /* 5094 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta" /* 15112 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = createStyles.createStyles(() => {
  const obj = { container: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, backdropTint: null, backdropGradient: null };
  const obj2 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj2.backgroundColor = "rgba(241, 251, 169, 0.15)";
  obj.backdropTint = obj2;
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj.backdropGradient = {};
  return obj;
});
const __initData = { code: "function BountiesModalEndCardTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const __initData2 = { code: "function BountiesModalEndCardTsx2(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesModalEndCard(sourceQuestContent) {
  const cResult = visible(576).c(6);
  ({ bounty, visible } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  const tmp3 = closure_7();
  let obj = visible(576);
  const fn = function n() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  const obj2 = visible(4810);
  fn.__closure = { withTiming: visible(5091).withTiming, visible, timingStandard: visible(5094).timingStandard };
  fn.__workletHash = 15062259404736;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === bounty) {
      if (cResult[2] === sourceQuestContent) {
        if (cResult[3] === tmp3) {
          if (cResult[4] === visible) {
            let tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  let tmp6 = visible;
  if (visible) {
    const obj4 = { style: null, pointerEvents: "box-none", children: null };
    const items = [tmp3.container, animatedStyle];
    obj4.style = items;
    const obj5 = { style: tmp3.backdropTint };
    const items1 = [closure_5(closure_4, obj5), , ];
    const obj6 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp3.backdropGradient };
    items1[1] = closure_5(LinearGradientDefault, obj6);
    const obj7 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj7);
    obj4.children = items1;
    tmp6 = closure_6(ReanimatedRexportDefault.View, obj4);
  }
  cResult[0] = animatedStyle;
  cResult[1] = bounty;
  cResult[2] = sourceQuestContent;
  cResult[3] = tmp3;
  cResult[4] = visible;
  cResult[5] = tmp6;
  tmp5 = tmp6;
  const obj3 = { withTiming: visible(5091).withTiming, visible, timingStandard: visible(5094).timingStandard };
}) : (function BountiesModalEndCard(visible) {
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = closure_7();
  visible(4810);
  const fn = function b() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  fn.__closure = { withTiming: visible(5091).withTiming, visible, timingStandard: visible(5094).timingStandard };
  fn.__workletHash = 8770295520643;
  fn.__initData = __initData2;
  if (visible) {
    const obj2 = { style: null, pointerEvents: "box-none", children: null };
    const items = [tmp.container, tmp4];
    obj2.style = items;
    const obj3 = { style: tmp.backdropTint };
    const items1 = [closure_5(closure_4, obj3), , ];
    const obj4 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp.backdropGradient };
    items1[1] = closure_5(LinearGradientDefault, obj4);
    const obj5 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj5);
    obj2.children = items1;
    visible = closure_6(ReanimatedRexportDefault.View, obj2);
  }
  return visible;
});