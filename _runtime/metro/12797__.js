// === Module 12797: ? ===

// Module 12797
import GLOBAL_OBJ from "module_12798" /* 12798 */;

function consoleSandbox(fn) {
  if ("console" in console(12798).GLOBAL_OBJ) {
    console = tmp(12798).GLOBAL_OBJ.console;
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
let items = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const originalConsoleMethods = {};

export const CONSOLE_LEVELS = items;
export { consoleSandbox };
export const logger = GLOBAL_OBJ.getGlobalSingleton("logger", function makeLogger() {
  _require = false;
  const obj = {
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
  if (require("module_12796").DEBUG_BUILD) {
    const item = forEach((arg0) => {
      closure_0 = arg0;
      obj[arg0] = () => {
        const args = [...arguments];
        if (args) {
          consoleSandbox(() => {
            const _console = GLOBAL_OBJ.GLOBAL_OBJ.console;
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
export { originalConsoleMethods };