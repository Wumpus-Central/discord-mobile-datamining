// _runtime/metro/14493__.js
import _mod14474 from "14474__.js";
import _mod14478 from "14478__.js";
import _mod14494 from "14494__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14478(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14474.String(SymbolResult);
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
        tmp2Result = _mod14494;
      }
      if (tmp2Result) {
        tmp2Result = _mod14494 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
