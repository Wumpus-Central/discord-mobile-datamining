// _runtime/metro/14891__.js
import _mod14872 from "14872__.js";
import _mod14876 from "14876__.js";
import _mod14892 from "14892__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14876(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14872.String(SymbolResult);
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
        tmp2Result = _mod14892;
      }
      if (tmp2Result) {
        tmp2Result = _mod14892 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
