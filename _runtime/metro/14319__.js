// === Module 14319: ? ===

// Module 14319
import _mod14300 from "module_14300" /* 14300 */;
import _mod14304 from "module_14304" /* 14304 */;
import _mod14320 from "module_14320" /* 14320 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14304(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14300.String(SymbolResult);
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
        tmp2Result = _mod14320;
      }
      if (tmp2Result) {
        tmp2Result = _mod14320 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;