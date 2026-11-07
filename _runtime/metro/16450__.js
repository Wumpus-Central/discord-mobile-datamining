// === Module 16450: ? ===

// Module 16450
import _mod16431 from "module_16431" /* 16431 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16451 from "module_16451" /* 16451 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16435(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16431.String(SymbolResult);
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
        tmp2Result = _mod16451;
      }
      if (tmp2Result) {
        tmp2Result = _mod16451 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;