// discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx
import { AgeRestrictionStatus } from "../../../shared-constants/AgeRestrictionStatus.tsx";
const result = require("set").fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = AgeRestrictionStatus /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = AgeRestrictionStatus /* AgeRestrictionStatus */.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};