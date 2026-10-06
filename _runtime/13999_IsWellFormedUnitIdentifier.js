// _runtime/13999_IsWellFormedUnitIdentifier.js
import SANCTIONED_UNITS from "13996_SANCTIONED_UNITS.js";

export const IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  let tmp3;
  let tmp4;
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
};
