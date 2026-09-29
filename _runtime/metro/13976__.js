// === Module 13976: ? ===

// Module 13976
import _mod13957 from "module_13957" /* 13957 */;
import _mod13961 from "module_13961" /* 13961 */;
import _mod13977 from "module_13977" /* 13977 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13961(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13957.String(SymbolResult);
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
        tmp2Result = _mod13977;
      }
      if (tmp2Result) {
        tmp2Result = _mod13977 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;