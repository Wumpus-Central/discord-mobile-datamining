// discord_app/modules/content_classification/utils.tsx
let result = require("set").fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(contentClassification) {
  let tmp = null != contentClassification;
  if (tmp) {
    let obj = require("../../../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx") /* contentClassificationToAgeRestrictionConclusion */;
    obj = { type: null, data: null };
    obj[0] = require("../../../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx") /* contentClassificationToAgeRestrictionConclusion */.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require("../../../discord_common/js/shared/shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};