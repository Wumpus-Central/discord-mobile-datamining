// === Module 14217: IsWellFormedUnitIdentifier ===

// Module 14217 (IsWellFormedUnitIdentifier)
import IsSanctionedSimpleUnitIdentifier from "IsSanctionedSimpleUnitIdentifier" /* 14214 */;

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
      if (IsSanctionedSimpleUnitIdentifier.IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (IsSanctionedSimpleUnitIdentifier.IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};