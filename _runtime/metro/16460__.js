// _runtime/metro/16460__.js
import _mod16441 from "16441__.js";
import _mod16445 from "16445__.js";
import _mod16461 from "16461__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16445(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16441.String(SymbolResult);
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
        tmp2Result = _mod16461;
      }
      if (tmp2Result) {
        tmp2Result = _mod16461 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
