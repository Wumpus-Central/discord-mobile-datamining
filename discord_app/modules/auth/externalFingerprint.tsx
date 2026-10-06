// === Module 18136: externalFingerprint ===

// Module 18136 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 584 */;
import _mod5642 from "module_5642" /* 5642 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const parse = _mod5642.parse;
    _mod5642;
    const obj = _mod5642;
    const fingerprint = parse(obj.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj3 = { type: "FINGERPRINT", fingerprint };
      const obj2 = DispatcherDefault;
      obj2.dispatch(obj3);
    }
  }
};