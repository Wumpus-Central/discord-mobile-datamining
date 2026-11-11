// === Module 16648: ? ===

// Module 16648
import _mod16629 from "module_16629" /* 16629 */;
import _mod16633 from "module_16633" /* 16633 */;
import _mod16649 from "module_16649" /* 16649 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16633(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16629.String(SymbolResult);
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
        tmp2Result = _mod16649;
      }
      if (tmp2Result) {
        tmp2Result = _mod16649 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;