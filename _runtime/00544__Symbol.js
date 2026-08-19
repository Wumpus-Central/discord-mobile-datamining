// === Module 544: _Symbol ===

// Module 544 (_Symbol)
import hasSymbols from "hasSymbols" /* 545 */;

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
          tmp8 = hasSymbols();
        }
        tmp3 = tmp8;
      }
      tmp4 = tmp3;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};