// discord_app/design/components/Modal/native/StepModal.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../Navigator/native/NavigatorConstants.native.tsx";
import Modal from "Modal.native.tsx";
import ModalStepIndicator from "ModalStepIndicator.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["steps", "onWillFocus"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { height: "100%" }, stepContainer: null };
const rect = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
  height: fn(6261).NAV_BAR_HEIGHT,
};
obj2.stepContainer = rect;
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/StepModal.native.tsx");

export const StepModal = ReactCompilerGating.isReactCompilerEnabled()
  ? function StepModal(steps) {
      const cResult = c.c(28);
      if (cResult[0] !== steps) {
        steps = steps.steps;
        closure_1 = steps;
        const onWillFocus = steps.onWillFocus;
        closure_0 = onWillFocus;
        const tmp8 = _objectWithoutProperties(steps, closure_3);
        cResult[0] = steps;
        cResult[1] = onWillFocus;
        cResult[2] = tmp8;
        cResult[3] = steps;
        let tmp5 = tmp8;
      } else {
        closure_0 = cResult[1];
        tmp5 = cResult[2];
        closure_1 = cResult[3];
      }
      const tmp9 = closure_10();
      const tmp10 = useSafeAreaInsetsDefault();
      [tmp12, dependencyMap] = noop.useState(0);
      if (cResult[4] === tmp4) {
        if (cResult[5] === arr) {
          let tmp13 = cResult[6];
        }
        const sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp10.top;
        if (cResult[7] !== sum) {
          const obj2 = { height: sum };
          cResult[7] = sum;
          cResult[8] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp13) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp15) {
              let tmp16 = cResult[12];
            }
            if (cResult[13] !== tmp10.top) {
              const obj3 = { marginTop: tmp10.top };
              cResult[13] = tmp10.top;
              cResult[14] = obj3;
              let tmp22 = obj3;
            } else {
              tmp22 = cResult[14];
            }
            if (cResult[15] === tmp9.stepContainer) {
              if (cResult[16] === tmp22) {
                let tmp23 = cResult[17];
              }
              let num16;
              if (arr != null) {
                num16 = arr.length;
              }
              if (num16 == null) {
                num16 = 0;
              }
              if (cResult[18] === tmp12) {
                if (cResult[19] === num16) {
                  let tmp25 = cResult[20];
                }
                if (cResult[21] === tmp23) {
                  if (cResult[22] === tmp25) {
                    let tmp28 = cResult[23];
                  }
                  if (cResult[24] === tmp9.container) {
                    if (cResult[25] === tmp16) {
                      if (cResult[26] === tmp28) {
                        let tmp32 = cResult[27];
                      }
                      return tmp32;
                    }
                  }
                  const obj4 = { style: tmp9.container, children: null };
                  const items = [tmp16, tmp28];
                  obj4.children = items;
                  const tmp35 = options(View, obj4);
                  cResult[24] = tmp9.container;
                  cResult[25] = tmp16;
                  cResult[26] = tmp28;
                  cResult[27] = tmp35;
                  tmp32 = tmp35;
                }
                const obj5 = { style: tmp23, pointerEvents: "box-none", children: tmp25 };
                const tmp31 = closure_1_8(View, obj5);
                cResult[21] = tmp23;
                cResult[22] = tmp25;
                cResult[23] = tmp31;
                tmp28 = tmp31;
              }
              const obj6 = { currentStep: tmp12, totalSteps: num16 };
              const tmp27 = closure_1_8(ModalStepIndicator.ModalStepIndicator, obj6);
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
        const obj7 = {};
        const merged = Object.assign(tmp5);
        obj7.onWillFocus = tmp13;
        obj7.headerStyle = tmp15;
        obj7.hideTitle = true;
        const tmp21 = closure_1_8(Modal.Modal, obj7);
        cResult[9] = tmp13;
        cResult[10] = tmp5;
        cResult[11] = tmp15;
        cResult[12] = tmp21;
        tmp16 = tmp21;
      }
      const fn = function _(arg0) {
        let num;
        if (closure_1 != null) {
          num = closure_1.indexOf(tmp.name);
        }
        if (num == null) {
          num = 0;
        }
        dependencyMap(num);
        if (closure_0 != null) {
          closure_0(arg0);
        }
      };
      cResult[4] = tmp4;
      cResult[5] = arr;
      cResult[6] = fn;
      tmp13 = fn;
      const tmp11 = _slicedToArray(noop.useState(0), 2);
    }
  : function StepModal(steps) {
      steps = steps.steps;
      const onWillFocus = steps.onWillFocus;
      const merged = Object.assign(steps, Object.assign({ steps: 0, onWillFocus: 0 }));
      const tmp2 = closure_10();
      const tmp3 = useSafeAreaInsetsDefault();
      const tmp4 = _slicedToArray(noop.useState(0), 2);
      closure_2 = tmp4[1];
      const items = [onWillFocus, steps];
      const obj = { style: tmp2.container, children: null };
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
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.onWillFocus = callback;
      obj2.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + tmp3.top };
      obj2.hideTitle = true;
      const items1 = [closure_1_8(Modal.Modal, obj2)];
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
      obj4.children = closure_1_8(ModalStepIndicator.ModalStepIndicator, obj5);
      items1[1] = closure_1_8(View, obj4);
      obj.children = items1;
      return options(View, obj);
    };
