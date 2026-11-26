// === Module 15751: ? ===

// Module 15751
import _mod15732 from "module_15732" /* 15732 */;
import _mod15736 from "module_15736" /* 15736 */;
import _mod15752 from "module_15752" /* 15752 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15736(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15732.String(SymbolResult);
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
        tmp2Result = _mod15752;
      }
      if (tmp2Result) {
        tmp2Result = _mod15752 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;