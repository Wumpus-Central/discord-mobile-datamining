// _runtime/metro/15758__.js
import _mod15739 from "15739__.js";
import _mod15743 from "15743__.js";
import _mod15759 from "15759__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15743(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15739.String(SymbolResult);
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
        tmp2Result = _mod15759;
      }
      if (tmp2Result) {
        tmp2Result = _mod15759 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
