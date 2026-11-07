// _runtime/metro/16450__.js
import _mod16431 from "16431__.js";
import _mod16435 from "16435__.js";
import _mod16451 from "16451__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16435(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16431.String(SymbolResult);
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
        tmp2Result = _mod16451;
      }
      if (tmp2Result) {
        tmp2Result = _mod16451 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
