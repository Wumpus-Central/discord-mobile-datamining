// === Module 6576: useSmsAutofill ===

// Module 6576 (useSmsAutofill)
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const SmsAutofillManager = react_native.NativeModules.SmsAutofillManager;
const nativeEventEmitter = new react_native.NativeEventEmitter(SmsAutofillManager);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let tmp2;
  let tmp3;
  let tmp4;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] !== arg0) {
    const fn = function o(code) {
      return closure_0(code.code);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
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
    tmp4 = items;
    tmp3 = fn2;
  } else {
    tmp3 = cResult[3];
    tmp4 = cResult[4];
  }
  return react.useEffect(tmp3, tmp4);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const callback = react.useCallback((code) => closure_0(code.code), items);
  const items1 = [callback];
  return react.useEffect(() => {
    closure_0 = nativeEventEmitter.addListener("verificationCodeReceived", callback);
    SmsAutofillManager.startSmsRetriever();
    return () => {
      closure_0.remove();
    };
  }, items1);
});
const result = size.fileFinishedImporting("modules/verification/native/hooks/useSmsAutofill.android.tsx");

export default tmp4;