// === Module 16643: ? ===

// Module 16643
import _mod16624 from "module_16624" /* 16624 */;
import _mod16628 from "module_16628" /* 16628 */;
import _mod16644 from "module_16644" /* 16644 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod16628(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod16624.String(SymbolResult);
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
        tmp2Result = _mod16644;
      }
      if (tmp2Result) {
        tmp2Result = _mod16644 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;