// === Module 14210: prop ===

// Module 14210 (prop)
import _mod14191 from "module_14191" /* 14191 */;
import _mod14195 from "module_14195" /* 14195 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14195(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14191.String(SymbolResult);
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
        tmp2Result = tmp2(14211);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14211) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;