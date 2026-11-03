// _runtime/01924_ConfigHelperNative.js
import _mod1665 from "metro/01665__.js";
import _mod1705 from "metro/01705__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {
  code: "(function pnpm_ConfigHelperNativeTs1(data){let[scheduleOnRN,onLog]=this.__closure;scheduleOnRN(onLog,data);})",
};

export function configureReanimatedLogger(level, onLog) {
  const loggerConfig = _mod1665.getLoggerConfig();
  _mod1665.updateLoggerConfig(loggerConfig, level, onLog);
  let tmp5;
  if (onLog) {
    items = [closure_2, _mod1705.scheduleOnRN, onLog];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items;
    function pnpm_ConfigHelperNativeTs1(arg0) {
      _undefined(c1, arg0);
    }
    const items1 = [tmp9, tmp10];
    pnpm_ConfigHelperNativeTs1.__closure = items1;
    pnpm_ConfigHelperNativeTs1.__workletHash = 13162738946874;
    pnpm_ConfigHelperNativeTs1.__initData = tmp8;
    tmp5 = pnpm_ConfigHelperNativeTs1;
  }
  _mod1705.runOnUISync(_mod1665.updateLoggerConfig, loggerConfig, level, tmp5);
  const tmpResult = _mod1705;
}
