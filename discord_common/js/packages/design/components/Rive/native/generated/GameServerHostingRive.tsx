// === Module 4252: GameServerHostingRive ===

// Module 4252 (GameServerHostingRive)
import BaseRive from "BaseRive" /* 4180 */;
import getDerivedStateFromError from "getDerivedStateFromError" /* 4235 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { Game_Server_Hosting_Main: { reducedMotion: "boolean" }, c_chara_5: {}, hytale_gameplay: { reducedMotion: "boolean" }, c_chara_1: {}, c_chara_4: {}, c_chara_2: {}, c_chara_3: {} };
let closure_8 = { Game_Server_Hosting_Main: ["Instance"], c_chara_5: [], hytale_gameplay: ["Instance"], c_chara_1: [], c_chara_4: [], c_chara_2: [], c_chara_3: [] };
let closure_9 = {
  Game_Server_Hosting_Main: function GameServerHostingMainBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  hytale_gameplay: function HytalegameplayBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function GameServerHostingRiveInner(defaultViewModelInstance, ref) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Game_Server_Hosting_Main";
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
const forwardRefResult = importAllResult.forwardRef(function GameServerHostingRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/GameServerHostingRive.tsx");

export const GameServerHostingRive = forwardRefResult;