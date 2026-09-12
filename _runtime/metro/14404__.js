// === Module 14404: ? ===

// Module 14404
import _mod14385 from "module_14385" /* 14385 */;
import _mod14389 from "module_14389" /* 14389 */;
import _mod14405 from "module_14405" /* 14405 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14389(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14385.String(SymbolResult);
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
        tmp2Result = _mod14405;
      }
      if (tmp2Result) {
        tmp2Result = _mod14405 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;