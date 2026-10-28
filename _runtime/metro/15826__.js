// _runtime/metro/15826__.js
import _mod15807 from "15807__.js";
import _mod15811 from "15811__.js";
import _mod15827 from "15827__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15811(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15807.String(SymbolResult);
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
        tmp2Result = _mod15827;
      }
      if (tmp2Result) {
        tmp2Result = _mod15827 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
