// discord_app/modules/auth/externalFingerprint.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import keysSorter from "../../../_runtime/04376_keysSorter.js";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";

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