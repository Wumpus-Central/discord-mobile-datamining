// === Module 15505: ? ===

// Module 15505
import _mod15486 from "module_15486" /* 15486 */;
import _mod15490 from "module_15490" /* 15490 */;
import _mod15506 from "module_15506" /* 15506 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15490(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15486.String(SymbolResult);
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
        tmp2Result = _mod15506;
      }
      if (tmp2Result) {
        tmp2Result = _mod15506 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;