// discord_app/modules/a11y/native/setAccessibilityFocus.android.tsx
import get_ActivityIndicator from "get ActivityIndicator";

let c0;
let closure_1;
({ AccessibilityInfo: c0, findNodeHandle: closure_1 } = get_ActivityIndicator);
let result = require("set").fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

export const setAccessibilityFocus = function setAccessibilityFocus(arg0) {
  let delay;
  let ref;
  ({ ref, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  let c0;
  if (null != ref) {
    const tmp2 = callback(ref.current);
    c0 = tmp2;
    if (null != tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = _undefined.setAccessibilityFocus(_undefined);
      }, delay);
    }
  }
};