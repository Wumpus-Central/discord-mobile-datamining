// === Module 1286: _Symbol ===

// Module 1286 (_Symbol)
import _mod1287 from "module_1287" /* 1287 */;

let _Symbol = typeof Symbol !== "undefined";
if (typeof Symbol !== "undefined") {
  _Symbol = Symbol;
}

export default function hasNativeSymbols() {
  let tmp2 = typeof _Symbol === "function";
  if (typeof _Symbol === "function") {
    _Symbol = Symbol;
    let tmp4 = typeof Symbol === "function";
    if (typeof Symbol === "function") {
      const tmpResult = tmp("foo");
      let tmp3 = typeof tmpResult === "symbol";
      if (typeof tmpResult === "symbol") {
        const _Symbol2 = Symbol;
        const SymbolResult = Symbol("bar");
        let tmp8 = typeof SymbolResult === "symbol";
        if (typeof SymbolResult === "symbol") {
          tmp8 = _mod1287();
        }
        tmp3 = tmp8;
      }
      tmp4 = tmp3;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};