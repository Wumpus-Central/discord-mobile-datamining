// _runtime/00821_consoleSandbox.js
import __SENTRY_DEBUG__ from "metro/00820___SENTRY_DEBUG__.js";
import getGlobalSingleton from "00822_getGlobalSingleton.js";

require = arg1;
let dependencyMap = arg6;
function consoleSandbox(arg0) {
  if ("console" in console(818).GLOBAL_OBJ) {
    console = console(818).GLOBAL_OBJ.console;
    dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      closure_1[arg0] = console[arg0];
      console[arg0] = closure_1_2[arg0];
    });
    try {
      const item1 = keys.forEach((arg0) => {
        console[arg0] = table[arg0];
      });
      return arg0();
    } catch (tmp8) {
      const item2 = arr.forEach((arg0) => {
        console[arg0] = table[arg0];
      });
      throw tmp8;
    }
  } else {
    return arg0();
  }
}
function _maybeLog(arg0) {
  const _require = arg0;
  dependencyMap = [...arguments].slice();
  let str = _require;
  let fn = dependencyMap;
  const DEBUG_BUILD = require("metro/00820___SENTRY_DEBUG__.js").DEBUG_BUILD;
  if (!DEBUG_BUILD) {
    if (DEBUG_BUILD) {
      consoleSandbox(() => {
        const _console = callback(table[0]).GLOBAL_OBJ.console;
        const items = ["Sentry Logger [" + callback + "]:", ...closure_1];
        _console[callback].apply(items);
      });
    }
  } else {
    if (str(820).DEBUG_BUILD) {
      str = "loggerSettings";
      fn = () => ({ enabled: false });
      let globalSingleton = str(822).getGlobalSingleton("loggerSettings", fn);
      const strResult = str(822);
    } else {
      globalSingleton = { enabled: false };
    }
    const enabled = globalSingleton.enabled;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let obj = {};
obj = {
  enable() {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      let globalSingleton = getGlobalSingleton.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = getGlobalSingleton;
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = true;
  },
  disable() {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      let globalSingleton = getGlobalSingleton.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = getGlobalSingleton;
    } else {
      globalSingleton = { enabled: false };
    }
    globalSingleton.enabled = false;
  },
  isEnabled() {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      let globalSingleton = getGlobalSingleton.getGlobalSingleton("loggerSettings", () => ({ enabled: false }));
      const tmpResult = getGlobalSingleton;
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
arg5.CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
arg5.consoleSandbox = consoleSandbox;
arg5.debug = obj;
arg5.originalConsoleMethods = obj;
