// === Module 5117: set ===

// Module 5117 (set)
import set from "set" /* 2 */;

const obj = { ALL: null, IS_ADULT_ONLY: null };
let set = new Set([1, 2, 3, 4, 5, 6]);
obj[0] = set;
obj[1] = new Set([5]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingESRBRating.tsx");

export const ContentRatingESRBRating = { UNKNOWN_RATING: 0, [0]: "UNKNOWN_RATING", EVERYONE: 1, [1]: "EVERYONE", EVERYONE_TEN_PLUS: 2, [2]: "EVERYONE_TEN_PLUS", TEEN: 3, [3]: "TEEN", MATURE: 4, [4]: "MATURE", ADULTS_ONLY: 5, [5]: "ADULTS_ONLY", RATING_PENDING: 6, [6]: "RATING_PENDING" };
export const ContentRatingESRBRatingSets = obj;