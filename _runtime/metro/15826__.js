// === Module 15826: ? ===

// Module 15826
import _mod15807 from "module_15807" /* 15807 */;
import _mod15811 from "module_15811" /* 15811 */;
import _mod15827 from "module_15827" /* 15827 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15811(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15807.String(SymbolResult);
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
        tmp2Result = _mod15827;
      }
      if (tmp2Result) {
        tmp2Result = _mod15827 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;