// _runtime/07738_consoleSandbox.js
import getGlobalSingleton from "07739_getGlobalSingleton.js";

function consoleSandbox(fn) {
  if ("console" in console(7739).GLOBAL_OBJ) {
    console = tmp(7739).GLOBAL_OBJ.console;
    dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((item, index) => {
      closure_1[item] = console[item];
      console[item] = obj[item];
    });
    try {
      const item1 = keys.forEach((item, index) => {
        console[item] = table[item];
      });
      return fn();
    } catch (tmp8) {
      const item2 = arr.forEach((item, index) => {
        console[item] = table[item];
      });
      throw tmp8;
    }
  } else {
    return fn();
  }
  tmp = console;
}
let items = ["debug", "info", "warn", "error", "log", "assert", "trace"];
let obj = {};

export const CONSOLE_LEVELS = items;
export { consoleSandbox };
export const logger = getGlobalSingleton.getGlobalSingleton("logger", function makeLogger() {
  const _require = false;
  obj = {
    enable() {
      c0 = true;
    },
    disable() {
      c0 = false;
    },
    isEnabled() {
      return c0;
    }
  };
  const forEach = items.forEach;
  if (_require(obj[1]).DEBUG_BUILD) {
    const item = forEach((arg0) => {
      closure_0 = arg0;
      obj[arg0] = () => {
        closure_0 = [...arguments];
        if (closure_0) {
          consoleSandbox(() => {
            const _console = args(obj[0]).GLOBAL_OBJ.console;
            items = ["Sentry Logger [" + args + "]:", ...closure_0];
            _console[args].apply(items);
          });
        }
      };
    });
  } else {
    const item1 = forEach((arg0) => {
      obj[arg0] = () => {

      };
    });
  }
  return obj;
});
export const originalConsoleMethods = obj;