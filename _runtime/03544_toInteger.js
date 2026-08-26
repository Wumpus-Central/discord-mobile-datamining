// === Module 3544: toInteger ===

// Module 3544 (toInteger)

export default function toInteger(arg0) {
  if (null !== arg0) {
    if (true !== arg0) {
      if (false !== arg0) {
        const _Number = Number;
        const NumberResult = Number(arg0);
        const _isNaN = isNaN;
        if (isNaN(NumberResult)) {
          return NumberResult;
        } else {
          if (NumberResult < 0) {
            const _Math2 = Math;
            let rounded = Math.ceil(NumberResult);
          } else {
            const _Math = Math;
            rounded = Math.floor(NumberResult);
          }
          return rounded;
        }
      }
    }
  }
  return NaN;
};
export default exports.default;