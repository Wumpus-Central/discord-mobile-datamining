// === Module 17713: externalFingerprint ===

// Module 17713 (externalFingerprint)
import dispatcherDefault from "dispatcher" /* 706 */;
import keysSorter from "keysSorter" /* 5406 */;
import closure_3 from "fetchFingerprint" /* 1215 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      dispatcherDefault.dispatch(obj);
      const obj3 = dispatcherDefault;
    }
    const obj2 = keysSorter;
  }
};