// discord_app/modules/quests/native/BountiesModal/BountiesModalEndCard.tsx
import set from "../../../../../_runtime/00002_set.js";
import _modDef4217 from "../../../reanimated/ReanimatedRexport.tsx";
import LinearGradientDefault from "../../../../../_runtime/04940_LinearGradient.js";
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => {
  let obj = { container: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, backdropTint: null, backdropGradient: null };
  obj = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj.backgroundColor = "rgba(241, 251, 169, 0.15)";
  obj[1] = obj;
  obj = {};
  const merged1 = Object.assign(closure_3.absoluteFillObject);
  obj[2] = obj;
  return obj;
});
let closure_8 = { code: "function BountiesModalEndCardTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = callback3();
  visible(4217);
  const fn = function y() {
    let obj = visible(closure_1_2[4]);
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, visible(closure_1_2[5]).timingStandard) };
    return obj;
  };
  let obj = { withTiming: visible(4479).withTiming, visible, timingStandard: visible(4482).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 15062259404736;
  fn.__initData = closure_8;
  if (visible) {
    obj = { style: null, pointerEvents: "box-none", children: null };
    const items = [tmp.container, tmp4];
    obj[0] = items;
    obj = { style: null };
    obj[0] = tmp.backdropTint;
    const items1 = [callback(closure_4, obj), , ];
    obj1 = { colors: null, locations: null, style: null };
    obj1[0] = ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"];
    obj1[1] = [0, 0.841];
    obj1[2] = tmp.backdropGradient;
    items1[1] = callback(LinearGradientDefault, obj1);
    const obj2 = { bounty: null, sourceQuestContent: null };
    obj2[0] = bounty;
    obj2[1] = sourceQuestContent;
    items1[2] = callback(BountiesEndCardPressableCtaDefault, obj2);
    obj[2] = items1;
    visible = callback2(_modDef4217.View, obj);
  }
  return visible;
};