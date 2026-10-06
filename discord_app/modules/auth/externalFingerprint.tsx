// discord_app/modules/auth/externalFingerprint.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import _mod5642 from "../../../_runtime/metro/05642__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
