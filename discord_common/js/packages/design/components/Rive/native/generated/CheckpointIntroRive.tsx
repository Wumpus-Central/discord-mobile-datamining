// discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx
import BaseRive from "../BaseRive.tsx";
import getDerivedStateFromError from "../RiveErrorBoundary.tsx";
import closure_4 from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { "Checkpoint Intro Desktop": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" }, Globe: {}, "Globe Single Line": {}, "Start Button": { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" } };
let closure_8 = { "Checkpoint Intro Desktop": ["default", "reducedMotion"], Globe: [], "Globe Single Line": [], "Start Button": ["default", "reducedMotion"] };
let closure_9 = {
  "Checkpoint Intro Desktop": function CheckpointIntroDesktopBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Subtitle;
    if (dataBinding != null) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (onDataBindingChange != null) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = BaseRive.useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    let tmpResult = tmp(4180);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = tmpResult.useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    tmpResult = tmp(4180);
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
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled.reducedMotionEnabled, undefined, playIfNeeded);
    const obj = BaseRive;
    let Subtitle;
    if (dataBinding != null) {
      Subtitle = dataBinding.Subtitle;
    }
    let Subtitle1;
    if (onDataBindingChange != null) {
      Subtitle1 = onDataBindingChange.Subtitle;
    }
    const stringBinding = BaseRive.useStringBinding("Subtitle", instance, Subtitle, Subtitle1, playIfNeeded);
    let tmpResult = tmp(4180);
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["StartButton Pressed"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["StartButton Pressed"];
    }
    const booleanBinding1 = tmpResult.useBooleanBinding("StartButton Pressed", instance, prop, prop1, playIfNeeded);
    tmpResult = tmp(4180);
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
const forwardRefResult = importAllResult.forwardRef(function CheckpointIntroRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={arg1} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointIntroRive.tsx");

export const CheckpointIntroRive = forwardRefResult;