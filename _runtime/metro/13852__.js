// === Module 13852: ? ===

// Module 13852
import _mod13833 from "module_13833" /* 13833 */;
import _mod13837 from "module_13837" /* 13837 */;
import _mod13853 from "module_13853" /* 13853 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13837(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13833.String(SymbolResult);
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
        tmp2Result = _mod13853;
      }
      if (tmp2Result) {
        tmp2Result = _mod13853 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;