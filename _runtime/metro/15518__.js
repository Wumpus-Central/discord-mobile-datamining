// _runtime/metro/15518__.js
import _mod15499 from "15499__.js";
import _mod15503 from "15503__.js";
import _mod15519 from "15519__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15503(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15499.String(SymbolResult);
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
        tmp2Result = _mod15519;
      }
      if (tmp2Result) {
        tmp2Result = _mod15519 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
