// === Module 4189: TeenScreenTimeRive ===

// Module 4189 (TeenScreenTimeRive)
import BaseRive from "BaseRive" /* 4109 */;
import getDerivedStateFromError from "getDerivedStateFromError" /* 4164 */;
import metadataDefault from "metadata" /* 4190 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_6 = { "Teen Screen Time Illo": {}, "Gradient Vertical": {}, "RAW ILLO (Do not deploy)": {}, "Gradient Horizontal": {} };
let closure_7 = { "Teen Screen Time Illo": [], "Gradient Vertical": [], "RAW ILLO (Do not deploy)": [], "Gradient Horizontal": [] };
let closure_8 = importAllResult.forwardRef(function TeenScreenTimeRiveInner(defaultViewModelInstance, ref) {
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
  const tmp2 = callback(defaultViewModelInstance, closure_3);
  const merged = Object.assign(tmp2);
  return jsx(BaseRive.BaseRive, { ref, src: metadataDefault, artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine });
});
const forwardRefResult = importAllResult.forwardRef(function TeenScreenTimeRiveWithBoundary(fallback, ref) {
  const obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_8 ref={ref} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/TeenScreenTimeRive.tsx");

export const TeenScreenTimeRive = forwardRefResult;