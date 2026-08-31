// === Module 13938: prop ===

// Module 13938 (prop)
import _mod13919 from "module_13919" /* 13919 */;
import _mod13923 from "module_13923" /* 13923 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13923(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13919.String(SymbolResult);
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
        tmp2Result = tmp2(13939);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13939) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;