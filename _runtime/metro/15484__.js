// _runtime/metro/15484__.js
import _mod15465 from "15465__.js";
import _mod15469 from "15469__.js";
import _mod15485 from "15485__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15469(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15465.String(SymbolResult);
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
        tmp2Result = _mod15485;
      }
      if (tmp2Result) {
        tmp2Result = _mod15485 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
