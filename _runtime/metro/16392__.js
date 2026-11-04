// === Module 16392: ? ===

// Module 16392
import _mod16373 from "module_16373" /* 16373 */;
import _mod16377 from "module_16377" /* 16377 */;
import _mod16393 from "module_16393" /* 16393 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16377(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16373.String(SymbolResult);
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
        tmp2Result = _mod16393;
      }
      if (tmp2Result) {
        tmp2Result = _mod16393 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;