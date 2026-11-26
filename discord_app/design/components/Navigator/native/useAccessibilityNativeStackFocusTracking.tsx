// === Module 15476: useAccessibilityNativeStackFocusTracking ===

// Module 15476 (useAccessibilityNativeStackFocusTracking)
import setAccessibilityFocusPreviousDefault from "setAccessibilityFocusPrevious" /* 6049 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 6051 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx");

export function useAccessibilityNativeStackFocusTracking() {
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
}