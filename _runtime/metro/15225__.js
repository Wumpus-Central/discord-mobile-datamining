// _runtime/metro/15225__.js
import _mod15206 from "15206__.js";
import _mod15210 from "15210__.js";
import _mod15226 from "15226__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15210(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15206.String(SymbolResult);
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
        tmp2Result = _mod15226;
      }
      if (tmp2Result) {
        tmp2Result = _mod15226 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
