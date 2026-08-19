// === Module 4731: setAccessibilityFocus ===

// Module 4731 (setAccessibilityFocus)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ AccessibilityInfo: c0, findNodeHandle: closure_1 } = get_ActivityIndicator);
let result = obj132.fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

export const setAccessibilityFocus = function setAccessibilityFocus(arg0) {
  ({ ref, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  closure_0 = undefined;
  if (null != ref) {
    const tmp2 = callback(ref.current);
    closure_0 = tmp2;
    if (null != tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = accessibilityFocus.setAccessibilityFocus(accessibilityFocus);
      }, delay);
    }
  }
};