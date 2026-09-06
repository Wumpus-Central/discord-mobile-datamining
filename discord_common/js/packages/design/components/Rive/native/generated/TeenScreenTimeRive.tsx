// === Module 4372: TeenScreenTimeRive ===

// Module 4372 (TeenScreenTimeRive)
import BaseRive from "BaseRive" /* 4290 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4345 */;
import _modDef4373 from "module_4373" /* 4373 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = fn(21).jsx;
const artboardProperties = { "Teen Screen Time Illo": {}, "Gradient Vertical": {}, "RAW ILLO (Do not deploy)": {}, "Gradient Horizontal": {} };
const artboardViewModelInstances = { "Teen Screen Time Illo": [], "Gradient Vertical": [], "RAW ILLO (Do not deploy)": [], "Gradient Horizontal": [] };
let closure_8 = noop.forwardRef(function TeenScreenTimeRiveInner(defaultViewModelInstance, ref) {
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
  return jsx(BaseRive.BaseRive, { ref, src: _modDef4373, artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine });
});
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx");

export const TeenScreenTimeRive = noop.forwardRef(function TeenScreenTimeRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj.children = <closure_8 ref={ref} />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
});