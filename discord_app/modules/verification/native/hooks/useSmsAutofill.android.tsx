// === Module 6576: useSmsAutofill ===

// Module 6576 (useSmsAutofill)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
const SmsAutofillManager = get_ActivityIndicator.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(SmsAutofillManager);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] !== arg0) {
    const fn = function o(code) {
      return closure_0(code.code);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  dependencyMap = tmp2;
  if (cResult[2] !== tmp2) {
    const fn2 = function c() {
      closure_0 = nativeEventEmitter.addListener("verificationCodeReceived", closure_1);
      SmsAutofillManager.startSmsRetriever();
      return () => {
        closure_0.remove();
      };
    };
    const items = [tmp2];
    cResult[2] = tmp2;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp4 = items;
    let tmp3 = fn2;
  } else {
    tmp3 = cResult[3];
    tmp4 = cResult[4];
  }
  return noop.useEffect(tmp3, tmp4);
}) : ((arg0) => {
  closure_0 = arg0;
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
});