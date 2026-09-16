// === Module 14432: ? ===

// Module 14432
import _mod14413 from "module_14413" /* 14413 */;
import _mod14417 from "module_14417" /* 14417 */;
import _mod14433 from "module_14433" /* 14433 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14417(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14413.String(SymbolResult);
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
        tmp2Result = _mod14433;
      }
      if (tmp2Result) {
        tmp2Result = _mod14433 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;