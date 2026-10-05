// === Module 14080: ? ===

// Module 14080
import _mod14061 from "module_14061" /* 14061 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14081 from "module_14081" /* 14081 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14065(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14061.String(SymbolResult);
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
        tmp2Result = _mod14081;
      }
      if (tmp2Result) {
        tmp2Result = _mod14081 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;