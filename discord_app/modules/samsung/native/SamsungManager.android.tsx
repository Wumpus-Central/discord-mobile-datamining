// === Module 9239: SamsungManager ===

// Module 9239 (SamsungManager)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/samsung/native/SamsungManager.android.tsx");

export default {
  checkIfOAuthRequest(arg0) {
    const Samsung = NativeModules.Samsung;
    return Samsung.checkIfOAuthRequest(arg0);
  },
  showConnectionDisclaimer() {
    const Samsung = NativeModules.Samsung;
    return Samsung.showConnectionDisclaimer();
  },
  getAccountUrlAndAuthCode() {
    const Samsung = NativeModules.Samsung;
    return Samsung.getAccountUrlAndAuthCode();
  },
  finishSamsungAuthorization(arg0, arg1, text1) {
    const Samsung = NativeModules.Samsung;
    return Samsung.finishSamsungAuthorization(arg0, arg1, text1);
  }
};