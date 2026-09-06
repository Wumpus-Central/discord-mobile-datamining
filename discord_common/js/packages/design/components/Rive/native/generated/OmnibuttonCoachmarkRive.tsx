// discord_common/js/packages/design/components/Rive/native/generated/OmnibuttonCoachmarkRive.tsx
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
const artboardProperties = { Omnibutton: { reducedMotion: "boolean" } };
const artboardViewModelInstances = { Omnibutton: ["Instance"] };
let closure_9 = {
  Omnibutton: function OmnibuttonBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding(
      "reducedMotion",
      instance,
      reducedMotionEnabled,
      undefined,
      playIfNeeded,
    );
    return null;
  },
};
let closure_10 = noop.forwardRef(function OmnibuttonCoachmarkRiveInner(defaultViewModelInstance, ref) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Omnibutton";
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
  "../discord_common/js/packages/design/components/Rive/native/generated/OmnibuttonCoachmarkRive.tsx",
);

export const OmnibuttonCoachmarkRive = noop.forwardRef(function OmnibuttonCoachmarkRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_10 ref={ref} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
});
