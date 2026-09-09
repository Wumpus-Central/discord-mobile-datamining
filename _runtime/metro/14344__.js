// === Module 14344: ? ===

// Module 14344
import _mod14325 from "module_14325" /* 14325 */;
import _mod14329 from "module_14329" /* 14329 */;
import _mod14345 from "module_14345" /* 14345 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14329(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14325.String(SymbolResult);
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
        tmp2Result = _mod14345;
      }
      if (tmp2Result) {
        tmp2Result = _mod14345 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;