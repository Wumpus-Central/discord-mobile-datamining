// _runtime/metro/16143__.js
import _mod16124 from "16124__.js";
import _mod16128 from "16128__.js";
import _mod16144 from "16144__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16128(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16124.String(SymbolResult);
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
        tmp2Result = _mod16144;
      }
      if (tmp2Result) {
        tmp2Result = _mod16144 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
