// === Module 14547: ? ===

// Module 14547
import _mod14528 from "module_14528" /* 14528 */;
import _mod14532 from "module_14532" /* 14532 */;
import _mod14548 from "module_14548" /* 14548 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14532(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14528.String(SymbolResult);
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
        tmp2Result = _mod14548;
      }
      if (tmp2Result) {
        tmp2Result = _mod14548 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;