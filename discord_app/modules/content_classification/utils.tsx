// discord_app/modules/content_classification/utils.tsx
import ContentClassificationToAgeRestriction from "../../../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx";
import AgeRestrictionStatus from "../../../discord_common/js/shared/shared-constants/AgeRestrictionStatus.tsx";
import size from "../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/content_classification/utils.tsx");

export const isAgeRestrictedContentClassification = function isAgeRestrictedContentClassification(
  contentClassification,
) {
  let tmp = null != contentClassification;
  if (tmp) {
    const obj = {
      type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL,
      data: contentClassification,
    };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT;
  }
  return tmp;
};
