// === Module 3983: BoostThisServerRive ===

// Module 3983 (BoostThisServerRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { "Boost Server": { reducedMotion: "boolean" }, "Boost Crystal": { reducedMotion: "boolean" }, "Crystal Side B": {}, "Crystal Side A": {}, "Boost Saved": { reducedMotion: "boolean" } };
let closure_8 = { "Boost Server": ["Instance"], "Boost Crystal": ["Instance"], "Crystal Side B": [], "Crystal Side A": [], "Boost Saved": ["Instance"] };
let closure_9 = {
  "Boost Server": function BoostServerBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = require(3984) /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  "Boost Crystal": function BoostCrystalBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = require(3984) /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  },
  "Boost Saved": function BoostSavedBindings(arg0) {
    let instance;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = require(3984) /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function BoostThisServerRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Boost Server";
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
    if (null != outer1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = outer1_6(tmp, obj);
    }
    return tmp2;
  }, items);
  let obj = { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null };
  obj[1] = dataBinding(onDataBindingChange[4]);
  obj[2] = str;
  obj[3] = closure_7;
  obj[4] = closure_8;
  obj[5] = str2;
  obj[6] = defaultViewModelInstance.stateMachine;
  obj[7] = callback;
  let merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null, renderDataBinding: null });
});
const forwardRefResult = importAllResult.forwardRef(function BoostThisServerRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(require(4035) /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BoostThisServerRive.tsx");

export const BoostThisServerRive = forwardRefResult;