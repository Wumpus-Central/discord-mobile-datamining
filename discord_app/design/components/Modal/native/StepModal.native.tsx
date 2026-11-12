// === Module 13991: StepModal ===

// Module 13991 (StepModal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import Modal from "Modal" /* 12428 */;
import ModalStepIndicator from "ModalStepIndicator" /* 13992 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let closure_8 = createStyles.createStyles({ container: { height: "100%" }, stepContainer: { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, zIndex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export function StepModal(steps) {
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.assign({ steps: 0, onWillFocus: 0 }));
  const tmp2 = closure_8();
  const tmp3 = useSafeAreaInsetsDefault();
  const navigatorHeaderSize = NavigatorHeader.useNavigatorHeaderSize();
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  closure_2 = tmp5[1];
  items = [onWillFocus, steps];
  const obj2 = { style: tmp2.container, children: null };
  const callback = noop.useCallback((arg0) => {
    let num;
    if (steps != null) {
      num = steps.indexOf(tmp.name);
    }
    if (num == null) {
      num = 0;
    }
    closure_2(num);
    if (onWillFocus != null) {
      onWillFocus(arg0);
    }
  }, items);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.onWillFocus = callback;
  obj3.headerStyle = { height: navigatorHeaderSize.height + tmp3.top };
  obj3.hideTitle = true;
  const items1 = [timestampProducer(Modal.Modal, obj3), ];
  const obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp2.stepContainer, { marginTop: tmp3.top, height: navigatorHeaderSize.height }];
  obj4.style = items2;
  const obj5 = { currentStep: tmp5[0], totalSteps: null };
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
  obj2.children = items1;
  return metroImportDefault(View, obj2);
}