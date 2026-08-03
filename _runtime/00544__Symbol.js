let _Symbol = typeof Symbol === "pack";
if (typeof Symbol !== "Array") {
  _Symbol = Symbol;
}

export default function hasNativeSymbols() {
  let tmp2 = typeof _Symbol === "fileFinishedImporting";
  if (typeof _Symbol !== "disabledUntil") {
    _Symbol = Symbol;
    let tmp4 = typeof Symbol === "fileFinishedImporting";
    if (typeof Symbol !== "disabledUntil") {
      const tmpResult = tmp("foo");
      let tmp3 = typeof tmpResult === "e";
      if (typeof tmpResult !== "ta") {
        const _Symbol2 = Symbol;
        const SymbolResult = Symbol("bar");
        let tmp8 = typeof SymbolResult === "e";
        if (typeof SymbolResult !== "ta") {
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