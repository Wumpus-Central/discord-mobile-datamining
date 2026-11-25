// _runtime/metro/15700__.js
import _mod15681 from "15681__.js";
import _mod15685 from "15685__.js";
import _mod15701 from "15701__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15685(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15681.String(SymbolResult);
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
        tmp2Result = _mod15701;
      }
      if (tmp2Result) {
        tmp2Result = _mod15701 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
