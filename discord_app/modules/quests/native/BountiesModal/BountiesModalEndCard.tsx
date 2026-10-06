// === Module 14881: BountiesModalEndCard ===

// Module 14881 (BountiesModalEndCard)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta" /* 14851 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  const obj = { container: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, backdropTint: obj2, backdropGradient: obj3 };
  obj2 = { backgroundColor: "rgba(241, 251, 169, 0.15)" };
  const merged = Object.assign(_false.absoluteFillObject);
  obj3 = {};
  const merged1 = Object.assign(_false.absoluteFillObject);
  return obj;
});
const __initData = { code: "function BountiesModalEndCardTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const __initData2 = { code: "function BountiesModalEndCardTsx2(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((sourceQuestContent) => {
  let bounty;
  let items;
  let items1;
  let visible;
  let obj = visible(576);
  const cResult = obj.c(6);
  ({ bounty, visible } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  const tmp3 = closure_7();
  const fn = function n() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (visible) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  const obj2 = visible(4618);
  fn.__closure = { withTiming: visible(4897).withTiming, visible, timingStandard: visible(4900).timingStandard };
  fn.__workletHash = 15062259404736;
  fn.__initData = __initData;
  ({ withTiming: visible(4897).withTiming, visible, timingStandard: visible(4900).timingStandard });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === bounty) {
      if (cResult[2] === sourceQuestContent) {
        if (cResult[3] === tmp3) {
          let tmp5;
          if (cResult[4] === visible) {
            tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  let tmp6 = visible;
  if (tmp6) {
    const obj4 = { style: items, pointerEvents: "box-none", children: items1 };
    items = [tmp3.container, animatedStyle];
    const obj5 = { style: tmp3.backdropTint };
    const View = ReanimatedRexportDefault.View;
    items1 = [closure_5(closure_4, obj5), , ];
    const obj6 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp3.backdropGradient };
    items1[1] = closure_5(LinearGradientDefault, obj6);
    const obj7 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj7);
    tmp6 = closure_6(View, obj4);
  }
  cResult[0] = animatedStyle;
  cResult[1] = bounty;
  cResult[2] = sourceQuestContent;
  cResult[3] = tmp3;
  cResult[4] = visible;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : ((visible) => {
  let bounty;
  let items;
  let items1;
  let sourceQuestContent;
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = closure_7();
  const tmp3 = visible(4618);
  const fn = function b() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (visible) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  let obj = { withTiming: visible(4897).withTiming, visible, timingStandard: visible(4900).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 8770295520643;
  fn.__initData = __initData2;
  if (visible) {
    const obj2 = { style: items, pointerEvents: "box-none", children: items1 };
    items = [tmp.container, tmp4];
    const obj3 = { style: tmp.backdropTint };
    const View = ReanimatedRexportDefault.View;
    items1 = [closure_5(closure_4, obj3), , ];
    const obj4 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp.backdropGradient };
    items1[1] = closure_5(LinearGradientDefault, obj4);
    const obj5 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj5);
    visible = closure_6(View, obj2);
  }
  return visible;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default tmp4;