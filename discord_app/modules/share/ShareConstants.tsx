// discord_app/modules/share/ShareConstants.tsx
import _mod9496 from "../autocompleter/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [
  _mod9496.AutocompleterResultTypes.USER,
  _mod9496.AutocompleterResultTypes.TEXT_CHANNEL,
  _mod9496.AutocompleterResultTypes.VOICE_CHANNEL,
  _mod9496.AutocompleterResultTypes.GROUP_DM,
];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
