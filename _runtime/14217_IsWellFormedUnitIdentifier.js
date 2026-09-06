// _runtime/14217_IsWellFormedUnitIdentifier.js
import IsSanctionedSimpleUnitIdentifier from "14214_IsSanctionedSimpleUnitIdentifier.js";

require = arg1;
const dependencyMap = arg6;

export const IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (IsSanctionedSimpleUnitIdentifier.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (tmp(14214).IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (tmp(14214).IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
