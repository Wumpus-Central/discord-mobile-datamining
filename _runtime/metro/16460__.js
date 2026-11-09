// === Module 16460: ? ===

// Module 16460
import _mod16441 from "module_16441" /* 16441 */;
import _mod16445 from "module_16445" /* 16445 */;
import _mod16461 from "module_16461" /* 16461 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16445(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16441.String(SymbolResult);
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
        tmp2Result = _mod16461;
      }
      if (tmp2Result) {
        tmp2Result = _mod16461 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;