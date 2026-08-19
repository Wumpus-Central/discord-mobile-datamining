// === Module 7606: ALLOWED_TYPES ===

// Module 7606 (ALLOWED_TYPES)
import obj132 from "obj132" /* 2 */;
import sortByMatchScore from "sortByMatchScore" /* 7593 */;

const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GROUP_DM];
const arr = Array.from(items);
const result = obj132.fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};