// === Module 17897: externalFingerprint ===

// Module 17897 (externalFingerprint)
import DispatcherDefault from "Dispatcher" /* 573 */;
import keysSorter from "keysSorter" /* 5456 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!AuthenticationStore.isAuthenticated()) {
    let obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint };
      DispatcherDefault.dispatch(obj);
    }
  }
};