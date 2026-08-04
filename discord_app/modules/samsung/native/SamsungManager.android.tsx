// discord_app/modules/samsung/native/SamsungManager.android.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("modules/samsung/native/SamsungManager.android.tsx");

export default {
  checkIfOAuthRequest(closure_0) {
    const Samsung = NativeModules.Samsung;
    return Samsung.checkIfOAuthRequest(closure_0);
  },
  showConnectionDisclaimer() {
    const Samsung = NativeModules.Samsung;
    return Samsung.showConnectionDisclaimer();
  },
  getAccountUrlAndAuthCode() {
    const Samsung = NativeModules.Samsung;
    return Samsung.getAccountUrlAndAuthCode();
  },
  finishSamsungAuthorization(arg0, arg1, closure_5) {
    const Samsung = NativeModules.Samsung;
    return Samsung.finishSamsungAuthorization(arg0, arg1, closure_5);
  }
};