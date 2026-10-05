// === Module 14595: useAnnounceError ===

// Module 14595 (useAnnounceError)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      const tmp2 = null != closure_0 && "" !== closure_0;
      if (tmp2) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_0);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && "" !== closure_0;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(closure_0);
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/webauthn/native/useAnnounceError.tsx");

export const useAnnounceError = tmp2;