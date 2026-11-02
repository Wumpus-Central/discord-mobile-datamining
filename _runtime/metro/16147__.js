// _runtime/metro/16147__.js
import _mod16128 from "16128__.js";
import _mod16132 from "16132__.js";
import _mod16148 from "16148__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16132(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16128.String(SymbolResult);
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
        tmp2Result = _mod16148;
      }
      if (tmp2Result) {
        tmp2Result = _mod16148 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
