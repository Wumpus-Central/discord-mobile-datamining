// === Module 5767: AccessibilityView ===

// Module 5767 (AccessibilityView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle" /* 5768 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import size from "module_2" /* 2 */;

let closure_3 = ["accessibilityViewIsModal", "nativeID", "collapsable", "onAccessibilityEscape"];
const View = react_native.View;
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, ref) {
  let accessibilityViewIsModal;
  let collapsable;
  let nativeID;
  let onAccessibilityEscape;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] !== arg0) {
    ({ accessibilityViewIsModal, nativeID, collapsable, onAccessibilityEscape } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = collapsable;
    cResult[2] = nativeID;
    cResult[3] = onAccessibilityEscape;
    cResult[4] = tmp10;
    cResult[5] = accessibilityViewIsModal;
    tmp7 = accessibilityViewIsModal;
    tmp6 = tmp10;
    tmp5 = onAccessibilityEscape;
    tmp4 = nativeID;
    tmp3 = collapsable;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
  }
  if (undefined !== tmp7 && tmp7) {
    if (null == tmp5) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  if (cResult[6] === (undefined !== tmp7 && tmp7)) {
    let tmp13;
    if (cResult[7] === tmp4) {
      tmp13 = cResult[8];
    }
    useAccessibilityViewIsModalToggleDefault(tmp13);
    if (cResult[9] === (undefined !== tmp7 && tmp7)) {
      if (cResult[10] === tmp4) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === ref) {
              let tmp19;
              if (cResult[14] === (null == tmp4 && tmp3)) {
                tmp19 = cResult[15];
              }
              return tmp19;
            }
          }
        }
      }
    }
    const merged = Object.assign(tmp6);
    const tmp25 = <View ref={ref} nativeID={tmp4} collapsable={null == tmp4 && tmp3} onAccessibilityEscape={tmp5} accessibilityViewIsModal={undefined !== tmp7 && tmp7} />;
    cResult[9] = undefined !== tmp7 && tmp7;
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp6;
    cResult[13] = ref;
    cResult[14] = null == tmp4 && tmp3;
    cResult[15] = tmp25;
    tmp19 = tmp25;
  }
  const obj3 = { accessibilityViewIsModal: undefined !== tmp7 && tmp7, nativeID: tmp4 };
  cResult[6] = undefined !== tmp7 && tmp7;
  cResult[7] = tmp4;
  cResult[8] = obj3;
  tmp13 = obj3;
}) : (function(accessibilityViewIsModal, ref) {
  let nativeID;
  let onAccessibilityEscape;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  const collapsable = accessibilityViewIsModal.collapsable;
  const merged = Object.assign(accessibilityViewIsModal, Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0 }));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
  const tmp5 = null == nativeID && collapsable;
  const merged1 = Object.assign(merged);
  return <View ref={ref} nativeID={nativeID} collapsable={tmp5} onAccessibilityEscape={onAccessibilityEscape} accessibilityViewIsModal={flag} />;
}));
const animatedComponent = ReanimatedRexport.createAnimatedComponent(forwardRefResult);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;