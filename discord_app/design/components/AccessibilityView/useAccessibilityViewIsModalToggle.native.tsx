// === Module 4960: useAccessibilityViewIsModalToggle ===

// Module 4960 (useAccessibilityViewIsModalToggle)
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 4961 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
let result = size.fileFinishedImporting("design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx");

export default function useAccessibilityViewIsModalToggle(accessibilityViewIsModal) {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  const nativeID = accessibilityViewIsModal.nativeID;
  noop = undefined;
  noop = noop.useRef(undefined);
  let items = [flag, nativeID];
  const callback = noop.useCallback(() => {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = flag;
    }
    if (tmp) {
      if (null == nativeID) {
        const _Error = Error;
        const error = new Error("Must have a unique nativeID when accessibilityViewIsModal is enabled.");
        throw error;
      } else if (ref.current !== nativeID) {
        ref.current = nativeID;
        const items = [nativeID];
        const result = AccessibilityFocusLockManagerDefault.enableAccessibilityFocusLock(items);
      }
    } else {
      const current = ref.current;
      if (null != current) {
        ref.current = undefined;
        const items1 = [current];
        const result1 = AccessibilityFocusLockManagerDefault.disableAccessibilityFocusLock(items1);
      }
    }
  }, items);
  let items1 = [callback];
  const effect = noop.useEffect(() => {
    callback();
    return () => {
      callback(false);
    };
  }, items1);
};