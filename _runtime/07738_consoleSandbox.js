// _runtime/07738_consoleSandbox.js
import getGlobalSingleton from "getGlobalSingleton";

function consoleSandbox(arg0) {
  if ("console" in console(7739).GLOBAL_OBJ) {
    console = console(7739).GLOBAL_OBJ.console;
    const dependencyMap = {};
    const _Object = Object;
    const keys = Object.keys(obj);
    const item = keys.forEach((arg0) => {
      closure_1[arg0] = console[arg0];
      console[arg0] = outer1_3[arg0];
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
  const obj = {
    enable() {
      let c0 = true;
    },
    disable() {
      let c0 = false;
    },
    isEnabled() {
      return c0;
    }
  };
  const forEach = items.forEach;
  if (_require(obj[1]).DEBUG_BUILD) {
    const item = forEach((arg0) => {
      let closure_0 = arg0;
      obj[arg0] = () => {
        let closure_0 = [...arguments];
        if (closure_0) {
          outer2_4(() => {
            const _console = args(obj[0]).GLOBAL_OBJ.console;
            const items = ["Sentry Logger [" + args + "]:", ...closure_0];
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