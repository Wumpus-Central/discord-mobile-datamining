// _runtime/13885_prop.js
import _mod13866 from "metro/13866__.js";
import _mod13870 from "metro/13870__.js";

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