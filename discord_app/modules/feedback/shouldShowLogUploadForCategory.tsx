// === Module 17355: shouldShowLogUploadForCategory ===

// Module 17355 (shouldShowLogUploadForCategory)
import Constants from "Constants" /* 11626 */;
import size from "module_2" /* 2 */;

const FeedbackRating = Constants.FeedbackRating;
let closure_1 = {};
const result = size.fileFinishedImporting("modules/feedback/shouldShowLogUploadForCategory.tsx");

export const shouldShowLogUploadForCategory = function shouldShowLogUploadForCategory(rating, category, reason) {
  if (rating !== FeedbackRating.BAD) {
    if (rating !== FeedbackRating.NEUTRAL) {
      return false;
    }
  }
  if (null == category) {
    return false;
  } else {
    let num2 = 0.01;
    if (null != closure_1[category]) {
      let num3 = tmp2[reason.value];
      if (num3 == null) {
        num3 = 0.01;
      }
      num2 = num3;
    }
    const _Math = Math;
    return Math.random() < num2;
  }
};