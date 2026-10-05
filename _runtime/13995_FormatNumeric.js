// _runtime/13995_FormatNumeric.js
import PartitionNumberPattern from "13996_PartitionNumberPattern.js";

export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};
