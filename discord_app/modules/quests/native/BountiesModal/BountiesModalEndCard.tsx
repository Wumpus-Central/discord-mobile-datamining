// === Module 14108: BountiesModalEndCard ===

// Module 14108 (BountiesModalEndCard)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
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
const result = require("createCacheKey").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  let bounty;
  let sourceQuestContent;
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = callback3();
  visible(4054);
  const fn = function y() {
    let obj = visible(outer1_2[4]);
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, visible(outer1_2[5]).timingStandard) };
    return obj;
  };
  let obj = { withTiming: visible(4194).withTiming, visible, timingStandard: visible(4197).timingStandard };
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
    const obj1 = { colors: null, locations: null, style: null };
    obj1[0] = ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"];
    obj1[1] = [0, 0.841];
    obj1[2] = tmp.backdropGradient;
    items1[1] = callback(importDefault(4615), obj1);
    const obj2 = { bounty: null, sourceQuestContent: null };
    obj2[0] = bounty;
    obj2[1] = sourceQuestContent;
    items1[2] = callback(importDefault(14090), obj2);
    obj[2] = items1;
    visible = callback2(importDefault(4054).View, obj);
  }
  return visible;
};