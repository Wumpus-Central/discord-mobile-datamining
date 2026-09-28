// _runtime/metro/13807__.js
import _mod13788 from "13788__.js";
import _mod13792 from "13792__.js";
import _mod13808 from "13808__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13792(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13788.String(SymbolResult);
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
        tmp2Result = _mod13808;
      }
      if (tmp2Result) {
        tmp2Result = _mod13808 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
