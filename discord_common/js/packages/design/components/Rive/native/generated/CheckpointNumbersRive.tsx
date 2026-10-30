// discord_common/js/packages/design/components/Rive/native/generated/CheckpointNumbersRive.tsx
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CheckpointNumbersRiveInner(defaultViewModelInstance) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Artboard";
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
  return jsx(str(onDataBindingChange[3]).BaseRive, {
    ref: defaultViewModelInstance.ref,
    src: dataBinding(onDataBindingChange[4]),
    artboard: str,
    artboardProperties,
    artboardViewModelInstances,
    defaultViewModelInstance: str2,
    stateMachine: defaultViewModelInstance.stateMachine,
    renderDataBinding: callback,
  });
}
let closure_3 = [
  "ref",
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
const jsx = fn(21).jsx;
const artboardProperties = {
  Artboard: {
    DisplayValueString: "string",
    reducedMotion: "boolean",
    TextColor: "color",
    "Fire CountUp": "trigger",
    DisplayValue: "number",
  },
};
const artboardViewModelInstances = { Artboard: ["default", "reducedMotion"] };
let closure_9 = {
  Artboard: function ArtboardBindings(arg0) {
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let DisplayValueString;
    if (dataBinding != null) {
      DisplayValueString = dataBinding.DisplayValueString;
    }
    let DisplayValueString1;
    if (onDataBindingChange != null) {
      DisplayValueString1 = onDataBindingChange.DisplayValueString;
    }
    const stringBinding = BaseRive.useStringBinding(
      "DisplayValueString",
      instance,
      DisplayValueString,
      DisplayValueString1,
      playIfNeeded,
    );
    const booleanBinding = BaseRive.useBooleanBinding(
      "reducedMotion",
      instance,
      reducedMotionEnabled,
      undefined,
      playIfNeeded,
    );
    const tmpResult = BaseRive;
    let TextColor;
    if (dataBinding != null) {
      TextColor = dataBinding.TextColor;
    }
    let TextColor1;
    if (onDataBindingChange != null) {
      TextColor1 = onDataBindingChange.TextColor;
    }
    const colorBinding = BaseRive.useColorBinding("TextColor", instance, TextColor, TextColor1, playIfNeeded);
    const tmpResult4 = BaseRive;
    let prop;
    if (dataBinding != null) {
      prop = dataBinding["Fire CountUp"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Fire CountUp"];
    }
    const triggerBinding = BaseRive.useTriggerBinding("Fire CountUp", instance, prop, prop1, playIfNeeded);
    const tmpResult5 = BaseRive;
    let DisplayValue;
    if (dataBinding != null) {
      DisplayValue = dataBinding.DisplayValue;
    }
    let DisplayValue1;
    if (onDataBindingChange != null) {
      DisplayValue1 = onDataBindingChange.DisplayValue;
    }
    const numberBinding = BaseRive.useNumberBinding(
      "DisplayValue",
      instance,
      DisplayValue,
      DisplayValue1,
      playIfNeeded,
    );
    return null;
  },
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/CheckpointNumbersRive.tsx",
);

export const CheckpointNumbersRive = function CheckpointNumbersRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <CheckpointNumbersRiveInner />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
};
