// === Module 4361: getFirstQueryStringValue ===

// Module 4361 (getFirstQueryStringValue)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(arg0) {
  let first = arg0;
  if (Array.isArray(arg0)) {
    first = arg0[0];
  }
  return first;
};