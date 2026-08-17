// discord_app/design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx
import closure_2 from "noop" /* 19 */;

let result = require("set").fileFinishedImporting("design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx");

export default function useAccessibilityViewIsModalToggle(accessibilityViewIsModal) {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  const nativeID = accessibilityViewIsModal.nativeID;
  let React;
  let callback;
  React = React.useRef(undefined);
  let items = [flag, nativeID];
  callback = React.useCallback(() => {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = flag;
    }
    if (tmp) {
      if (null == nativeID) {
        const _Error = Error;
        error = new Error("Must have a unique nativeID when accessibilityViewIsModal is enabled.");
        throw error;
      } else if (ref.current !== tmp6) {
        ref.current = tmp6;
        const items = [tmp6];
        const result = flag(nativeID[1]).enableAccessibilityFocusLock(items);
        const obj2 = flag(nativeID[1]);
      }
    } else {
      const current = ref.current;
      if (null != current) {
        ref.current = undefined;
        const items1 = [current];
        const result1 = flag(nativeID[1]).disableAccessibilityFocusLock(items1);
        const obj = flag(nativeID[1]);
      }
    }
  }, items);
  let items1 = [callback];
  const effect = React.useEffect(() => {
    callback();
    return () => {
      callback(false);
    };
  }, items1);
};