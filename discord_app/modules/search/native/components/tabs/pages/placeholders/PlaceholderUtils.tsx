// discord_app/modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx
import size from "../../../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx",
);

export const getAdjustedPlaceholderCount = function getAdjustedPlaceholderCount(numResults) {
  ({ numColumns, placeholderCount } = numResults);
  let num = 0;
  if (0 !== placeholderCount) {
    num = placeholderCount + (numColumns - (numResults.numResults % numColumns));
  }
  return num;
};
