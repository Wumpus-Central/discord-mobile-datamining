// === Module 16402: ? ===

// Module 16402
import _mod16383 from "module_16383" /* 16383 */;
import _mod16387 from "module_16387" /* 16387 */;
import _mod16403 from "module_16403" /* 16403 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16387(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16383.String(SymbolResult);
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
        tmp2Result = _mod16403;
      }
      if (tmp2Result) {
        tmp2Result = _mod16403 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;