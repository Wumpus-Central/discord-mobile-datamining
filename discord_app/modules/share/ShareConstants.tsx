// discord_app/modules/share/ShareConstants.tsx
import set from "../../../_runtime/00002_set.js";
import sortByMatchScore from "../autocompleter/index.tsx";

const items = [
  sortByMatchScore.AutocompleterResultTypes.USER,
  sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL,
  sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL,
  sortByMatchScore.AutocompleterResultTypes.GROUP_DM,
];
const arr = Array.from(items);
const result = set.fileFinishedImporting("modules/share/ShareConstants.tsx");

export const ALLOWED_TYPES = arr;
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
