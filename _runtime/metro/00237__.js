import { 00038__ } from "00038__.js";
// _runtime/metro/00237__.js
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
let closure_3 = { log: "log", info: "info", warn: "warn", error: "error", fatal: "error" };
let c4 = null;
const obj = {
  logIfNoNativeHook(arg0) {
    const substr = [...arguments].slice();
    if (undefined === global.nativeLoggingHook) {
      const logToConsole = obj.logToConsole;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      HermesBuiltin.apply(items, obj);
    } else {
      let tmp3 = c4;
      if (c4) {
        tmp3 = "warn" === arg0;
      }
      if (tmp3) {
        const items1 = [];
        HermesBuiltin.arraySpread(substr, 0);
        HermesBuiltin.apply(items1, undefined);
      }
      const tmp2 = c4;
    }
  },
  logToConsole(arg0) {
    const substr = [...arguments].slice();
    const tmp3 = 00038__;
    tmp3(table[arg0], `${`Level "${arg0}`}" not one of ${Object.keys(table).toString()}`);
    const items = [...substr];
    console[table[arg0]].apply(items);
  },
  setWarningHandler(arg0) {
    let closure_4 = arg0;
  }
};
arg5.default = obj;