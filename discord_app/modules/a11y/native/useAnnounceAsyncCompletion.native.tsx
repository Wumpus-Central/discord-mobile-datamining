// discord_app/modules/a11y/native/useAnnounceAsyncCompletion.native.tsx
import noop from "noop";
import { AccessibilityInfo } from "get ActivityIndicator";

const require = arg1;
const result = require("AccessibilityAnnouncer").fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default function useAnnounceAsyncCompletion() {
  let closure_0 = React.useRef(null);
  const effect = React.useEffect(() => () => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    ref.current = null;
  }, []);
  return React.useCallback((intl, polite) => {
    let str = polite;
    if (polite === undefined) {
      str = "assertive";
    }
    const AccessibilityAnnouncer = ref(outer1_1[2]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl, str);
    if (obj.isIOS()) {
      if (tmpResult.getIsScreenReaderEnabled()) {
        let current = ref.current;
        if (current != null) {
          current();
        }
        let resolved = new Promise((arg0) => {
          let closure_0 = arg0;
          const timeout = setTimeout(() => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          }, 1800);
          let noop = outer2_3.addEventListener("announcementFinished", (announcement) => {
            if (tmp) {
              const current = ref.current;
              if (current != null) {
                current();
              }
            }
          });
          closure_0.current = () => {
            clearTimeout(closure_1);
            noop.remove();
            ref.current = null;
            ref();
          };
        });
      }
      return resolved;
    }
    resolved = Promise.resolve();
  }, []);
};