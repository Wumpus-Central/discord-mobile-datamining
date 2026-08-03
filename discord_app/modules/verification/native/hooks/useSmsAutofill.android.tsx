import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";

const SmsAutofillManager = get_ActivityIndicator.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(SmsAutofillManager);
const result = require("set").fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  const React = arg0;
  const items = [arg0];
  const callback = React.useCallback((code) => callback(code.code), items);
  const items1 = [callback];
  return React.useEffect(() => {
    let noop = outer1_2.addListener("verificationCodeReceived", callback);
    callback.startSmsRetriever();
    return () => {
      noop.remove();
    };
  }, items1);
};