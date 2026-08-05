// discord_app/modules/auth/externalFingerprint.tsx
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = require("../../../_runtime/05140_keysSorter.js") /* keysSorter */;
    const fingerprint = obj.parse(require("../../../_runtime/05140_keysSorter.js") /* keysSorter */.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      require("../../Dispatcher.tsx").dispatch(obj);
      const obj3 = require("../../Dispatcher.tsx");
    }
    const obj2 = require("../../../_runtime/05140_keysSorter.js") /* keysSorter */;
  }
};