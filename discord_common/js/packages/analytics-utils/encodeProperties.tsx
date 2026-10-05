// === Module 1345: encodeProperties ===

// Module 1345 (encodeProperties)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    const str = Buffer.from(JSON.stringify(arg0));
    return str.toString("base64");
  } catch (err) {
    return null;
  }
};