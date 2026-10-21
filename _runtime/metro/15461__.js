// _runtime/metro/15461__.js
import _mod15442 from "15442__.js";
import _mod15446 from "15446__.js";
import _mod15462 from "15462__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15446(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15442.String(SymbolResult);
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
        tmp2Result = _mod15462;
      }
      if (tmp2Result) {
        tmp2Result = _mod15462 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
