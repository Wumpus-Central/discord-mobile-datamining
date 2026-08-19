// discord_app/modules/links/native/LinkingWhitelist.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const obj = { regex: /(?:^https?:\/\/)(?:www\.)?(facebook\.com)(?:$|\/)/i, protocol: "fb://" };
const values = Object.values(obj);
const result = obj132.fileFinishedImporting("modules/links/native/LinkingWhitelist.tsx");

export const LINKING_WHITELIST = obj;
export const LINKING_WHITELIST_VALUES = values;