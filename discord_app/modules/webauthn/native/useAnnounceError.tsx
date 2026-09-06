// === Module 14675: useAnnounceError ===

// Module 14675 (useAnnounceError)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/useAnnounceError.tsx");

export const useAnnounceError = function useAnnounceError(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = "" !== tmp;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp);
    }
  }, items);
};