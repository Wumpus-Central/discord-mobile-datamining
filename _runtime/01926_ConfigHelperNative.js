// === Module 1926: ConfigHelperNative ===

// Module 1926 (ConfigHelperNative)
import _mod1667 from "module_1667" /* 1667 */;
import _mod1707 from "module_1707" /* 1707 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "(function pnpm_ConfigHelperNativeTs1(data){let[scheduleOnRN,onLog]=this.__closure;scheduleOnRN(onLog,data);})" };

export function configureReanimatedLogger(level, onLog) {
  const loggerConfig = _mod1667.getLoggerConfig();
  _mod1667.updateLoggerConfig(loggerConfig, level, onLog);
  let tmp5;
  if (onLog) {
    items = [closure_2, _mod1707.scheduleOnRN, onLog];
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
  _mod1707.runOnUISync(_mod1667.updateLoggerConfig, loggerConfig, level, tmp5);
  const tmpResult = _mod1707;
}