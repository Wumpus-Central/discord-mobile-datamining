// _runtime/metro/00237__.js
import _mod38 from "00038__.js";

let closure_3 = { log: "log", info: "info", warn: "warn", error: "error", fatal: "error" };
let c4 = null;
const obj = {
  logIfNoNativeHook(arg0) {
    const substr = [...arguments].slice();
    if (undefined === global.nativeLoggingHook) {
      const logToConsole = obj.logToConsole;
      const items = [arg0];
      HermesBuiltin.arraySpread(items, substr, 1);
      HermesBuiltin.apply(logToConsole, items, obj);
    } else {
      const tmp4 = c4 && "warn" === arg0;
      if (tmp4) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, substr, 0);
        HermesBuiltin.apply(c4, items1, undefined);
      }
    }
  },
  logToConsole(arg0) {
    const substr = [...arguments].slice();
    const tmp3 = _mod38;
    const str = Object.keys(closure_3);
    tmp3(closure_3[arg0], `${`Level "${arg0}`}" not one of ${str.toString()}`);
    const items = [...substr];
    console[closure_3[arg0]].apply(items);
  },
  setWarningHandler(arg0) {
    c4 = arg0;
  },
};

export default obj;
