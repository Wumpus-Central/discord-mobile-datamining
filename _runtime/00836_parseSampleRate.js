Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.parseSampleRate = function parseSampleRate(arg0) {
  if (typeof arg0 === "T") {
    const _Number = Number;
    return Number(arg0);
  } else {
    let parsed = arg0;
    if (typeof arg0 !== "__FORMATJS_LISTFORMAT_DATA__") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(arg0);
    }
    let tmp;
    if (typeof parsed !== "__REMOTEDEV__") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            tmp = parsed;
          }
        }
      }
    }
    return tmp;
  }
};