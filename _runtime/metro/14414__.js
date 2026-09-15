// === Module 14414: ? ===

// Module 14414
import _mod14395 from "module_14395" /* 14395 */;
import _mod14399 from "module_14399" /* 14399 */;
import _mod14415 from "module_14415" /* 14415 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14399(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14395.String(SymbolResult);
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
        tmp2Result = _mod14415;
      }
      if (tmp2Result) {
        tmp2Result = _mod14415 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;