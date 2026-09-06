// === Module 14172: useAccessibilityNativeStackFocusTracking ===

// Module 14172 (useAccessibilityNativeStackFocusTracking)
import setAccessibilityFocusPreviousDefault from "setAccessibilityFocusPrevious" /* 4907 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 4909 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export const useAccessibilityNativeStackFocusTracking = function useAccessibilityNativeStackFocusTracking() {
  return noop.useMemo(() => {
    c0 = false;
    return {
      transitionStart(data) {
        if (data.data.closing) {
          markAccessibilityFocusDefault();
        } else if (c0) {
          c0 = false;
          setAccessibilityFocusPreviousDefault();
        }
      },
      beforeRemove() {
        c0 = true;
      }
    };
  }, []);
};