// _runtime/metro/15389__.js
import _mod15370 from "15370__.js";
import _mod15374 from "15374__.js";
import _mod15390 from "15390__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15374(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15370.String(SymbolResult);
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
        tmp2Result = _mod15390;
      }
      if (tmp2Result) {
        tmp2Result = _mod15390 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
