// === Module 17191: useAnnounceError ===

// Module 17191 (useAnnounceError)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/useAnnounceError.tsx");

export function useAnnounceError(arg0) {
  closure_0 = arg0;
  items = [arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== closure_0;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(closure_0);
    }
  }, items);
}