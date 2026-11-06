// _runtime/metro/16402__.js
import _mod16383 from "16383__.js";
import _mod16387 from "16387__.js";
import _mod16403 from "16403__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16387(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16383.String(SymbolResult);
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
        tmp2Result = _mod16403;
      }
      if (tmp2Result) {
        tmp2Result = _mod16403 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
