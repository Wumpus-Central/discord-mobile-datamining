// _runtime/13692_prop.js
import _mod13673 from "metro/13673__.js";
import _mod13677 from "metro/13677__.js";

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