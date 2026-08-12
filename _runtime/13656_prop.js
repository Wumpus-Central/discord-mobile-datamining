// _runtime/13656_prop.js
import { 13637__ } from "metro/13637__.js";
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13641")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = 13637__.String(SymbolResult);
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
        tmp2Result = tmp2(13657);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13657) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;