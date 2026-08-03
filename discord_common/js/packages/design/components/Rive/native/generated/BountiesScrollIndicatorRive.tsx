// === Module 4038: BountiesScrollIndicatorRive ===

// Module 4038 (BountiesScrollIndicatorRive)
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { "Bounties Scroll Indicator": { startAnimation: "trigger", looping: "boolean", color: "color" } };
let closure_8 = { "Bounties Scroll Indicator": ["Instance"] };
let closure_9 = {
  "Bounties Scroll Indicator": function BountiesScrollIndicatorBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let startAnimation;
    if (dataBinding != null) {
      startAnimation = dataBinding.startAnimation;
    }
    let startAnimation1;
    if (onDataBindingChange != null) {
      startAnimation1 = onDataBindingChange.startAnimation;
    }
    const triggerBinding = require(3984) /* BaseRive */.useTriggerBinding("startAnimation", instance, startAnimation, startAnimation1, playIfNeeded);
    let tmpResult = tmp(3984);
    let looping;
    if (dataBinding != null) {
      looping = dataBinding.looping;
    }
    let looping1;
    if (onDataBindingChange != null) {
      looping1 = onDataBindingChange.looping;
    }
    const booleanBinding = tmpResult.useBooleanBinding("looping", instance, looping, looping1, playIfNeeded);
    tmpResult = tmp(3984);
    let color;
    if (dataBinding != null) {
      color = dataBinding.color;
    }
    let color1;
    if (onDataBindingChange != null) {
      color1 = onDataBindingChange.color;
    }
    const colorBinding = tmpResult.useColorBinding("color", instance, color, color1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function BountiesScrollIndicatorRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounties Scroll Indicator";
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
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollIndicatorRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(require(4035) /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollIndicatorRive.tsx");

export const BountiesScrollIndicatorRive = forwardRefResult;