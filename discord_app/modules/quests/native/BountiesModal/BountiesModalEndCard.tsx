// discord_app/modules/quests/native/BountiesModal/BountiesModalEndCard.tsx
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = createStyles.createStyles(() => {
  let obj = {
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
  obj = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj.backgroundColor = "rgba(241, 251, 169, 0.15)";
  obj.backdropTint = obj;
  obj = {};
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj.backdropGradient = obj;
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
  visible(4296);
  const fn = function y() {
    let obj = timing;
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  let obj = { withTiming: visible(4561).withTiming, visible, timingStandard: visible(4564).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 15062259404736;
  fn.__initData = __initData;
  if (visible) {
    obj = { style: null, pointerEvents: "box-none", children: null };
    const items = [tmp.container, tmp4];
    obj.style = items;
    obj = { style: tmp.backdropTint };
    const items1 = [closure_5(closure_4, obj), ,];
    const obj1 = {
      colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"],
      locations: [0, 0.841],
      style: tmp.backdropGradient,
    };
    items1[1] = closure_5(LinearGradientDefault, obj1);
    const obj2 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj2);
    obj.children = items1;
    visible = closure_6(ReanimatedRexportDefault.View, obj);
  }
  return visible;
}
