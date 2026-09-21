// === Module 14596: ? ===

// Module 14596
import _mod14577 from "module_14577" /* 14577 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14597 from "module_14597" /* 14597 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14581(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14577.String(SymbolResult);
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
        tmp2Result = _mod14597;
      }
      if (tmp2Result) {
        tmp2Result = _mod14597 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;