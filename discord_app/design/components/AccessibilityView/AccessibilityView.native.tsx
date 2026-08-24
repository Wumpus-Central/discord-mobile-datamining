// discord_app/design/components/AccessibilityView/AccessibilityView.native.tsx
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import importDefaultResult from "../../../modules/reanimated/ReanimatedRexport.tsx";

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