// === Module 15539: ? ===

// Module 15539
import _mod15520 from "module_15520" /* 15520 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15540 from "module_15540" /* 15540 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15524(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15520.String(SymbolResult);
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
        tmp2Result = _mod15540;
      }
      if (tmp2Result) {
        tmp2Result = _mod15540 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;