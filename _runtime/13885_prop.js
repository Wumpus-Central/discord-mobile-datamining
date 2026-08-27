// === Module 13885: prop ===

// Module 13885 (prop)
import _mod13866 from "module_13866" /* 13866 */;
import _mod13870 from "module_13870" /* 13870 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13870(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13866.String(SymbolResult);
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
        tmp2Result = tmp2(13886);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13886) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;