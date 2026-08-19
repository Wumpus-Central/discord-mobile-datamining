// discord_app/modules/content_classification/ContentClassificationReference.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import isAgeRestrictedContentClassification from "utils.tsx";

let result = obj132.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(contentClassification.data);
  }
  return result;
};