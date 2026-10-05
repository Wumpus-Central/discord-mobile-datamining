// === Module 5768: useAccessibilityViewIsModalToggle ===

// Module 5768 (useAccessibilityViewIsModalToggle)
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5769 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityViewIsModal;
  let closure_3;
  let nativeID;
  let ref;
  let obj = nativeID(576);
  const cResult = obj.c(6);
  ({ accessibilityViewIsModal, nativeID } = arg0);
  let closure_1 = tmp2;
  let obj2 = react;
  dependencyMap = react.useRef(undefined);
  if (cResult[0] === (undefined !== accessibilityViewIsModal && accessibilityViewIsModal)) {
    let tmp3;
    let tmp5;
    let tmp4;
    if (cResult[1] === nativeID) {
      tmp3 = cResult[2];
    }
    react = tmp3;
    if (cResult[3] !== tmp3) {
      const fn2 = function b() {
        closure_3();
        return () => {
          closure_1_3(false);
        };
      };
      let items = [tmp3];
      cResult[3] = tmp3;
      cResult[4] = fn2;
      cResult[5] = items;
      tmp5 = items;
      tmp4 = fn2;
    } else {
      tmp4 = cResult[4];
      tmp5 = cResult[5];
    }
    const effect = obj2.useEffect(tmp4, tmp5);
  }
  const fn = function t(arg0) {
    let tmp = arg0;
    if (undefined === arg0) {
      tmp = closure_1;
    }
    if (tmp) {
      if (null == nativeID) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Must have a unique nativeID when accessibilityViewIsModal is enabled.");
        throw error;
      } else if (ref.current !== nativeID) {
        ref.current = nativeID;
        const items = [nativeID];
        const obj2 = AccessibilityFocusLockManagerDefault;
        const result = obj2.enableAccessibilityFocusLock(items);
      }
    } else {
      const current = ref.current;
      if (null != current) {
        ref.current = undefined;
        const items1 = [current];
        const obj = AccessibilityFocusLockManagerDefault;
        const result1 = obj.disableAccessibilityFocusLock(items1);
      }
    }
  };
  cResult[0] = undefined !== accessibilityViewIsModal && accessibilityViewIsModal;
  cResult[1] = nativeID;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((accessibilityViewIsModal) => {
  let flag = accessibilityViewIsModal.accessibilityViewIsModal;
  if (flag === undefined) {
    flag = false;
  }
  const nativeID = accessibilityViewIsModal.nativeID;
  let callback;
  const ref = callback.useRef(undefined);
  let items = [flag, nativeID];
  callback = callback.useCallback(function() {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = flag;
    }
    if (tmp) {
      if (null == nativeID) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Must have a unique nativeID when accessibilityViewIsModal is enabled.");
        throw error;
      } else if (ref.current !== nativeID) {
        ref.current = nativeID;
        const items = [nativeID];
        const obj2 = AccessibilityFocusLockManagerDefault;
        const result = obj2.enableAccessibilityFocusLock(items);
      }
    } else {
      const current = ref.current;
      if (null != current) {
        ref.current = undefined;
        const items1 = [current];
        const obj = AccessibilityFocusLockManagerDefault;
        const result1 = obj.disableAccessibilityFocusLock(items1);
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
let result = size.fileFinishedImporting("design/components/AccessibilityView/useAccessibilityViewIsModalToggle.native.tsx");

export default tmp2;