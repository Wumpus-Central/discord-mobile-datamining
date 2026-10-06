// === Module 14290: StepModal ===

// Module 14290 (StepModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import Modal2 from "Modal" /* 10989 */;
import ModalStepIndicator2 from "ModalStepIndicator" /* 14291 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let steps;

let c9;
let metroImportAll;
let rect;
let closure_3 = ["steps", "onWillFocus"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { container: { height: "100%" }, stepContainer: rect };
rect = { flexDirection: "column", alignItems: "center", justifyContent: "center", top: 0, left: 0, right: 0, height: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_10 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((steps) => {
  let closure_129_2;
  let items;
  let tmp12;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(28);
  if (cResult[0] !== steps) {
    steps = steps.steps;
    let closure_1 = steps;
    const onWillFocus = steps.onWillFocus;
    let closure_0 = onWillFocus;
    const tmp8 = _objectWithoutProperties(steps, closure_3);
    let num = 0;
    cResult[0] = steps;
    cResult[1] = onWillFocus;
    cResult[2] = tmp8;
    cResult[3] = steps;
    tmp5 = tmp8;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
    closure_1 = cResult[3];
  }
  const tmp9 = closure_10();
  const tmp10 = useSafeAreaInsetsDefault();
  [tmp12, closure_129_2] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[4] === tmp4) {
    let tmp13;
    let tmp15;
    if (cResult[5] === arr) {
      tmp13 = cResult[6];
    }
    const sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp10.top;
    if (cResult[7] !== sum) {
      const obj2 = { height: sum };
      cResult[7] = sum;
      cResult[8] = obj2;
      tmp15 = obj2;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp13) {
      if (cResult[10] === tmp5) {
        let tmp16;
        let tmp22;
        if (cResult[11] === tmp15) {
          tmp16 = cResult[12];
        }
        if (cResult[13] !== tmp10.top) {
          const obj3 = { marginTop: tmp10.top };
          cResult[13] = tmp10.top;
          cResult[14] = obj3;
          tmp22 = obj3;
        } else {
          tmp22 = cResult[14];
        }
        if (cResult[15] === tmp9.stepContainer) {
          let tmp23;
          if (cResult[16] === tmp22) {
            tmp23 = cResult[17];
          }
          let num16;
          if (arr != null) {
            num16 = arr.length;
          }
          if (num16 == null) {
            num16 = 0;
          }
          if (cResult[18] === tmp12) {
            let tmp25;
            if (cResult[19] === num16) {
              tmp25 = cResult[20];
            }
            if (cResult[21] === tmp23) {
              let tmp28;
              if (cResult[22] === tmp25) {
                tmp28 = cResult[23];
              }
              if (cResult[24] === tmp9.container) {
                if (cResult[25] === tmp16) {
                  let tmp32;
                  if (cResult[26] === tmp28) {
                    tmp32 = cResult[27];
                  }
                  return tmp32;
                }
              }
              const obj4 = { style: tmp9.container, children: items };
              items = [tmp16, tmp28];
              const tmp35 = React4(View, obj4);
              cResult[24] = tmp9.container;
              cResult[25] = tmp16;
              cResult[26] = tmp28;
              cResult[27] = tmp35;
              tmp32 = tmp35;
            }
            const obj5 = { style: tmp23, pointerEvents: "box-none", children: tmp25 };
            const tmp31 = metroImportAll(View, obj5);
            cResult[21] = tmp23;
            cResult[22] = tmp25;
            cResult[23] = tmp31;
            tmp28 = tmp31;
          }
          const obj6 = { currentStep: tmp12, totalSteps: num16 };
          const tmp27 = metroImportAll(ModalStepIndicator2.ModalStepIndicator, obj6);
          cResult[18] = tmp12;
          cResult[19] = num16;
          cResult[20] = tmp27;
          tmp25 = tmp27;
        }
        const items1 = [tmp9.stepContainer, tmp22];
        cResult[15] = tmp9.stepContainer;
        cResult[16] = tmp22;
        cResult[17] = items1;
        tmp23 = items1;
      }
    }
    const obj7 = { onWillFocus: tmp13, headerStyle: tmp15, hideTitle: true };
    const Modal = Modal2.Modal;
    const merged = Object.assign(tmp5);
    const tmp21 = metroImportAll(Modal, obj7);
    cResult[9] = tmp13;
    cResult[10] = tmp5;
    cResult[11] = tmp15;
    cResult[12] = tmp21;
    tmp16 = tmp21;
  }
  const fn = function y(arg0) {
    let num;
    if (closure_1 != null) {
      num = closure_1.indexOf(tmp.name);
    }
    if (num == null) {
      num = 0;
    }
    closure_1_2(num);
    if (closure_0 != null) {
      closure_0(arg0);
    }
  };
  cResult[4] = tmp4;
  cResult[5] = arr;
  cResult[6] = fn;
  tmp13 = fn;
}) : ((steps) => {
  let ModalStepIndicator;
  let closure_2;
  let first;
  let items1;
  let items2;
  let num;
  let obj5;
  steps = steps.steps;
  const onWillFocus = steps.onWillFocus;
  const merged = Object.assign(steps, Object.assign({ steps: 0, onWillFocus: 0 }));
  closure_2 = undefined;
  const tmp2 = closure_10();
  const tmp3 = useSafeAreaInsetsDefault();
  [first, closure_2] = react.useState(0);
  const items = [onWillFocus, steps];
  const obj = { style: tmp2.container, children: items1 };
  const callback = react.useCallback((onDidFocus) => {
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
  const obj2 = { onWillFocus: callback, headerStyle: { height: NavigatorConstants.NAV_BAR_HEIGHT + tmp3.top }, hideTitle: true };
  const Modal = Modal2.Modal;
  const merged1 = Object.assign(merged);
  items1 = [, ];
  ({ height: NavigatorConstants.NAV_BAR_HEIGHT + tmp3.top });
  items1[0] = metroImportAll(Modal, obj2);
  const obj4 = { style: items2, pointerEvents: "box-none", children: metroImportAll(ModalStepIndicator, obj5) };
  items2 = [tmp2.stepContainer, { marginTop: tmp3.top }];
  obj5 = { currentStep: first, totalSteps: num };
  num = undefined;
  ModalStepIndicator = ModalStepIndicator2.ModalStepIndicator;
  if (steps != null) {
    num = steps.length;
  }
  if (num == null) {
    num = 0;
  }
  items1[1] = metroImportAll(View, obj4);
  return React4(View, obj);
});
const result = size.fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = tmp3;