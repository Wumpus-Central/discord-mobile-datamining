// === Module 700: ? ===

// Module 700
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function parseSampleRate(sample_rate) {
  if (typeof sample_rate === "boolean") {
    const _Number = Number;
    return Number(sample_rate);
  } else {
    let parsed = sample_rate;
    if (typeof sample_rate === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(sample_rate);
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
}