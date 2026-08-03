// === Module 13463: prop ===

// Module 13463 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13448")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13444).String(SymbolResult);
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
        tmp2Result = tmp2(13464);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13464) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;