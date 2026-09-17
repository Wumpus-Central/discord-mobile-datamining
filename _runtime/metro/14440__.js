// _runtime/metro/14440__.js
import _mod14421 from "14421__.js";
import _mod14425 from "14425__.js";
import _mod14441 from "14441__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14425(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14421.String(SymbolResult);
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
        tmp2Result = _mod14441;
      }
      if (tmp2Result) {
        tmp2Result = _mod14441 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
