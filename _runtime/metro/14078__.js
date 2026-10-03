// _runtime/metro/14078__.js
import _mod14059 from "14059__.js";
import _mod14063 from "14063__.js";
import _mod14079 from "14079__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14063(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14059.String(SymbolResult);
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
        tmp2Result = _mod14079;
      }
      if (tmp2Result) {
        tmp2Result = _mod14079 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
