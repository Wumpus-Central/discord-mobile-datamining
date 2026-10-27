// _runtime/metro/15600__.js
import _mod15581 from "15581__.js";
import _mod15585 from "15585__.js";
import _mod15601 from "15601__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15585(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15581.String(SymbolResult);
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
        tmp2Result = _mod15601;
      }
      if (tmp2Result) {
        tmp2Result = _mod15601 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
