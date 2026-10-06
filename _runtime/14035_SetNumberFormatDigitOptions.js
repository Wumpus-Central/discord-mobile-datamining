// _runtime/14035_SetNumberFormatDigitOptions.js
import UNICODE_EXTENSION_SEQUENCE_REGEX from "13988_UNICODE_EXTENSION_SEQUENCE_REGEX.js";
import GetNumberOption from "13991_GetNumberOption.js";
import DefaultNumberOption from "13992_DefaultNumberOption.js";
import GetOption from "13993_GetOption.js";

const set = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000]);

export const SetNumberFormatDigitOptions = function SetNumberFormatDigitOptions(
  internalSlots,
  result1,
  minimumFractionDigits,
  arg3,
  GetOptionResult1,
) {
  let maximumFractionDigits;
  let maximumSignificantDigits;
  let minimumSignificantDigits;
  let tmp = arg3;
  ({ minimumFractionDigits, maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits } = result1);
  internalSlots.minimumIntegerDigits = GetNumberOption.GetNumberOption(result1, "minimumIntegerDigits", 1, 21, 1);
  const GetNumberOptionResult = GetNumberOption.GetNumberOption(result1, "roundingIncrement", 1, 5000, 1);
  const invariant = UNICODE_EXTENSION_SEQUENCE_REGEX.invariant;
  const hasItem = set.has(GetNumberOptionResult);
  const combined = "Invalid rounding increment value: ".concat(GetNumberOptionResult, ".\nValid values are ");
  const concat = combined.concat;
  const arr = Array.from(set);
  invariant(hasItem, concat(arr.join(", "), "."));
  const GetOptionResult = GetOption.GetOption(
    result1,
    "roundingMode",
    "string",
    ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"],
    "halfExpand",
  );
  GetOptionResult1 = GetOption.GetOption(
    result1,
    "roundingPriority",
    "string",
    ["auto", "morePrecision", "lessPrecision"],
    "auto",
  );
  const GetOptionResult2 = GetOption.GetOption(
    result1,
    "trailingZeroDisplay",
    "string",
    ["auto", "stripIfInteger"],
    "auto",
  );
  if (1 !== GetNumberOptionResult) {
    tmp = minimumFractionDigits;
  }
  internalSlots.roundingIncrement = GetNumberOptionResult;
  internalSlots.roundingMode = GetOptionResult;
  internalSlots.trailingZeroDisplay = GetOptionResult2;
  let flag = true;
  let flag2 = true;
  if ("auto" === GetOptionResult1) {
    let tmp14 = tmp12;
    if (!tmp14) {
      tmp14 = !tmp13 && "compact" === GetOptionResult1;
      const tmp15 = !tmp13 && "compact" === GetOptionResult1;
    }
    let flag3 = true;
    if (tmp14) {
      flag3 = false;
    }
    flag = flag3;
    flag2 = tmp12;
  }
  if (flag2) {
    if (undefined !== minimumSignificantDigits || undefined !== maximumSignificantDigits) {
      internalSlots.minimumSignificantDigits = DefaultNumberOption.DefaultNumberOption(
        minimumSignificantDigits,
        1,
        21,
        1,
      );
      internalSlots.maximumSignificantDigits = DefaultNumberOption.DefaultNumberOption(
        maximumSignificantDigits,
        internalSlots.minimumSignificantDigits,
        21,
        21,
      );
    } else {
      internalSlots.minimumSignificantDigits = 1;
      internalSlots.maximumSignificantDigits = 21;
    }
  }
  if (flag) {
    if (undefined !== minimumFractionDigits || undefined !== maximumFractionDigits) {
      let bound;
      let bound1;
      const DefaultNumberOptionResult = DefaultNumberOption.DefaultNumberOption(
        minimumFractionDigits,
        0,
        100,
        undefined,
      );
      const DefaultNumberOptionResult1 = DefaultNumberOption.DefaultNumberOption(
        maximumFractionDigits,
        0,
        100,
        undefined,
      );
      if (undefined === DefaultNumberOptionResult) {
        UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(
          undefined !== DefaultNumberOptionResult1,
          "maximumFractionDigits must be defined",
        );
        const _Math2 = Math;
        bound = Math.min(minimumFractionDigits, DefaultNumberOptionResult1);
        bound1 = DefaultNumberOptionResult1;
      } else if (undefined === DefaultNumberOptionResult1) {
        const _Math = Math;
        bound1 = Math.max(tmp, DefaultNumberOptionResult);
        bound = DefaultNumberOptionResult;
      } else {
        bound = DefaultNumberOptionResult;
        bound1 = DefaultNumberOptionResult1;
        if (DefaultNumberOptionResult > DefaultNumberOptionResult1) {
          const _RangeError2 = RangeError;
          const concat2 = "Invalid range, ".concat;
          const combined1 = "Invalid range, ".concat(DefaultNumberOptionResult, " > ");
          const self = this;
          const self2 = this;
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
    if (1 !== GetNumberOptionResult) {
      const _TypeError = TypeError;
      UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(
        "fractionDigits" === internalSlots.roundingType,
        "Invalid roundingType",
        TypeError,
      );
      const _RangeError = RangeError;
      UNICODE_EXTENSION_SEQUENCE_REGEX.invariant(
        internalSlots.maximumFractionDigits === internalSlots.minimumFractionDigits,
        "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.",
        RangeError,
      );
    }
  }
  if ("morePrecision" === GetOptionResult1) {
    internalSlots.roundingType = "morePrecision";
    internalSlots.roundingPriority = "morePrecision";
  } else if ("lessPrecision" === GetOptionResult1) {
    internalSlots.roundingType = "lessPrecision";
    internalSlots.roundingPriority = "lessPrecision";
  } else if (undefined !== minimumSignificantDigits || undefined !== maximumSignificantDigits) {
    internalSlots.roundingType = "significantDigits";
    internalSlots.roundingPriority = "auto";
  } else {
    internalSlots.roundingType = "fractionDigits";
    internalSlots.roundingPriority = "auto";
  }
};
