// === Module 15920: getAdjustedPlaceholderCount ===

// Module 15920 (getAdjustedPlaceholderCount)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx");

export const getAdjustedPlaceholderCount = function getAdjustedPlaceholderCount(numResults) {
  ({ numColumns, placeholderCount } = numResults);
  let num = 0;
  if (0 !== placeholderCount) {
    num = placeholderCount + (numColumns - numResults.numResults % numColumns);
  }
  return num;
};