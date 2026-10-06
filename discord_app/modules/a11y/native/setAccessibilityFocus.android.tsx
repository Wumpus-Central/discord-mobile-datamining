// === Module 5786: react-native ===

// Module 5786 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ AccessibilityInfo: _window, findNodeHandle: map } = react_native);
let result = size.fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

export const setAccessibilityFocus = function setAccessibilityFocus(arg0) {
  let delay;
  let ref;
  ({ ref, delay } = arg0);
  if (delay === undefined) {
    delay = 0;
  }
  let closure_0;
  if (null != ref) {
    const tmp2 = closure_1(ref.current);
    closure_0 = tmp2;
    if (null != tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = _window.setAccessibilityFocus(closure_0);
      }, delay);
    }
  }
};