// _runtime/metro/16643__.js
import _mod16624 from "16624__.js";
import _mod16628 from "16628__.js";
import _mod16644 from "16644__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16628(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16624.String(SymbolResult);
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
        tmp2Result = _mod16644;
      }
      if (tmp2Result) {
        tmp2Result = _mod16644 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
