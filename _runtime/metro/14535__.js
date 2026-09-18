// _runtime/metro/14535__.js
import _mod14516 from "14516__.js";
import _mod14520 from "14520__.js";
import _mod14536 from "14536__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14520(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14516.String(SymbolResult);
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
        tmp2Result = _mod14536;
      }
      if (tmp2Result) {
        tmp2Result = _mod14536 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
