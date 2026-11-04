// _runtime/metro/16392__.js
import _mod16373 from "16373__.js";
import _mod16377 from "16377__.js";
import _mod16393 from "16393__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16377(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16373.String(SymbolResult);
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
        tmp2Result = _mod16393;
      }
      if (tmp2Result) {
        tmp2Result = _mod16393 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
