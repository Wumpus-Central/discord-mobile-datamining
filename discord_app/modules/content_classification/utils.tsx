// === Module 5163: utils ===

// Module 5163 (utils)
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5164 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5166 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};