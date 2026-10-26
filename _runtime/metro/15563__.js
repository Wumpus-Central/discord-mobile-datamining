// === Module 15563: ? ===

// Module 15563
import _mod15544 from "module_15544" /* 15544 */;
import _mod15548 from "module_15548" /* 15548 */;
import _mod15564 from "module_15564" /* 15564 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15548(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15544.String(SymbolResult);
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
        tmp2Result = _mod15564;
      }
      if (tmp2Result) {
        tmp2Result = _mod15564 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;