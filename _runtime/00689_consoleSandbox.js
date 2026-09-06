// _runtime/00689_consoleSandbox.js
import _mod686 from "metro/00686__.js";
import _mod688 from "metro/00688__.js";
import _mod690 from "metro/00690__.js";

require = arg1;
let dependencyMap = arg6;
function consoleSandbox(fn) {
  if ("console" in console(686).GLOBAL_OBJ) {
    console = console(686).GLOBAL_OBJ.console;
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
}
function _maybeLog(arg0) {
  _require = arg0;
  dependencyMap = [...arguments].slice();
  let str = _require;
  let fn = dependencyMap;
  const DEBUG_BUILD = require("metro/00688__.js").DEBUG_BUILD;
  if (!DEBUG_BUILD) {
    if (DEBUG_BUILD) {
      consoleSandbox(() => {
        const _console = _mod686.GLOBAL_OBJ.console;
        const items = ["Sentry Logger [" + closure_0 + "]:", ...closure_1];
        _console[closure_0].apply(items);
      });
    }
  } else {
    if (str(688).DEBUG_BUILD) {
      str = "loggerSettings";
      fn = () => ({ enabled: false });
      let globalSingleton = str(690).getGlobalSingleton("loggerSettings", fn);
      const strResult = str(690);
    } else {
      globalSingleton = { enabled: false };
    }
    const enabled = globalSingleton.enabled;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let originalConsoleMethods = {};
originalConsoleMethods = {
  enable() {
    if (_mod688.DEBUG_BUILD) {
      let globalSingleton = _mod690.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = _mod690;
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = true;
  },
  disable() {
    if (_mod688.DEBUG_BUILD) {
      let globalSingleton = _mod690.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = _mod690;
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = false;
  },
  isEnabled() {
    if (_mod688.DEBUG_BUILD) {
      let globalSingleton = _mod690.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = _mod690;
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
  },
};

export const CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
export { consoleSandbox };
export const debug = originalConsoleMethods;
export { originalConsoleMethods };
