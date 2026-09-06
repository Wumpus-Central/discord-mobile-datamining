// === Module 10927: useAnnounceAsyncCompletion ===

// Module 10927 (useAnnounceAsyncCompletion)
import noop from "module_19" /* 19 */;

const require = fn;
const AccessibilityInfo = fn(17).AccessibilityInfo;
const size = fn(2);
const result = size.fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default function useAnnounceAsyncCompletion() {
  noop.useRef(null);
  const effect = noop.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    ref.current = null;
  }, []);
  return noop.useCallback((intl) => {
    let str = polite;
    if (polite === undefined) {
      str = "assertive";
    }
    const AccessibilityAnnouncer = ref(4411).AccessibilityAnnouncer;
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
    obj = intl(1115);
  }, []);
};