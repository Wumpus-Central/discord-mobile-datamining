// === Module 4364: GameServerHostingRive ===

// Module 4364 (GameServerHostingRive)
import BaseRive from "BaseRive" /* 4290 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4345 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = fn(21).jsx;
const artboardProperties = { Game_Server_Hosting_Main: { reducedMotion: "boolean" }, c_chara_5: {}, hytale_gameplay: { reducedMotion: "boolean" }, c_chara_1: {}, c_chara_4: {}, c_chara_2: {}, c_chara_3: {} };
const artboardViewModelInstances = { Game_Server_Hosting_Main: ["Instance"], c_chara_5: [], hytale_gameplay: ["Instance"], c_chara_1: [], c_chara_4: [], c_chara_2: [], c_chara_3: [] };
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
let closure_10 = noop.forwardRef(function GameServerHostingRiveInner(defaultViewModelInstance, ref) {
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
  const callback = noop.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/GameServerHostingRive.tsx");

export const GameServerHostingRive = noop.forwardRef(function GameServerHostingRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
});