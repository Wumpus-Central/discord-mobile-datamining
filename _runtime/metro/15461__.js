// === Module 15461: ? ===

// Module 15461
import _mod15442 from "module_15442" /* 15442 */;
import _mod15446 from "module_15446" /* 15446 */;
import _mod15462 from "module_15462" /* 15462 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15446(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15442.String(SymbolResult);
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
        tmp2Result = _mod15462;
      }
      if (tmp2Result) {
        tmp2Result = _mod15462 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;