// _runtime/13918_ToIntlMathematicalValue.js
import __exportStarResult32 from "13859___exportStarResult32.js";
import digitsToString from "13860_digitsToString.js";
import e from "01281_e.js";

let closure_2 = e.__importDefault(digitsToString);

export const ToIntlMathematicalValue = function ToIntlMathematicalValue(arg0) {
  const ToPrimitiveResult = __exportStarResult32.ToPrimitive(arg0, "number");
  if (typeof ToPrimitiveResult === "bigint") {
    const _default = new mod.default(ToPrimitiveResult);
    return _default;
  } else if (undefined === ToPrimitiveResult) {
    const _default1 = new mod.default(NaN);
    return _default1;
  } else if (true === ToPrimitiveResult) {
    const _default2 = new mod.default(1);
    return _default2;
  } else if (false === ToPrimitiveResult) {
    const _default3 = new mod.default(0);
    return _default3;
  } else if (null === ToPrimitiveResult) {
    const _default4 = new mod.default(0);
    return _default4;
  } else {
    try {
      const _default5 = new mod.default(ToPrimitiveResult);
      return _default5;
    } catch (err) {
      const _default6 = new mod.default(NaN);
      return _default6;
    }
  }
};