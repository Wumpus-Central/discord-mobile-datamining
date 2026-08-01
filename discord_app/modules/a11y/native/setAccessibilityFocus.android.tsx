// === Module 4600: setAccessibilityFocus ===

// Module 4600 (setAccessibilityFocus)
import get_ActivityIndicator from "get ActivityIndicator";

let c3;
let c4;
({ AccessibilityInfo: c3, findNodeHandle: c4 } = get_ActivityIndicator);
let c5 = new require("isFabric")("setAccessibilityFocus");
const tmp3 = new require("isFabric")("setAccessibilityFocus");
let result = require("enforcing").fileFinishedImporting("modules/a11y/native/setAccessibilityFocus.android.tsx");

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
        if (obj.isFabric()) {
          const result = outer1_3.setAccessibilityFocus(_undefined);
        } else {
          const result1 = outer1_1(outer1_2[2]).setAccessibilityFocus(_undefined);
          result1.catch((arg0) => logger.warn("Failed with reason:", arg0));
          const obj2 = outer1_1(outer1_2[2]);
        }
      }, delay);
    }
  }
};