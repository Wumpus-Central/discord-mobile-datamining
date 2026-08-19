// discord_app/design/components/Modal/native/StepModal.native.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.create(null));
  const tmp2 = callback3();
  const tmp3 = onWillFocus(1629)();
  const tmp4 = callback(React.useState(0), 2);
  dependencyMap = tmp4[1];
  const items = [onWillFocus, steps];
  callback = React.useCallback((onDidFocus) => {
    let num;
    if (steps != null) {
      num = steps.indexOf(tmp.name);
    }
    if (num == null) {
      num = 0;
    }
    callback(num);
    if (onWillFocus != null) {
      onWillFocus(onDidFocus);
    }
  }, items);
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.onWillFocus = callback;
  obj = { height: steps(6370).NAV_BAR_HEIGHT + tmp3.top };
  obj.headerStyle = obj;
  obj.hideTitle = true;
  const items1 = [callback2(steps(11115).Modal, obj), ];
  obj1 = { style: items2, pointerEvents: "box-none", children: null };
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
  obj1[2] = callback2(steps(13539).ModalStepIndicator, obj2);
  items1[1] = callback2(View, obj1);
  obj[1] = items1;
  return callback(View, obj);
};