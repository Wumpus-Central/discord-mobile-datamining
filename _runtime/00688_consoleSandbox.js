// === Module 688: consoleSandbox ===

// Module 688 (consoleSandbox)
import _mod685 from "module_685" /* 685 */;
import _mod687 from "module_687" /* 687 */;
import _mod689 from "module_689" /* 689 */;

require = arg1;
let dependencyMap = arg6;
function consoleSandbox(fn) {
  if ("console" in console(685).GLOBAL_OBJ) {
    console = tmp(685).GLOBAL_OBJ.console;
    dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((item) => {
      closure_1[item] = console[item];
      console[item] = obj[item];
    });
    try {
      const item1 = keys.forEach((item) => {
        console[item] = closure_1[item];
      });
      return fn();
    } catch (tmp8) {
      const item2 = arr.forEach((item) => {
        console[item] = closure_1[item];
      });
      throw tmp8;
    }
  } else {
    return fn();
  }
  tmp = console;
}
function _maybeLog(arg0) {
  _require = arg0;
  dependencyMap = [...arguments].slice();
  let str = _require;
  let fn = dependencyMap;
  const DEBUG_BUILD = require("module_687").DEBUG_BUILD;
  if (!DEBUG_BUILD) {
    if (DEBUG_BUILD) {
      consoleSandbox(() => {
        const _console = _mod685.GLOBAL_OBJ.console;
        const items = ["Sentry Logger [" + closure_0 + "]:", ...closure_1];
        _console[closure_0].apply(items);
      });
    }
  } else {
    if (str(687).DEBUG_BUILD) {
      str = "loggerSettings";
      fn = () => ({ enabled: false });
      let globalSingleton = str(689).getGlobalSingleton("loggerSettings", fn);
      const strResult = str(689);
    } else {
      globalSingleton = { enabled: false };
    }
    const enabled = globalSingleton.enabled;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const originalConsoleMethods = {};

export const CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
export { consoleSandbox };
export const debug = {
  enable() {
    if (_mod687.DEBUG_BUILD) {
      let globalSingleton = _mod689.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = _mod689;
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = true;
  },
  disable() {
    if (_mod687.DEBUG_BUILD) {
      let globalSingleton = _mod689.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = _mod689;
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = false;
  },
  isEnabled() {
    if (_mod687.DEBUG_BUILD) {
      let globalSingleton = _mod689.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = _mod689;
    } else {
      globalSingleton = { enabled: false };
    }
    return globalSingleton.enabled;
  },
  log() {
    const items = ["log"];
    HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
    _maybeLog();
  },
  warn() {
    const items = ["warn"];
    HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
    _maybeLog();
  },
  error() {
    const items = ["error"];
    HermesBuiltin.arraySpread(HermesBuiltin.copyRestArgs(), 1);
    _maybeLog();
  }
};
export { originalConsoleMethods };