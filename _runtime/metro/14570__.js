// === Module 14570: ? ===

// Module 14570
import _mod14551 from "module_14551" /* 14551 */;
import _mod14555 from "module_14555" /* 14555 */;
import _mod14571 from "module_14571" /* 14571 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14555(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14551.String(SymbolResult);
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
        tmp2Result = _mod14571;
      }
      if (tmp2Result) {
        tmp2Result = _mod14571 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;