// discord_app/modules/a11y/native/setAccessibilityFocus.android.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

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