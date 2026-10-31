// discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _modDef5182 from "../../../../../../../../discord_assets/assets/mana/rive/native/TeenScreenTime.riv.js";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
function TeenScreenTimeRiveInner(defaultViewModelInstance) {
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Teen Screen Time Illo";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let tmp;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const tmp2 = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  const merged = Object.assign(tmp2);
  return jsx(BaseRive.BaseRive, {
    ref: defaultViewModelInstance.ref,
    src: _modDef5182,
    artboard: str,
    artboardProperties,
    artboardViewModelInstances,
    defaultViewModelInstance: tmp,
    stateMachine: defaultViewModelInstance.stateMachine,
  });
}
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = fn(21).jsx;
const artboardProperties = {
  "Teen Screen Time Illo": {},
  "Gradient Vertical": {},
  "RAW ILLO (Do not deploy)": {},
  "Gradient Horizontal": {},
};
const artboardViewModelInstances = {
  "Teen Screen Time Illo": [],
  "Gradient Vertical": [],
  "RAW ILLO (Do not deploy)": [],
  "Gradient Horizontal": [],
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx",
);

export const TeenScreenTimeRive = function TeenScreenTimeRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <TeenScreenTimeRiveInner />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
};
