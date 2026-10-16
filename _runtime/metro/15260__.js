// === Module 15260: ? ===

// Module 15260
import _mod15241 from "module_15241" /* 15241 */;
import _mod15245 from "module_15245" /* 15245 */;
import _mod15261 from "module_15261" /* 15261 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15245(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15241.String(SymbolResult);
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
        tmp2Result = _mod15261;
      }
      if (tmp2Result) {
        tmp2Result = _mod15261 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;