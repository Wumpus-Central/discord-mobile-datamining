// === Module 14405: ? ===

// Module 14405
import _mod14386 from "module_14386" /* 14386 */;
import _mod14390 from "module_14390" /* 14390 */;
import _mod14406 from "module_14406" /* 14406 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14390(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14386.String(SymbolResult);
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
        tmp2Result = _mod14406;
      }
      if (tmp2Result) {
        tmp2Result = _mod14406 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;