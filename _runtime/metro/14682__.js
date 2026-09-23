// _runtime/metro/14682__.js
import _mod14663 from "14663__.js";
import _mod14667 from "14667__.js";
import _mod14683 from "14683__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14667(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14663.String(SymbolResult);
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
        tmp2Result = _mod14683;
      }
      if (tmp2Result) {
        tmp2Result = _mod14683 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
