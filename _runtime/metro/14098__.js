// _runtime/metro/14098__.js
import _mod14079 from "14079__.js";
import _mod14083 from "14083__.js";
import _mod14099 from "14099__.js";

const prop =
  Object.getOwnPropertySymbols &&
  !_mod14083(() => {
    const SymbolResult = Symbol("symbol detection");
    const obj = _mod14079;
    const StringResult = obj.String(SymbolResult);
    let tmp5 = !StringResult;
    if (StringResult) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp5 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp5) {
      const _Symbol2 = Symbol;
      tmp5 = !Symbol.sham && _mod14099 && _mod14099 < 41;
      const tmp6 = !Symbol.sham && _mod14099 && _mod14099 < 41;
    }
    return tmp5;
  });

export default prop;
