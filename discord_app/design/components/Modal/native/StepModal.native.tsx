// === Module 13236: StepModal ===

// Module 13236 (StepModal)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { height: "100%" }, stepContainer: null };
createCacheKey = { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.create(null));
  let dependencyMap;
  const tmp2 = createCacheKey();
  const tmp3 = onWillFocus(1581)();
  const tmp4 = callback(React.useState(0), 2);
  dependencyMap = tmp4[1];
  const items = [onWillFocus, steps];
  let obj = { style: tmp2.container, children: null };
  callback = React.useCallback((route) => {
    let num;
    if (steps != null) {
      num = steps.indexOf(tmp.name);
    }
    if (num == null) {
      num = 0;
    }
    closure_2(num);
    if (onWillFocus != null) {
      onWillFocus(route);
    }
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.onWillFocus = callback;
  obj = { height: steps(5144).NAV_BAR_HEIGHT + tmp3.top };
  obj.headerStyle = obj;
  obj.hideTitle = true;
  const items1 = [callback2(steps(11136).Modal, obj), ];
  const obj1 = { style: items2, pointerEvents: "box-none", children: null };
  items2 = [tmp2.stepContainer, { marginTop: tmp3.top }];
  const obj2 = { currentStep: tmp4[0], totalSteps: null };
  let num;
  if (steps != null) {
    num = steps.length;
  }
  if (num == null) {
    num = 0;
  }
  obj2[1] = num;
  obj1[2] = callback2(steps(13237).ModalStepIndicator, obj2);
  items1[1] = callback2(View, obj1);
  obj[1] = items1;
  return closure_7(View, obj);
};