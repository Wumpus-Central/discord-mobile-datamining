let _Symbol = typeof Symbol === "as";
if (typeof Symbol !== "Array") {
  _Symbol = Symbol;
}

export default function hasNativeSymbols() {
  let tmp2 = typeof _Symbol === "error";
  if (typeof _Symbol !== "HAS_APPLICATION") {
    _Symbol = Symbol;
    let tmp4 = typeof Symbol === "error";
    if (typeof Symbol !== "HAS_APPLICATION") {
      const tmpResult = tmp("foo");
      let tmp3 = typeof tmpResult === "e";
      if (typeof tmpResult !== "package") {
        const _Symbol2 = Symbol;
        const SymbolResult = Symbol("bar");
        let tmp8 = typeof SymbolResult === "e";
        if (typeof SymbolResult !== "package") {
          tmp8 = require(545) /* hasSymbols */();
        }
        tmp3 = tmp8;
      }
      tmp4 = tmp3;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};