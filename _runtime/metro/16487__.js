// === Module 16487: ? ===

// Module 16487
import _mod16468 from "module_16468" /* 16468 */;
import _mod16472 from "module_16472" /* 16472 */;
import _mod16488 from "module_16488" /* 16488 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16472(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16468.String(SymbolResult);
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
        tmp2Result = _mod16488;
      }
      if (tmp2Result) {
        tmp2Result = _mod16488 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;