// === Module 4361: getFirstQueryStringValue ===

// Module 4361 (getFirstQueryStringValue)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(parsed) {
  let first = parsed;
  if (Array.isArray(parsed)) {
    first = parsed[0];
  }
  return first;
};