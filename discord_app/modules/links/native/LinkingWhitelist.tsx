// === Module 4091: LINKING_WHITELIST ===

// Module 4091 (LINKING_WHITELIST)
import obj132 from "obj132" /* 2 */;

const obj = { regex: /(?:^https?:\/\/)(?:www\.)?(facebook\.com)(?:$|\/)/i, protocol: "fb://" };
const values = Object.values(obj);
const result = obj132.fileFinishedImporting("modules/links/native/LinkingWhitelist.tsx");

export const LINKING_WHITELIST = obj;
export const LINKING_WHITELIST_VALUES = values;