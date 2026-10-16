// _runtime/metro/15270__.js
import _mod15251 from "15251__.js";
import _mod15255 from "15255__.js";
import _mod15271 from "15271__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15255(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15251.String(SymbolResult);
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
        tmp2Result = _mod15271;
      }
      if (tmp2Result) {
        tmp2Result = _mod15271 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
