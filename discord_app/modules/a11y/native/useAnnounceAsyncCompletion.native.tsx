// discord_app/modules/a11y/native/useAnnounceAsyncCompletion.native.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const AccessibilityInfo = fn(17).AccessibilityInfo;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnnounceAsyncCompletion() {
      const cResult = require("c").c(3);
      _require = noop.useRef(null);
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
      const effect = noop.useEffect(tmp2, tmp3);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s(intl, polite) {
          let str = "assertive";
          if (undefined !== polite) {
            str = polite;
          }
          const AccessibilityAnnouncer = ref(4969).AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(intl, str);
          if (obj.isIOS()) {
            if (tmpResult.getIsScreenReaderEnabled()) {
              let current = ref.current;
              if (current != null) {
                current();
              }
              let resolved = new Promise((arg0) => {
                const timeout = setTimeout(() => {
                  const current = ref.current;
                  let currentResult;
                  if (current != null) {
                    currentResult = current();
                  }
                  return currentResult;
                }, 1800);
                closure_2 = AccessibilityInfo.addEventListener("announcementFinished", (event) => {
                  if (tmp) {
                    const current = ref.current;
                    if (current != null) {
                      current();
                    }
                  }
                });
                arg0.current = () => {
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
          obj = intl(1382);
        };
        cResult[2] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function useAnnounceAsyncCompletion() {
      noop.useRef(null);
      const effect = noop.useEffect(
        () => () => {
          const current = ref.current;
          if (current != null) {
            current();
          }
          ref.current = null;
        },
        [],
      );
      return noop.useCallback((intl) => {
        let str = polite;
        if (polite === undefined) {
          str = "assertive";
        }
        const AccessibilityAnnouncer = ref(4969).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(intl, str);
        if (obj.isIOS()) {
          if (tmpResult.getIsScreenReaderEnabled()) {
            let current = ref.current;
            if (current != null) {
              current();
            }
            let resolved = new Promise((arg0) => {
              const timeout = setTimeout(() => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              }, 1800);
              closure_2 = AccessibilityInfo.addEventListener("announcementFinished", (event) => {
                if (tmp) {
                  const current = ref.current;
                  if (current != null) {
                    current();
                  }
                }
              });
              arg0.current = () => {
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
        obj = intl(1382);
      }, []);
    };
