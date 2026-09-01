// _runtime/13908___exportStarResult26.js
import getMultiInternalSlots from "13861_getMultiInternalSlots.js";
import __exportStarResult3 from "13864___exportStarResult3.js";
import __exportStarResult4 from "13866___exportStarResult4.js";

require = arg1;
const dependencyMap = arg6;
arg5.SetNumberFormatDigitOptions = function SetNumberFormatDigitOptions(internalSlots, result1, minimumFractionDigits, arg3, GetOptionResult1) {
  let tmp = arg3;
  ({ minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits } = result1);
  internalSlots.minimumIntegerDigits = __exportStarResult3.GetNumberOption(result1, "minimumIntegerDigits", 1, 21, 1);
  const GetNumberOptionResult = __exportStarResult3.GetNumberOption(result1, "roundingIncrement", 1, 5000, 1);
  const hasItem = set.has(GetNumberOptionResult);
  const combined = "Invalid rounding increment value: ".concat(GetNumberOptionResult, ".\nValid values are ");
  getMultiInternalSlots.invariant(hasItem, combined.concat(Array.from(set).join(", "), "."));
  const arr = Array.from(set);
  GetOptionResult1 = __exportStarResult4.GetOption(result1, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto");
  const GetOptionResult = __exportStarResult4.GetOption(result1, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand");
  if (1 !== GetNumberOptionResult) {
    tmp = minimumFractionDigits;
  }
  internalSlots.roundingIncrement = GetNumberOptionResult;
  internalSlots.roundingMode = GetOptionResult;
  internalSlots.trailingZeroDisplay = __exportStarResult4.GetOption(result1, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
  let flag = true;
  let flag2 = true;
  if ("auto" === GetOptionResult1) {
    let tmp13 = tmp11;
    if (!tmp11) {
      let tmp14 = !tmp12;
      if (!tmp12) {
        tmp14 = "compact" === GetOptionResult1;
      }
      tmp13 = tmp14;
    }
    let flag3 = true;
    if (tmp13) {
      flag3 = false;
    }
    flag = flag3;
    flag2 = tmp11;
  }
  if (flag2) {
    if (tmp11) {
      internalSlots.minimumSignificantDigits = tmp2(13865).DefaultNumberOption(minimumSignificantDigits, 1, 21, 1);
      internalSlots.maximumSignificantDigits = tmp2(13865).DefaultNumberOption(maximumSignificantDigits, internalSlots.minimumSignificantDigits, 21, 21);
    } else {
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 21;
    }
  }
  if (flag) {
    if (tmp12) {
      const DefaultNumberOptionResult = tmp2(13865).DefaultNumberOption(minimumFractionDigits, 0, 100, undefined);
      const DefaultNumberOptionResult1 = tmp2(13865).DefaultNumberOption(maximumFractionDigits, 0, 100, undefined);
      if (undefined === DefaultNumberOptionResult) {
        tmp2(13861).invariant(undefined !== DefaultNumberOptionResult1, "maximumFractionDigits must be defined");
        const _Math2 = Math;
        let bound = Math.min(minimumFractionDigits, DefaultNumberOptionResult1);
        let bound1 = DefaultNumberOptionResult1;
      } else if (undefined === DefaultNumberOptionResult1) {
        const _Math = Math;
        bound1 = Math.max(tmp, DefaultNumberOptionResult);
        bound = DefaultNumberOptionResult;
      } else {
        bound = DefaultNumberOptionResult;
        bound1 = DefaultNumberOptionResult1;
        if (DefaultNumberOptionResult > DefaultNumberOptionResult1) {
          const _RangeError2 = RangeError;
          const concat = "Invalid range, ".concat;
          const combined1 = "Invalid range, ".concat(DefaultNumberOptionResult, " > ");
          const rangeError = new RangeError(combined1.concat(DefaultNumberOptionResult1));
          throw rangeError;
        }
      }
      internalSlots.minimumFractionDigits = bound;
      internalSlots.maximumFractionDigits = bound1;
    } else {
      internalSlots.minimumFractionDigits = minimumFractionDigits;
      internalSlots.maximumFractionDigits = tmp;
    }
  }
  if (!flag2) {
    if (!flag) {
      internalSlots.minimumFractionDigits = 0;
      internalSlots.maximumFractionDigits = 0;
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 2;
      internalSlots.roundingType = "morePrecision";
      internalSlots.roundingPriority = "morePrecision";
    }
    if (tmp10) {
      const _TypeError = TypeError;
      tmp2(13861).invariant("fractionDigits" === internalSlots.roundingType, "Invalid roundingType", TypeError);
      const _RangeError = RangeError;
      tmp2(13861).invariant(internalSlots.maximumFractionDigits === internalSlots.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError);
    }
  }
  if ("morePrecision" === GetOptionResult1) {
    internalSlots.roundingType = "morePrecision";
    internalSlots.roundingPriority = "morePrecision";
  } else if ("lessPrecision" === GetOptionResult1) {
    internalSlots.roundingType = "lessPrecision";
    internalSlots.roundingPriority = "lessPrecision";
  } else if (tmp11) {
    internalSlots.roundingType = "significantDigits";
    internalSlots.roundingPriority = "auto";
  } else {
    internalSlots.roundingType = "fractionDigits";
    internalSlots.roundingPriority = "auto";
  }
};
const set = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000]);