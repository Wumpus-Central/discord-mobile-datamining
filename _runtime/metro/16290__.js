// _runtime/metro/16290__.js
import _mod16271 from "16271__.js";
import _mod16275 from "16275__.js";
import _mod16291 from "16291__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16275(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16271.String(SymbolResult);
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
        tmp2Result = _mod16291;
      }
      if (tmp2Result) {
        tmp2Result = _mod16291 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
