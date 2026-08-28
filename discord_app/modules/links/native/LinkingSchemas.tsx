// === Module 4158: LINKING_SCHEMAS ===

// Module 4158 (LINKING_SCHEMAS)
import set from "set" /* 2 */;

obj = { bestbuy: obj };
obj = { regex: /(?:^https?:\/\/)(?:www\.)?bestbuy\.com(?:\/(.*))?$/i, protocol: "bestbuy://" };
const values = Object.values(obj);
const result = set.fileFinishedImporting("modules/links/native/LinkingSchemas.tsx");

export const LINKING_SCHEMAS = obj;
export const LINKING_SCHEMAS_VALUES = values;