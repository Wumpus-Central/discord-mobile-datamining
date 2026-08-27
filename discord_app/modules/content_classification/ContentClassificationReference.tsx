// === Module 9415: isAgeRestrictedClassificationReference ===

// Module 9415 (isAgeRestrictedClassificationReference)
import set from "set" /* 2 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5010 */;

let result = set.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(contentClassification.data);
    const obj = isAgeRestrictedContentClassification;
  }
  return result;
};