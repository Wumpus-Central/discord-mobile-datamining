// === Module 14104: DefaultNumberOption ===

// Module 14104 (DefaultNumberOption)
arg5.DefaultNumberOption = function DefaultNumberOption(maximumFractionDigits, minimumSignificantDigits, arg2, arg3) {
  if (undefined === maximumFractionDigits) {
    return arg3;
  } else {
    const _Number = Number;
    const NumberResult = Number(maximumFractionDigits);
    const _isNaN = isNaN;
    if (!isNaN(NumberResult)) {
      if (NumberResult >= minimumSignificantDigits) {
        if (NumberResult <= arg2) {
          const _Math = Math;
          return Math.floor(NumberResult);
        }
      }
    }
    const _RangeError = RangeError;
    const concat = "".concat;
    const combined = "".concat(NumberResult, " is outside of range [");
    const combined1 = combined.concat(minimumSignificantDigits, ", ");
    const rangeError = new RangeError(combined1.concat(arg2, "]"));
    throw rangeError;
  }
};