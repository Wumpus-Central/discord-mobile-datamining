// _runtime/metro/00237__.js
import _mod38 from "00038__.js";

require = arg1;
const dependencyMap = { log: "log", info: "info", warn: "warn", error: "error", fatal: "error" };
let global = null;
const obj = {
  logIfNoNativeHook(arg0) {
    const substr = [...arguments].slice();
    if (undefined === global.nativeLoggingHook) {
      const logToConsole = obj.logToConsole;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      HermesBuiltin.apply(items, obj);
    } else {
      let tmp3 = global;
      if (global) {
        tmp3 = "warn" === arg0;
      }
      if (tmp3) {
        const items1 = [];
        HermesBuiltin.arraySpread(substr, 0);
        HermesBuiltin.apply(items1, undefined);
      }
    }
  },
  logToConsole(arg0) {
    const substr = [...arguments].slice();
    const tmp3 = _mod38;
    tmp3(dependencyMap[arg0], `${`Level "${arg0}`}" not one of ${Object.keys(closure_3).toString()}`);
    const items = [...substr];
    console[dependencyMap[arg0]].apply(items);
  },
  setWarningHandler(arg0) {
    global = arg0;
  },
};

export default obj;
