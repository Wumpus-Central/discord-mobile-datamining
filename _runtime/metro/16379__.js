// _runtime/metro/16379__.js
import _mod16360 from "16360__.js";
import _mod16364 from "16364__.js";
import _mod16380 from "16380__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16364(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16360.String(SymbolResult);
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
        tmp2Result = _mod16380;
      }
      if (tmp2Result) {
        tmp2Result = _mod16380 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
