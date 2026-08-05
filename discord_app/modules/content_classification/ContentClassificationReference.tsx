import { isAgeRestrictedContentClassification } from "utils.tsx";
// discord_app/modules/content_classification/ContentClassificationReference.tsx
let result = require("set").fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = isAgeRestrictedContentClassification /* isAgeRestrictedContentClassification */;
  }
  return result;
};