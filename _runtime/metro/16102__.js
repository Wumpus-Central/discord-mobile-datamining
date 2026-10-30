// === Module 16102: ? ===

// Module 16102
import _mod16083 from "module_16083" /* 16083 */;
import _mod16087 from "module_16087" /* 16087 */;
import _mod16103 from "module_16103" /* 16103 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16087(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16083.String(SymbolResult);
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
        tmp2Result = _mod16103;
      }
      if (tmp2Result) {
        tmp2Result = _mod16103 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;