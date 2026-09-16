// discord_app/modules/quests/native/BountiesModal/BountiesModalEndCard.tsx
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import LinearGradientDefault from "../../../../../_runtime/05072_LinearGradient.js";
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = createStyles.createStyles(() => {
  const obj = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    backdropTint: null,
    backdropGradient: null,
  };
  const obj2 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj2.backgroundColor = "rgba(241, 251, 169, 0.15)";
  obj.backdropTint = obj2;
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj.backdropGradient = {};
  return obj;
});
const __initData = {
  code: "function BountiesModalEndCardTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}",
};
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = closure_7();
  visible(4374);
  const fn = function y() {
    let num = 0;
    if (visible) {
      num = 1;
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  fn.__closure = { withTiming: visible(4639).withTiming, visible, timingStandard: visible(4642).timingStandard };
  fn.__workletHash = 15062259404736;
  fn.__initData = __initData;
  if (visible) {
    const obj2 = { style: null, pointerEvents: "box-none", children: null };
    const items = [tmp.container, tmp4];
    obj2.style = items;
    const obj3 = { style: tmp.backdropTint };
    const items1 = [closure_5(closure_4, obj3), ,];
    const obj4 = {
      colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"],
      locations: [0, 0.841],
      style: tmp.backdropGradient,
    };
    items1[1] = closure_5(LinearGradientDefault, obj4);
    const obj5 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj5);
    obj2.children = items1;
    visible = closure_6(ReanimatedRexportDefault.View, obj2);
  }
  return visible;
}
