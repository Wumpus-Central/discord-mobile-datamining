// discord_app/modules/auth/externalFingerprint.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import keysSorter from "../../../_runtime/05456_keysSorter.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

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
}
