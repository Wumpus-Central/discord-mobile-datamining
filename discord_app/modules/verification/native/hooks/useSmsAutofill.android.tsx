// === Module 8656: SmsAutofillManager ===

// Module 8656 (SmsAutofillManager)
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const SmsAutofillManager = get_ActivityIndicator.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(SmsAutofillManager);
const result = require("obj132").fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  const React = arg0;
  const items = [arg0];
  const callback = React.useCallback((code) => callback(code.code), items);
  const items1 = [callback];
  return React.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("verificationCodeReceived", callback);
    callback.startSmsRetriever();
    return () => {
      closure_0.remove();
    };
  }, items1);
};