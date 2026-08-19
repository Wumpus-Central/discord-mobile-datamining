// === Module 17113: externalFingerprint ===

// Module 17113 (externalFingerprint)
import dispatcherDefault from "dispatcher" /* 709 */;
import keysSorter from "keysSorter" /* 4376 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      dispatcherDefault.dispatch(obj);
    }
  }
};