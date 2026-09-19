// _runtime/metro/14590__.js
import _mod14571 from "14571__.js";
import _mod14575 from "14575__.js";
import _mod14591 from "14591__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14575(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14571.String(SymbolResult);
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
        tmp2Result = _mod14591;
      }
      if (tmp2Result) {
        tmp2Result = _mod14591 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
