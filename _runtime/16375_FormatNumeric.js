// _runtime/16375_FormatNumeric.js
import PartitionNumberPattern from "16376_PartitionNumberPattern.js";

require = arg1;
const dependencyMap = arg6;

export function FormatNumeric(internalSlots, isNaN) {
  const result = PartitionNumberPattern.PartitionNumberPattern(internalSlots, isNaN);
  const mapped = result.map((value) => value.value);
  return mapped.join("");
}
