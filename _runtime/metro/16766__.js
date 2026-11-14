// _runtime/metro/16766__.js
import _mod16747 from "16747__.js";
import _mod16751 from "16751__.js";
import _mod16767 from "16767__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16751(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16747.String(SymbolResult);
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
        tmp2Result = _mod16767;
      }
      if (tmp2Result) {
        tmp2Result = _mod16767 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
