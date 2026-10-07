// discord_app/modules/share/ShareConstants.tsx
import sortByMatchScore from "../autocompleter/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  sortByMatchScore.AutocompleterResultTypes.USER,
  sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL,
  sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL,
  sortByMatchScore.AutocompleterResultTypes.GROUP_DM,
];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
