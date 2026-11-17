// === Module 16801: ? ===

// Module 16801
import _mod16782 from "module_16782" /* 16782 */;
import _mod16786 from "module_16786" /* 16786 */;
import _mod16802 from "module_16802" /* 16802 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16786(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16782.String(SymbolResult);
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
        tmp2Result = _mod16802;
      }
      if (tmp2Result) {
        tmp2Result = _mod16802 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;