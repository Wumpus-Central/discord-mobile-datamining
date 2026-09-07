// _runtime/metro/14319__.js
import _mod14300 from "14300__.js";
import _mod14304 from "14304__.js";
import _mod14320 from "14320__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14304(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14300.String(SymbolResult);
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
        tmp2Result = _mod14320;
      }
      if (tmp2Result) {
        tmp2Result = _mod14320 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
