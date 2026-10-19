// _runtime/metro/15371__.js
import _mod15352 from "15352__.js";
import _mod15356 from "15356__.js";
import _mod15372 from "15372__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15356(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15352.String(SymbolResult);
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
        tmp2Result = _mod15372;
      }
      if (tmp2Result) {
        tmp2Result = _mod15372 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
