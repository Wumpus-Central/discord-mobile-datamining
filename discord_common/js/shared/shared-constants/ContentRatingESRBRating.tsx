// discord_common/js/shared/shared-constants/ContentRatingESRBRating.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const obj = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: null };
const set = new Set([1, 2, 3, 4, 5, 6]);
obj[1] = new Set([5]);
const set1 = new Set([5]);
const result = obj132.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingESRBRating.tsx");

export const ContentRatingESRBRating = { UNKNOWN_RATING: 0, [0]: "UNKNOWN_RATING", EVERYONE: 1, [1]: "EVERYONE", EVERYONE_TEN_PLUS: 2, [2]: "EVERYONE_TEN_PLUS", TEEN: 3, [3]: "TEEN", MATURE: 4, [4]: "MATURE", ADULTS_ONLY: 5, [5]: "ADULTS_ONLY", RATING_PENDING: 6, [6]: "RATING_PENDING" };
export const ContentRatingESRBRatingSets = obj;