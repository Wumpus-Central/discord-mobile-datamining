// _runtime/metro/15434__.js
import _mod15415 from "15415__.js";
import _mod15419 from "15419__.js";
import _mod15435 from "15435__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15419(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15415.String(SymbolResult);
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
        tmp2Result = _mod15435;
      }
      if (tmp2Result) {
        tmp2Result = _mod15435 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
