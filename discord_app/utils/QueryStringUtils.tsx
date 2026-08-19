// discord_app/utils/QueryStringUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("utils/QueryStringUtils.tsx");

export const getFirstQueryStringValue = function getFirstQueryStringValue(parsed) {
  let first = parsed;
  if (Array.isArray(parsed)) {
    first = parsed[0];
  }
  return first;
};