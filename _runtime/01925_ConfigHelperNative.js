// === Module 1925: ConfigHelperNative ===

// Module 1925 (ConfigHelperNative)
import _mod1666 from "module_1666" /* 1666 */;
import _mod1706 from "module_1706" /* 1706 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_ConfigHelperNativeTs1(data){let[scheduleOnRN,onLog]=this.__closure;scheduleOnRN(onLog,data);})" };

export function configureReanimatedLogger(level, onLog) {
  const loggerConfig = _mod1666.getLoggerConfig();
  _mod1666.updateLoggerConfig(loggerConfig, level, onLog);
  let tmp5;
  if (onLog) {
    items = [closure_2, _mod1706.scheduleOnRN, onLog];
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
  _mod1706.runOnUISync(_mod1666.updateLoggerConfig, loggerConfig, level, tmp5);
  const tmpResult = _mod1706;
}