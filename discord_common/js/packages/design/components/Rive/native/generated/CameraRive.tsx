// discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { "Icon Camera": { reducedMotion: "boolean", fill: "color", on: "boolean" }, "Animation Main": {} };
let closure_8 = { "Icon Camera": ["CamOff", "CamOn"], "Animation Main": [] };
let closure_9 = {
  "Icon Camera": function IconCameraBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require("../BaseRive.tsx") /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require("../BaseRive.tsx") /* BaseRive */;
    const tmp = require;
    let fill;
    if (dataBinding != null) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (onDataBindingChange != null) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = require("../BaseRive.tsx") /* BaseRive */.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    const obj2 = require("../BaseRive.tsx") /* BaseRive */;
    let on;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = tmp(4014).useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CameraRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Icon Camera";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "CamOff";
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
const forwardRefResult = importAllResult.forwardRef(function CameraRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(require("../RiveErrorBoundary.tsx") /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx");

export const CameraRive = forwardRefResult;