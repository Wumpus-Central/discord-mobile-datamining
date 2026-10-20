// === Module 15389: ? ===

// Module 15389
import _mod15370 from "module_15370" /* 15370 */;
import _mod15374 from "module_15374" /* 15374 */;
import _mod15390 from "module_15390" /* 15390 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15374(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15370.String(SymbolResult);
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
        tmp2Result = _mod15390;
      }
      if (tmp2Result) {
        tmp2Result = _mod15390 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;