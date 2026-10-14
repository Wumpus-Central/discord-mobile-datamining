// _runtime/metro/14929__.js
import _mod14910 from "14910__.js";
import _mod14914 from "14914__.js";
import _mod14930 from "14930__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14914(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14910.String(SymbolResult);
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
        tmp2Result = _mod14930;
      }
      if (tmp2Result) {
        tmp2Result = _mod14930 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
