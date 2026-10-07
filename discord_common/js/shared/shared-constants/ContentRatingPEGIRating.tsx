// discord_common/js/shared/shared-constants/ContentRatingPEGIRating.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: null };
const set = new Set([1, 2, 3, 4, 5]);
obj.IS_ADULT_ONLY = new Set([]);
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingPEGIRating.tsx");

export const ContentRatingPEGIRating = {
  UNKNOWN_RATING: 0,
  [0]: "UNKNOWN_RATING",
  THREE: 1,
  [1]: "THREE",
  SEVEN: 2,
  [2]: "SEVEN",
  TWELVE: 3,
  [3]: "TWELVE",
  SIXTEEN: 4,
  [4]: "SIXTEEN",
  EIGHTEEN: 5,
  [5]: "EIGHTEEN",
};
export const ContentRatingPEGIRatingSets = obj;
