// _runtime/metro/16062__.js
import _mod16043 from "16043__.js";
import _mod16047 from "16047__.js";
import _mod16063 from "16063__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16047(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16043.String(SymbolResult);
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
        tmp2Result = _mod16063;
      }
      if (tmp2Result) {
        tmp2Result = _mod16063 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
