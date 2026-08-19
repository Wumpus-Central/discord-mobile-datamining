// === Module 4795: compare ===

// Module 4795 (compare)
import obj132 from "obj132" /* 2 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 4789 */;

const result = obj132.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/AgeRestrictionUtils.tsx");

export const compare = function compare(arg0, arg1) {
  const prop = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  const index = prop.indexOf(arg0);
  const prop1 = AgeRestrictionStatus.AGE_RESTRICTION_STATUS_RESTRICTIVENESS_ORDERING;
  return index - prop1.indexOf(arg1);
};