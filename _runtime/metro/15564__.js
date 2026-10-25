// _runtime/metro/15564__.js
import _mod15545 from "15545__.js";
import _mod15549 from "15549__.js";
import _mod15565 from "15565__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15549(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15545.String(SymbolResult);
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
        tmp2Result = _mod15565;
      }
      if (tmp2Result) {
        tmp2Result = _mod15565 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
