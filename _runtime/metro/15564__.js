// === Module 15564: ? ===

// Module 15564
import _mod15545 from "module_15545" /* 15545 */;
import _mod15549 from "module_15549" /* 15549 */;
import _mod15565 from "module_15565" /* 15565 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15549(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15545.String(SymbolResult);
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
        tmp2Result = _mod15565;
      }
      if (tmp2Result) {
        tmp2Result = _mod15565 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;