// === Module 4649: AccessibilityView ===

// Module 4649 (AccessibilityView)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import importDefaultResult from "module_4116";

const forwardRefResult = require("noop").forwardRef((accessibilityViewIsModal, ref) => {
  let nativeID;
  let onAccessibilityEscape;
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
  const merged = Object.assign(accessibilityViewIsModal, Object.create(null));
  if (flag) {
    if (null == onAccessibilityEscape) {
      const _Error = Error;
      const error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
      throw error;
    }
  }
  importDefault(4650)({ accessibilityViewIsModal: flag, nativeID });
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
const animatedComponent = require("module_4116").createAnimatedComponent(forwardRefResult);
const result = require("jsxProd").fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;