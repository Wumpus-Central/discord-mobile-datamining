// === Module 10712: ShareConstants ===

// Module 10712 (ShareConstants)
import _mod9496 from "module_9496" /* 9496 */;
import size from "module_2" /* 2 */;

const items = [_mod9496.AutocompleterResultTypes.USER, _mod9496.AutocompleterResultTypes.TEXT_CHANNEL, _mod9496.AutocompleterResultTypes.VOICE_CHANNEL, _mod9496.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};