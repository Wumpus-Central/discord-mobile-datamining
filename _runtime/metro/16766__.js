// === Module 16766: ? ===

// Module 16766
import _mod16747 from "module_16747" /* 16747 */;
import _mod16751 from "module_16751" /* 16751 */;
import _mod16767 from "module_16767" /* 16767 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16751(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16747.String(SymbolResult);
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
        tmp2Result = _mod16767;
      }
      if (tmp2Result) {
        tmp2Result = _mod16767 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;