// === Module 12797: consoleSandbox ===

// Module 12797 (consoleSandbox)
import getGlobalSingleton from "getGlobalSingleton" /* 12798 */;

function consoleSandbox(arg0) {
  if ("console" in console(12798).GLOBAL_OBJ) {
    console = console(12798).GLOBAL_OBJ.console;
    dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      closure_1[arg0] = console[arg0];
      console[arg0] = closure_1_3[arg0];
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
          closure_2_4(() => {
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