// === Module 14397: ? ===

// Module 14397
import _mod14378 from "module_14378" /* 14378 */;
import _mod14382 from "module_14382" /* 14382 */;
import _mod14398 from "module_14398" /* 14398 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14382(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14378.String(SymbolResult);
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
        tmp2Result = _mod14398;
      }
      if (tmp2Result) {
        tmp2Result = _mod14398 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;