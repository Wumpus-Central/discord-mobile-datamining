// === Module 10725: ShareConstants ===

// Module 10725 (ShareConstants)
import _mod9509 from "module_9509" /* 9509 */;
import size from "module_2" /* 2 */;

const items = [_mod9509.AutocompleterResultTypes.USER, _mod9509.AutocompleterResultTypes.TEXT_CHANNEL, _mod9509.AutocompleterResultTypes.VOICE_CHANNEL, _mod9509.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};