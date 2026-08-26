// discord_app/modules/auth/externalFingerprint.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import keysSorter from "../../../_runtime/05345_keysSorter.js";
import closure_3 from "../../stores/AuthenticationStore.tsx";

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