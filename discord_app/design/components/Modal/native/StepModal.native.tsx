// === Module 13710: StepModal ===

// Module 13710 (StepModal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import NavigatorConstants from "NavigatorConstants" /* 5989 */;
import Modal from "Modal" /* 10756 */;
import ModalStepIndicator from "ModalStepIndicator" /* 13711 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { height: "100%" }, stepContainer: null };
const rect = { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, height: fn(5989).NAV_BAR_HEIGHT };
obj2.stepContainer = rect;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = function StepModal(steps) {
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.assign({ steps: 0, onWillFocus: 0 }));
  const tmp2 = closure_8();
  const tmp3 = useSafeAreaInsetsDefault();
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  closure_2 = tmp4[1];
  const items = [onWillFocus, steps];
  const obj = { style: tmp2.container, children: null };
  const callback = noop.useCallback((onDidFocus) => {
    let num;
    if (steps != null) {
      num = steps.indexOf(tmp.name);
    }
    if (num == null) {
      num = 0;
    }
    closure_2(num);
    if (onWillFocus != null) {
      onWillFocus(onDidFocus);
    }
  }, items);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.onWillFocus = callback;
  obj2.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + tmp3.top };
  obj2.hideTitle = true;
  const items1 = [timestampProducer(Modal.Modal, obj2), ];
  const obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp2.stepContainer, { marginTop: tmp3.top }];
  obj4.style = items2;
  const obj5 = { currentStep: tmp4[0], totalSteps: null };
  let num;
  if (steps != null) {
    num = steps.length;
  }
  if (num == null) {
    num = 0;
  }
  obj5.totalSteps = num;
  obj4.children = timestampProducer(ModalStepIndicator.ModalStepIndicator, obj5);
  items1[1] = timestampProducer(View, obj4);
  obj.children = items1;
  return React5(View, obj);
};