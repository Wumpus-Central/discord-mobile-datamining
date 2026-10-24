// === Module 15559: ? ===

// Module 15559
import _mod15540 from "module_15540" /* 15540 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15560 from "module_15560" /* 15560 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15544(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15540.String(SymbolResult);
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
        tmp2Result = _mod15560;
      }
      if (tmp2Result) {
        tmp2Result = _mod15560 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;