// === Module 5360: useAccessibilityViewIsModalToggle ===

// Module 5360 (useAccessibilityViewIsModalToggle)
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5361 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAccessibilityViewIsModalToggle(arg0) {
  const cResult = nativeID(576).c(6);
  ({ accessibilityViewIsModal, nativeID } = arg0);
  closure_1 = tmp2;
  dependencyMap = noop.useRef(undefined);
  if (cResult[0] === (undefined !== accessibilityViewIsModal && accessibilityViewIsModal)) {
    if (cResult[1] === nativeID) {
      let tmp3 = cResult[2];
    }
    noop = tmp3;
    if (cResult[3] !== tmp3) {
      const fn2 = function v() {
        closure_3();
        return () => {
          closure_1_3(false);
        };
      };
      let items = [tmp3];
      cResult[3] = tmp3;
      cResult[4] = fn2;
      cResult[5] = items;
      let tmp5 = items;
      let tmp4 = fn2;
    } else {
      tmp4 = cResult[4];
      tmp5 = cResult[5];
    }
    const effect = noop.useEffect(tmp4, tmp5);
  }
  const fn = function l(arg0) {
    let tmp = arg0;
    if (undefined === arg0) {
      tmp = closure_1;
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
  };
  cResult[0] = undefined !== accessibilityViewIsModal && accessibilityViewIsModal;
  cResult[1] = nativeID;
  cResult[2] = fn;
  tmp3 = fn;
}) : (function useAccessibilityViewIsModalToggle(accessibilityViewIsModal) {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  const nativeID = accessibilityViewIsModal.nativeID;
  let callback;
  callback.useRef(undefined);
  let items = [flag, nativeID];
  callback = callback.useCallback(() => {
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
  const effect = callback.useEffect(() => {
    callback();
    return () => {
      callback(false);
    };
  }, items1);
});