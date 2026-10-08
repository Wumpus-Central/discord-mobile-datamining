// _runtime/01190_Parser.js
import SPACE_SEPARATOR_REGEX from "01191_SPACE_SEPARATOR_REGEX.js";

let regExp = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.SPACE_SEPARATOR_REGEX.source, "*"));
const regExp1 = new RegExp("".concat(SPACE_SEPARATOR_REGEX.SPACE_SEPARATOR_REGEX.source, "*$"));
if (String.prototype.startsWith) {
  const startsWith = "_a".startsWith;
  "_a".startsWith("a", 1);
}
if (Number.isSafeInteger) {
  const _Number = Number;
  let fn = Number.isSafeInteger;
} else {
  fn = (num) => {
    let isFiniteResult = typeof num === "number";
    if (typeof num === "number") {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(num);
    }
    if (isFiniteResult) {
      const _Math = Math;
      isFiniteResult = Math.floor(num) === num;
    }
    if (isFiniteResult) {
      const _Math2 = Math;
      isFiniteResult = Math.abs(num) <= 9007199254740991;
    }
    return isFiniteResult;
  };
}
class RE {
  constructor(arg0, arg1) {
    regExp = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    return regExp;
  }
}
