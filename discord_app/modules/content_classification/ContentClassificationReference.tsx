// === Module 5611: ContentClassificationReference ===

// Module 5611 (ContentClassificationReference)
import utils from "utils" /* 5612 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationReference.tsx");

export const isAgeRestrictedClassificationReference = function isAgeRestrictedClassificationReference(contentClassification) {
  let loaded;
  if (contentClassification != null) {
    loaded = contentClassification.loaded;
  }
  let result = !loaded;
  if (loaded) {
    result = utils.isAgeRestrictedContentClassification(contentClassification.data);
  }
  return result;
};