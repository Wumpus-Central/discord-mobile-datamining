// === Module 5065: isAgeRestrictedContentClassification ===

// Module 5065 (isAgeRestrictedContentClassification)
import set from "set" /* 2 */;
import contentClassificationToAgeRestrictionConclusion from "contentClassificationToAgeRestrictionConclusion" /* 5066 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5068 */;

let result = set.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = contentClassificationToAgeRestrictionConclusion;
    obj = { type: null, data: null };
    obj[0] = contentClassificationToAgeRestrictionConclusion.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};