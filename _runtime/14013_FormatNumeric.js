// === Module 14013: FormatNumeric ===

// Module 14013 (FormatNumeric)
import PartitionNumberPattern from "PartitionNumberPattern" /* 14014 */;


export const FormatNumeric = function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
};