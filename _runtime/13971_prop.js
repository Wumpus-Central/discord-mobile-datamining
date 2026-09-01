// _runtime/13971_prop.js
import _mod13952 from "metro/13952__.js";
import _mod13956 from "metro/13956__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13956(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13952.String(SymbolResult);
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
        tmp2Result = tmp2(13972);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13972) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
