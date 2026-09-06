// === Module 4971: setAccessibilityFocus ===

// Module 4971 (setAccessibilityFocus)
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

({ AccessibilityInfo: closure_0, findNodeHandle: closure_1 } = get_ActivityIndicator);
let result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

export const setAccessibilityFocus = function setAccessibilityFocus(arg0) {
  ({ ref, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  closure_0 = undefined;
  if (null != ref) {
    const tmp2 = closure_1(ref.current);
    closure_0 = tmp2;
    if (null != tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = accessibilityFocus.setAccessibilityFocus(closure_0);
      }, delay);
    }
  }
};