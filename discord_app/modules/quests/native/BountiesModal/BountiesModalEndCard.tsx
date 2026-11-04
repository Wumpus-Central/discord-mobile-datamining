// === Module 17213: BountiesModalEndCard ===

// Module 17213 (BountiesModalEndCard)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import timingPresets from "timingPresets" /* 5381 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
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
let closure_8 = { code: "(function BountiesModalEndCardTsx1(){let[withTiming,visible,timingStandard]=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};})" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = closure_7();
  _mod1652;
  items = [closure_8, timing_timing.withTiming, visible, timingPresets.timingStandard];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class BountiesModalEndCardTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  BountiesModalEndCardTsx1.__closure = items1;
  BountiesModalEndCardTsx1.__workletHash = 9535355368761;
  BountiesModalEndCardTsx1.__initData = tmp4;
  if (visible) {
    const obj = { style: null, pointerEvents: "box-none", children: null };
    const items2 = [tmp.container, tmp8];
    obj.style = items2;
    const obj2 = { style: tmp.backdropTint };
    const items3 = [hasOwnProperty(React4, obj2), , ];
    const obj3 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp.backdropGradient };
    items3[1] = hasOwnProperty(LinearGradientDefault, obj3);
    const obj4 = { bounty, sourceQuestContent };
    class BountiesModalEndCardTsx1 {
      constructor() {
        num = 0;
        tmp = closure_0;
        if (closure_1) {
          num = 1;
        }
        obj = { opacity: tmp(num, closure_2) };
        return obj;
      }
    }
    obj.children = items3;
    visible = timestampProducer(_modDef1652.View, obj);
  }
  return visible;
};