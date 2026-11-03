// === Module 16290: ? ===

// Module 16290
import _mod16271 from "module_16271" /* 16271 */;
import _mod16275 from "module_16275" /* 16275 */;
import _mod16291 from "module_16291" /* 16291 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16275(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16271.String(SymbolResult);
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
        tmp2Result = _mod16291;
      }
      if (tmp2Result) {
        tmp2Result = _mod16291 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;