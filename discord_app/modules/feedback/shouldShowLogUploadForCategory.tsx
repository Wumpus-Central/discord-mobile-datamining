// discord_app/modules/feedback/shouldShowLogUploadForCategory.tsx
import set from "set" /* 2 */;
import FeedbackRating2 from "FeedbackRating" /* 10811 */;

const FeedbackRating = FeedbackRating2.FeedbackRating;
let closure_1 = {};
const result = set.fileFinishedImporting("modules/feedback/shouldShowLogUploadForCategory.tsx");

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
    if (null != table[category]) {
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