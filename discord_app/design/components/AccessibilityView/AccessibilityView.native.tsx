// === Module 4959: AccessibilityView ===

// Module 4959 (AccessibilityView)
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle" /* 4960 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const forwardRefResult = noop.forwardRef((accessibilityViewIsModal, ref) => {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  const merged = Object.assign(accessibilityViewIsModal, Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0 }));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
  const obj = { ref, nativeID, collapsable: null, onAccessibilityEscape: null, accessibilityViewIsModal: null };
  let collapsable = null == nativeID;
  if (collapsable) {
    collapsable = accessibilityViewIsModal.collapsable;
  }
  obj.collapsable = collapsable;
  obj.onAccessibilityEscape = onAccessibilityEscape;
  obj.accessibilityViewIsModal = flag;
  const merged1 = Object.assign(merged);
  return <View ref={arg1} nativeID={nativeID} collapsable={null} onAccessibilityEscape={null} accessibilityViewIsModal={null} />;
});
const animatedComponent = ReanimatedRexport.createAnimatedComponent(forwardRefResult);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;