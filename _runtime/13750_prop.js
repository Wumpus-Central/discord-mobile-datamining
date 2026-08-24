// === Module 13750: prop ===

// Module 13750 (prop)
import _mod13731 from "module_13731" /* 13731 */;
import _mod13735 from "module_13735" /* 13735 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13735(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13731.String(SymbolResult);
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
        tmp2Result = tmp2(13751);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13751) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;