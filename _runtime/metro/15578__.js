// _runtime/metro/15578__.js
import _mod15559 from "15559__.js";
import _mod15563 from "15563__.js";
import _mod15579 from "15579__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15563(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15559.String(SymbolResult);
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
        tmp2Result = _mod15579;
      }
      if (tmp2Result) {
        tmp2Result = _mod15579 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
