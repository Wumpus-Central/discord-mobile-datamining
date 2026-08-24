// discord_app/utils/QueryStringUtils.tsx
import set from "../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(arg0) {
  let first = arg0;
  if (Array.isArray(arg0)) {
    first = arg0[0];
  }
  return first;
};