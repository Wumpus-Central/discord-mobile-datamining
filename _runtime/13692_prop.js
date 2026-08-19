// === Module 13692: prop ===

// Module 13692 (prop)
import _mod13673 from "module_13673" /* 13673 */;
import _mod13677 from "module_13677" /* 13677 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13677(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13673.String(SymbolResult);
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
        tmp2Result = tmp2(13693);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13693) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;