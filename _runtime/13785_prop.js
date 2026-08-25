// === Module 13785: prop ===

// Module 13785 (prop)
import _mod13766 from "module_13766" /* 13766 */;
import _mod13770 from "module_13770" /* 13770 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13770(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13766.String(SymbolResult);
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
        tmp2Result = tmp2(13786);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13786) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;