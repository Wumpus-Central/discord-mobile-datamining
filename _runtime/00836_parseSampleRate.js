// _runtime/00836_parseSampleRate.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.parseSampleRate = function parseSampleRate(flag) {
  if (typeof flag === "boolean") {
    const _Number = Number;
    return Number(flag);
  } else {
    let parsed = flag;
    if (typeof flag === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(flag);
    }
    let tmp;
    if (typeof parsed === "number") {
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
