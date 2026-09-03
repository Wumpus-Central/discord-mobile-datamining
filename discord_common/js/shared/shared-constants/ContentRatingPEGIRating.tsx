// === Module 5072: set ===

// Module 5072 (set)
import set from "set" /* 2 */;

const obj = { ALL: null, IS_ADULT_ONLY: null };
let set = new Set([1, 2, 3, 4, 5]);
obj[0] = set;
obj[1] = new Set([]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingPEGIRating.tsx");

export const ContentRatingPEGIRating = { UNKNOWN_RATING: 0, [0]: "UNKNOWN_RATING", THREE: 1, [1]: "THREE", SEVEN: 2, [2]: "SEVEN", TWELVE: 3, [3]: "TWELVE", SIXTEEN: 4, [4]: "SIXTEEN", EIGHTEEN: 5, [5]: "EIGHTEEN" };
export const ContentRatingPEGIRatingSets = obj;