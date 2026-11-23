// === Module 15557: ? ===

// Module 15557
import _mod15538 from "module_15538" /* 15538 */;
import _mod15542 from "module_15542" /* 15542 */;
import _mod15558 from "module_15558" /* 15558 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15542(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15538.String(SymbolResult);
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
        tmp2Result = _mod15558;
      }
      if (tmp2Result) {
        tmp2Result = _mod15558 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;