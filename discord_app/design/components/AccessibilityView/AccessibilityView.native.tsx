// === Module 4912: AccessibilityView ===

// Module 4912 (AccessibilityView)
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle" /* 4913 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult from "module_4217" /* 4217 */;

const forwardRefResult = importAllResult.forwardRef((accessibilityViewIsModal, ref) => {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  const merged = Object.assign(accessibilityViewIsModal, Object.create(null));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
  const obj = { ref, nativeID, collapsable: null, onAccessibilityEscape: null, accessibilityViewIsModal: null };
  let collapsable = null == nativeID;
  if (collapsable) {
    collapsable = accessibilityViewIsModal.collapsable;
  }
  obj[2] = collapsable;
  obj[3] = onAccessibilityEscape;
  obj[4] = flag;
  const merged1 = Object.assign(merged);
  return <View ref={arg1} nativeID={nativeID} collapsable={null} onAccessibilityEscape={null} accessibilityViewIsModal={null} />;
});
const animatedComponent = importDefaultResult.createAnimatedComponent(forwardRefResult);
const result = require("set").fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;