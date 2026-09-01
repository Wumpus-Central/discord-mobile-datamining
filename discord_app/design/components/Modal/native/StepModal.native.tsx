// discord_app/design/components/Modal/native/StepModal.native.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { height: "100%" }, stepContainer: null };
createCacheKey = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
  height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT,
};
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.create(null));
  dependencyMap = undefined;
  const tmp2 = callback3();
  const tmp3 = onWillFocus(1628)();
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
  obj = { height: steps(5492).NAV_BAR_HEIGHT + tmp3.top };
  obj.headerStyle = obj;
  obj.hideTitle = true;
  const items1 = [callback2(steps(11501).Modal, obj)];
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
  obj1[2] = callback2(steps(13818).ModalStepIndicator, obj2);
  items1[1] = callback2(View, obj1);
  obj[1] = items1;
  return closure_7(View, obj);
};
