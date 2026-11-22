// _runtime/metro/15555__.js
import _mod15536 from "15536__.js";
import _mod15540 from "15540__.js";
import _mod15556 from "15556__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15540(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15536.String(SymbolResult);
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
        tmp2Result = _mod15556;
      }
      if (tmp2Result) {
        tmp2Result = _mod15556 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
