// === Module 13858: prop ===

// Module 13858 (prop)
import _mod13839 from "module_13839" /* 13839 */;
import _mod13843 from "module_13843" /* 13843 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13843(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13839.String(SymbolResult);
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
        tmp2Result = tmp2(13859);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13859) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;