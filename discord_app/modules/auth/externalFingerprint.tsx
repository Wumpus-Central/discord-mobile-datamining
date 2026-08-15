// discord_app/modules/auth/externalFingerprint.tsx
import fetchFingerprint from "fetchFingerprint";
import { keysSorter } from "../../../_runtime/04376_keysSorter.js";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/auth/externalFingerprint.tsx");

export default function externalFingerprint(arg0) {
  if (!authenticated.isAuthenticated()) {
    let obj = keysSorter;
    const fingerprint = obj.parse(keysSorter.extract(arg0)).fingerprint;
    if (null != fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint: null };
      obj[1] = fingerprint;
      dispatcher.dispatch(obj);
      const obj3 = dispatcher;
    }
    const obj2 = keysSorter;
  }
};