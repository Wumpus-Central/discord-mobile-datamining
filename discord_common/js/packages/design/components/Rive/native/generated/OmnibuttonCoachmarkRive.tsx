// === Module 4187: OmnibuttonCoachmarkRive ===

// Module 4187 (OmnibuttonCoachmarkRive)
import BaseRive from "BaseRive" /* 4109 */;
import getDerivedStateFromError from "getDerivedStateFromError" /* 4164 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let c5 = importAllResult;
let closure_7 = { Omnibutton: { reducedMotion: "boolean" } };
let closure_8 = { Omnibutton: ["Instance"] };
let closure_9 = {
  Omnibutton: function OmnibuttonBindings(arg0) {
    ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
    const booleanBinding = BaseRive.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }
};
let closure_10 = importAllResult.forwardRef(function OmnibuttonCoachmarkRiveInner(defaultViewModelInstance, ref) {
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
  const callback = importAllResult.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_1_9[str]) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.dataBinding = dataBinding;
      obj.onDataBindingChange = onDataBindingChange;
      tmp2 = <tmp />;
    }
    return tmp2;
  }, items);
  const tmp = callback(defaultViewModelInstance, closure_3);
  let merged = Object.assign(tmp);
  return jsx(str(onDataBindingChange[3]).BaseRive, { ref, src: dataBinding(onDataBindingChange[4]), artboard: str, artboardProperties: closure_7, artboardViewModelInstances: closure_8, defaultViewModelInstance: str2, stateMachine: defaultViewModelInstance.stateMachine, renderDataBinding: callback });
});
const forwardRefResult = importAllResult.forwardRef(function OmnibuttonCoachmarkRiveWithBoundary(fallback, ref) {
  const obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_10 ref={ref} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/OmnibuttonCoachmarkRive.tsx");

export const OmnibuttonCoachmarkRive = forwardRefResult;