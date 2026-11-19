// _runtime/metro/15470__.js
import _mod15451 from "15451__.js";
import _mod15455 from "15455__.js";
import _mod15471 from "15471__.js";

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod15455(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod15451.String(SymbolResult);
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
        tmp2Result = _mod15471;
      }
      if (tmp2Result) {
        tmp2Result = _mod15471 < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
