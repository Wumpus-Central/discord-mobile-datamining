// _runtime/metro/16405__.js
import _mod16386 from "16386__.js";
import _mod16390 from "16390__.js";
import _mod16406 from "16406__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16390(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16386.String(SymbolResult);
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
        tmp2Result = _mod16406;
      }
      if (tmp2Result) {
        tmp2Result = _mod16406 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
