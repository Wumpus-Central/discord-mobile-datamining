// _runtime/metro/14547__.js
import _mod14528 from "14528__.js";
import _mod14532 from "14532__.js";
import _mod14548 from "14548__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14532(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14528.String(SymbolResult);
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
        tmp2Result = _mod14548;
      }
      if (tmp2Result) {
        tmp2Result = _mod14548 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
