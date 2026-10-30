// _runtime/metro/16102__.js
import _mod16083 from "16083__.js";
import _mod16087 from "16087__.js";
import _mod16103 from "16103__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16087(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16083.String(SymbolResult);
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
        tmp2Result = _mod16103;
      }
      if (tmp2Result) {
        tmp2Result = _mod16103 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
