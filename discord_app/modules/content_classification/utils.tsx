// discord_app/modules/content_classification/utils.tsx
import set from "../../../_runtime/00002_set.js";
import contentClassificationToAgeRestrictionConclusion from "../../../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx";
import AgeRestrictionStatus from "../../../discord_common/js/shared/shared-constants/AgeRestrictionStatus.tsx";

let result = set.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(
  contentClassification,
) {
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
