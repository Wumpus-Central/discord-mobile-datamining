// discord_app/modules/verification/native/hooks/useSmsAutofill.android.tsx
import closure_0 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const SmsAutofillManager = get_ActivityIndicator.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(SmsAutofillManager);
const result = require("set").fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  const React = arg0;
  const items = [arg0];
  const callback = React.useCallback((code) => callback(code.code), items);
  const items1 = [callback];
  return React.useEffect(() => {
    closure_0 = closure_1_2.addListener("verificationCodeReceived", callback);
    callback.startSmsRetriever();
    return () => {
      closure_0.remove();
    };
  }, items1);
};