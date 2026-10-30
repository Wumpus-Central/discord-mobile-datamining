// discord_app/modules/verification/native/hooks/useSmsAutofill.android.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
const SmsAutofillManager = get_ActivityIndicator.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(SmsAutofillManager);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default function useSmsAutofill(arg0) {
  noop = arg0;
  const items = [arg0];
  const callback = noop.useCallback((code) => closure_0(code.code), items);
  const items1 = [callback];
  return noop.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("verificationCodeReceived", callback);
    SmsAutofillManager.startSmsRetriever();
    return () => {
      closure_0.remove();
    };
  }, items1);
}
