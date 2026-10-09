// === Module 5358: AccessibilityView ===

// Module 5358 (AccessibilityView)
import c from "c" /* 576 */;
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle" /* 5359 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;

require = fn;
let closure_3 = ["accessibilityViewIsModal", "nativeID", "collapsable", "onAccessibilityEscape", "ref"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AccessibilityView(arg0) {
  const cResult = c.c(17);
  if (cResult[0] !== arg0) {
    ({ accessibilityViewIsModal, nativeID, collapsable, onAccessibilityEscape, ref } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = collapsable;
    cResult[2] = nativeID;
    cResult[3] = onAccessibilityEscape;
    cResult[4] = tmp11;
    cResult[5] = ref;
    cResult[6] = accessibilityViewIsModal;
    let tmp8 = accessibilityViewIsModal;
    let tmp7 = ref;
    let tmp6 = tmp11;
    let tmp5 = onAccessibilityEscape;
    let tmp4 = nativeID;
    let tmp3 = collapsable;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
  }
  if (undefined !== tmp8 && tmp8) {
    if (null == tmp5) {
      const _Error = Error;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  if (cResult[7] === (undefined !== tmp8 && tmp8)) {
    if (cResult[8] === tmp4) {
      let tmp14 = cResult[9];
    }
    useAccessibilityViewIsModalToggleDefault(tmp14);
    if (cResult[10] === tmp12) {
      if (cResult[11] === tmp4) {
        if (cResult[12] === tmp5) {
          if (cResult[13] === tmp6) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp18) {
                let tmp19 = cResult[16];
              }
              return tmp19;
            }
          }
        }
      }
    }
    const obj2 = { ref: tmp7, nativeID: tmp4, collapsable: null == tmp4 && tmp3, onAccessibilityEscape: tmp5, accessibilityViewIsModal: tmp12 };
    const merged = Object.assign(tmp6);
    const tmp25 = <View ref={tmp7} nativeID={tmp4} collapsable={null == tmp4 && tmp3} onAccessibilityEscape={tmp5} accessibilityViewIsModal={tmp12} />;
    cResult[10] = tmp12;
    cResult[11] = tmp4;
    cResult[12] = tmp5;
    cResult[13] = tmp6;
    cResult[14] = tmp7;
    cResult[15] = null == tmp4 && tmp3;
    cResult[16] = tmp25;
    tmp19 = tmp25;
  }
  const obj3 = { accessibilityViewIsModal: undefined !== tmp8 && tmp8, nativeID: tmp4 };
  cResult[7] = undefined !== tmp8 && tmp8;
  cResult[8] = tmp4;
  cResult[9] = obj3;
  tmp14 = obj3;
}) : (function AccessibilityView(accessibilityViewIsModal) {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  ({ collapsable, ref } = accessibilityViewIsModal);
  const merged = Object.assign(accessibilityViewIsModal, Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0, ref: 0 }));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
  const obj = { ref, nativeID, collapsable: null, onAccessibilityEscape: null, accessibilityViewIsModal: null };
  let tmp5 = null == nativeID;
  if (tmp5) {
    tmp5 = collapsable;
  }
  obj.collapsable = tmp5;
  obj.onAccessibilityEscape = onAccessibilityEscape;
  obj.accessibilityViewIsModal = flag;
  const merged1 = Object.assign(merged);
  return <View ref={ref} nativeID={nativeID} collapsable={null} onAccessibilityEscape={null} accessibilityViewIsModal={null} />;
});
const animatedComponent = ReanimatedRexport.createAnimatedComponent(tmp3);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = tmp3;
export const AccessibilityViewAnimated = animatedComponent;