// discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { "Checkpoint Intro Desktop": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" }, Globe: {}, "Globe Single Line": {}, "Start Button": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" } };
let closure_8 = { "Checkpoint Intro Desktop": ["default", "reducedMotion"], Globe: [], "Globe Single Line": [], "Start Button": ["default", "reducedMotion"] };
let closure_9 = {
  "Checkpoint Intro Desktop": function CheckpointIntroDesktopBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require("../BaseRive.tsx") /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require("../BaseRive.tsx") /* BaseRive */;
    let Subtitle;
    if (dataBinding != null) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (onDataBindingChange != null) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = require("../BaseRive.tsx") /* BaseRive */.useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    let tmpResult = tmp(4014);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = tmpResult.useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    tmpResult = tmp(4014);
    let StartButton;
    if (dataBinding != null) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (onDataBindingChange != null) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding1 = tmpResult.useStringBinding("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  },
  "Start Button": function StartButtonBindings(reducedMotionEnabled) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = require("../BaseRive.tsx") /* BaseRive */.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = require("../BaseRive.tsx") /* BaseRive */;
    let Subtitle;
    if (dataBinding != null) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (onDataBindingChange != null) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = require("../BaseRive.tsx") /* BaseRive */.useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    let tmpResult = tmp(4014);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = tmpResult.useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    tmpResult = tmp(4014);
    let StartButton;
    if (dataBinding != null) {
      StartButton = dataBinding.StartButton;
    }
    let StartButton1;
    if (onDataBindingChange != null) {
      StartButton1 = onDataBindingChange.StartButton;
    }
    const stringBinding1 = tmpResult.useStringBinding("StartButton", instance, StartButton, StartButton1, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function CheckpointIntroRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Checkpoint Intro Desktop";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let str2 = "default";
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
const forwardRefResult = importAllResult.forwardRef(function CheckpointIntroRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(require("../RiveErrorBoundary.tsx") /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx");

export const CheckpointIntroRive = forwardRefResult;