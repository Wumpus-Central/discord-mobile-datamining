// === Module 18048: externalFingerprint ===

// Module 18048 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 573 */;
import keysSorter from "keysSorter" /* 5541 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    const obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      const obj4 = { type: "FINGERPRINT", fingerprint };
      DispatcherDefault.dispatch(obj4);
    }
  }
};