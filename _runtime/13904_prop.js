// === Module 13904: prop ===

// Module 13904 (prop)
import _mod13885 from "module_13885" /* 13885 */;
import _mod13889 from "module_13889" /* 13889 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13889(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13885.String(SymbolResult);
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
        tmp2Result = tmp2(13905);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13905) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;