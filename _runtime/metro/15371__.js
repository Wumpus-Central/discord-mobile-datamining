// === Module 15371: ? ===

// Module 15371
import _mod15352 from "module_15352" /* 15352 */;
import _mod15356 from "module_15356" /* 15356 */;
import _mod15372 from "module_15372" /* 15372 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15356(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15352.String(SymbolResult);
    let tmp5 = !StringResult;
    if (StringResult) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp5 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp5) {
      const _Symbol2 = Symbol;
      let tmp2Result = !sham;
      if (!sham) {
        tmp2Result = _mod15372;
      }
      if (tmp2Result) {
        tmp2Result = _mod15372 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;