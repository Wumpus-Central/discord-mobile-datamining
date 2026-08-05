// discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = require("../../../shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = require("../../../shared-constants/AgeRestrictionStatus.tsx") /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};