// === Module 4786: isAgeRestrictedContentClassification ===

// Module 4786 (isAgeRestrictedContentClassification)
import obj132 from "obj132" /* 2 */;
import contentClassificationToAgeRestrictionConclusion from "contentClassificationToAgeRestrictionConclusion" /* 4787 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 4789 */;

let result = obj132.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj = { type: null, data: null };
    obj[0] = contentClassificationToAgeRestrictionConclusion.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};