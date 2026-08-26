// _runtime/13858_prop.js
import _mod13839 from "metro/13839__.js";
import _mod13843 from "metro/13843__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13843(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13839.String(SymbolResult);
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
        tmp2Result = tmp2(13859);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13859) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;