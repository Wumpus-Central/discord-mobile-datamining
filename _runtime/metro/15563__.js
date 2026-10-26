// _runtime/metro/15563__.js
import _mod15544 from "15544__.js";
import _mod15548 from "15548__.js";
import _mod15564 from "15564__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15548(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15544.String(SymbolResult);
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
        tmp2Result = _mod15564;
      }
      if (tmp2Result) {
        tmp2Result = _mod15564 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
