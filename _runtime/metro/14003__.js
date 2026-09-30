// === Module 14003: ? ===

// Module 14003
import _mod13984 from "module_13984" /* 13984 */;
import _mod13988 from "module_13988" /* 13988 */;
import _mod14004 from "module_14004" /* 14004 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13988(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13984.String(SymbolResult);
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
        tmp2Result = _mod14004;
      }
      if (tmp2Result) {
        tmp2Result = _mod14004 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;