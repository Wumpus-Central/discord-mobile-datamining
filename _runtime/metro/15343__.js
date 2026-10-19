// === Module 15343: ? ===

// Module 15343
import _mod15324 from "module_15324" /* 15324 */;
import _mod15328 from "module_15328" /* 15328 */;
import _mod15344 from "module_15344" /* 15344 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15328(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15324.String(SymbolResult);
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
        tmp2Result = _mod15344;
      }
      if (tmp2Result) {
        tmp2Result = _mod15344 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;