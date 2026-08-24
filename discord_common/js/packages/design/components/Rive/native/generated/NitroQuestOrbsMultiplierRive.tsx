// === Module 4185: NitroQuestOrbsMultiplierRive ===

// Module 4185 (NitroQuestOrbsMultiplierRive)
import BaseRive from "BaseRive" /* 4109 */;
import getDerivedStateFromError from "getDerivedStateFromError" /* 4164 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { Torbs_Multiply: { reducedMotion: "boolean" }, Shards_All_Nitro: { reducedMotion: "boolean" }, "Orb Mid Shine": { reducedMotion: "boolean" }, Torbs_Shine: { reducedMotion: "boolean" } };
let closure_8 = { Torbs_Multiply: ["Instance"], Shards_All_Nitro: ["Instance"], "Orb Mid Shine": ["Instance"], Torbs_Shine: ["Instance"] };
let closure_9 = {
  Torbs_Multiply: function TorbsMultiplyBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  Shards_All_Nitro: function ShardsAllNitroBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  "Orb Mid Shine": function OrbMidShineBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  Torbs_Shine: function TorbsShineBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function NitroQuestOrbsMultiplierRiveInner(defaultViewModelInstance, ref) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Torbs_Multiply";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "Instance";
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = defaultViewModelInstance.dataBinding;
  const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = closure_1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  const tmp = callback(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function NitroQuestOrbsMultiplierRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/NitroQuestOrbsMultiplierRive.tsx");

export const NitroQuestOrbsMultiplierRive = forwardRefResult;