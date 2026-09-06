// discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
const jsx = fn(21).jsx;
const artboardProperties = {
  "Icon Camera": { reducedMotion: "boolean", fill: "color", on: "boolean" },
  "Animation Main": {},
};
const artboardViewModelInstances = { "Icon Camera": ["CamOff", "CamOn"], "Animation Main": [] };
let closure_9 = {
  "Icon Camera": function IconCameraBindings(reducedMotionEnabled) {
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = reducedMotionEnabled);
    const booleanBinding = BaseRive.useBooleanBinding(
      "reducedMotion",
      instance,
      reducedMotionEnabled.reducedMotionEnabled,
      undefined,
      playIfNeeded,
    );
    let fill;
    if (dataBinding != null) {
      fill = dataBinding.fill;
    }
    let fill1;
    if (onDataBindingChange != null) {
      fill1 = onDataBindingChange.fill;
    }
    const colorBinding = BaseRive.useColorBinding("fill", instance, fill, fill1, playIfNeeded);
    let on;
    if (dataBinding != null) {
      on = dataBinding.on;
    }
    let on1;
    if (onDataBindingChange != null) {
      on1 = onDataBindingChange.on;
    }
    const booleanBinding1 = BaseRive.useBooleanBinding("on", instance, on, on1, playIfNeeded);
    return null;
  },
};
let closure_10 = noop.forwardRef(function CameraRiveInner(defaultViewModelInstance, ref) {
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
    ref,
    src: dataBinding(onDataBindingChange[4]),
    artboard: str,
    artboardProperties,
    artboardViewModelInstances,
    defaultViewModelInstance: str2,
    stateMachine: defaultViewModelInstance.stateMachine,
    renderDataBinding: callback,
  });
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx",
);

export const CameraRive = noop.forwardRef(function CameraRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={arg1} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
});
