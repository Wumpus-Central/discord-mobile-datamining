// === Module 14098: ? ===

// Module 14098
import _mod14079 from "module_14079" /* 14079 */;
import _mod14083 from "module_14083" /* 14083 */;
import _mod14099 from "module_14099" /* 14099 */;

const prop = Object.getOwnPropertySymbols && !_mod14083(() => {
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