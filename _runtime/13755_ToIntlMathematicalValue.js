// === Module 13755: ToIntlMathematicalValue ===

// Module 13755 (ToIntlMathematicalValue)
import _mod13696 from "module_13696" /* 13696 */;
import digitsToString2 from "digitsToString" /* 13697 */;
import e from "e" /* 1161 */;

const digitsToString = e.__importDefault(digitsToString2);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = _mod13696.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const _default = new digitsToString.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const _default1 = new digitsToString.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const _default2 = new digitsToString.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const _default3 = new digitsToString.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const _default4 = new digitsToString.default(0);
    return _default4;
  } else {
    try {
      const _default5 = new digitsToString.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const _default6 = new digitsToString.default(NaN);
      return _default6;
    }
  }
};