// _runtime/metro/14369__.js
import _mod14350 from "14350__.js";
import _mod14354 from "14354__.js";
import _mod14370 from "14370__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14354(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14350.String(SymbolResult);
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
        tmp2Result = _mod14370;
      }
      if (tmp2Result) {
        tmp2Result = _mod14370 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
