// _runtime/metro/14316__.js
import _mod14297 from "14297__.js";
import _mod14301 from "14301__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14301(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14297.String(SymbolResult);
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
        tmp2Result = tmp2(14317);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14317) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
