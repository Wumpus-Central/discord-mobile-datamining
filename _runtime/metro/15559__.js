// _runtime/metro/15559__.js
import _mod15540 from "15540__.js";
import _mod15544 from "15544__.js";
import _mod15560 from "15560__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15544(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15540.String(SymbolResult);
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
        tmp2Result = _mod15560;
      }
      if (tmp2Result) {
        tmp2Result = _mod15560 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
