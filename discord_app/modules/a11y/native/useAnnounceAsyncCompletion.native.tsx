// === Module 10677: useAnnounceAsyncCompletion ===

// Module 10677 (useAnnounceAsyncCompletion)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const AccessibilityInfo = react_native.AccessibilityInfo;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let tmp5;
  let obj = require("react");
  const cResult = obj.c(3);
  _require = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return () => {
        const current = ref.current;
        if (current != null) {
          current();
        }
        ref.current = null;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s(intl, polite) {
      ref = intl;
      let str = "assertive";
      if (undefined !== polite) {
        str = polite;
      }
      let tmp = ref;
      const AccessibilityAnnouncer = ref(dependencyMap[4]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl, str);
      const obj = ref(dependencyMap[5]);
      if (obj.isIOS()) {
        let resolved;
        const tmpResult = tmp(dependencyMap[6]);
        if (tmpResult.getIsScreenReaderEnabled()) {
          let current = ref.current;
          if (current != null) {
            let currentResult = current();
          }
          const self = this;
          const self2 = this;
          resolved = new Promise((arg0) => {
            let closure_1;
            ref = arg0;
            const timeout = setTimeout(() => {
              const current = ref.current;
              let currentResult;
              if (current != null) {
                currentResult = current();
              }
              return currentResult;
            }, 1800);
            let closure_2 = AccessibilityInfo.addEventListener("announcementFinished", (event) => {
              const tmp = event.announcement === ref && event.success;
              if (tmp) {
                const current = ref.current;
                if (current != null) {
                  current();
                }
              }
            });
            ref.current = () => {
              clearTimeout(closure_1);
              closure_2.remove();
              ref.current = null;
              ref();
            };
          });
        }
        return resolved;
      }
      resolved = Promise.resolve();
    };
    cResult[2] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (() => {
  let ref = react.useRef(null);
  const effect = react.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    ref.current = null;
  }, []);
  return react.useCallback(function(intl) {
    ref = intl;
    let str = polite;
    if (polite === undefined) {
      str = "assertive";
    }
    let tmp = ref;
    const AccessibilityAnnouncer = ref(dependencyMap[4]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl, str);
    const obj = ref(dependencyMap[5]);
    if (obj.isIOS()) {
      let resolved;
      const tmpResult = tmp(dependencyMap[6]);
      if (tmpResult.getIsScreenReaderEnabled()) {
        let current = ref.current;
        if (current != null) {
          let currentResult = current();
        }
        const self = this;
        const self2 = this;
        resolved = new Promise((arg0) => {
          let closure_1;
          ref = arg0;
          const timeout = setTimeout(() => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          }, 1800);
          let closure_2 = AccessibilityInfo.addEventListener("announcementFinished", (event) => {
            const tmp = event.announcement === ref && event.success;
            if (tmp) {
              const current = ref.current;
              if (current != null) {
                current();
              }
            }
          });
          ref.current = () => {
            clearTimeout(closure_1);
            closure_2.remove();
            ref.current = null;
            ref();
          };
        });
      }
      return resolved;
    }
    resolved = Promise.resolve();
  }, []);
});
const result = size.fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default tmp2;