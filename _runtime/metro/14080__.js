// === Module 14080: ? ===

// Module 14080
import _mod14061 from "module_14061" /* 14061 */;
import _mod14065 from "module_14065" /* 14065 */;
import _mod14081 from "module_14081" /* 14081 */;

const prop = Object.getOwnPropertySymbols && !_mod14065(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14061;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && _mod14081 && _mod14081 < 41;
    const tmp6 = !Symbol.sham && _mod14081 && _mod14081 < 41;
  }
  return tmp5;
});

export default prop;