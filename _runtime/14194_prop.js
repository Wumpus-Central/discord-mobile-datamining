// _runtime/14194_prop.js
import _mod14175 from "metro/14175__.js";
import _mod14179 from "metro/14179__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14179(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14175.String(SymbolResult);
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
        tmp2Result = tmp2(14195);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14195) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
