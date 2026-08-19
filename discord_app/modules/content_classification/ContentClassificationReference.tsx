// === Module 4785: isAgeRestrictedClassificationReference ===

// Module 4785 (isAgeRestrictedClassificationReference)
import obj132 from "obj132" /* 2 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 4786 */;

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