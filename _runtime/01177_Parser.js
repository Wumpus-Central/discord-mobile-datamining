// _runtime/01177_Parser.js
import SPACE_SEPARATOR_REGEX from "01178_SPACE_SEPARATOR_REGEX.js";

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
  fn = (result1) => {
    let isFiniteResult = typeof result1 === "number";
    if (typeof result1 === "number") {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(result1);
    }
    if (isFiniteResult) {
      const _Math = Math;
      isFiniteResult = Math.floor(result1) === result1;
    }
    if (isFiniteResult) {
      const _Math2 = Math;
      isFiniteResult = Math.abs(result1) <= 9007199254740991;
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
