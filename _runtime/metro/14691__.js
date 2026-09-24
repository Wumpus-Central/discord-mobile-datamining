// _runtime/metro/14691__.js
import _mod14672 from "14672__.js";
import _mod14676 from "14676__.js";
import _mod14692 from "14692__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14676(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14672.String(SymbolResult);
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
        tmp2Result = _mod14692;
      }
      if (tmp2Result) {
        tmp2Result = _mod14692 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
