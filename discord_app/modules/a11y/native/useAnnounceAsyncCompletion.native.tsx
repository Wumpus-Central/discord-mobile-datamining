// discord_app/modules/a11y/native/useAnnounceAsyncCompletion.native.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { AccessibilityInfo } from "../../../../_runtime/00017_get_ActivityIndicator.js";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/a11y/native/useAnnounceAsyncCompletion.native.tsx");

export default function useAnnounceAsyncCompletion() {
  closure_0 = React.useRef(null);
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
    const AccessibilityAnnouncer = ref(dependencyMap[2]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(intl, str);
    if (obj.isIOS()) {
      if (tmpResult.getIsScreenReaderEnabled()) {
        let current = ref.current;
        if (current != null) {
          current();
        }
        let resolved = new Promise((arg0) => {
          closure_0 = arg0;
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
          closure_0.current = () => {
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
    obj = intl(dependencyMap[3]);
  }, []);
};