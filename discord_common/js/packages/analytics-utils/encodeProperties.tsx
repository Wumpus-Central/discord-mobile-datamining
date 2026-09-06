// === Module 1335: encodeProperties ===

// Module 1335 (encodeProperties)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    return Buffer.from(JSON.stringify(arg0)).toString("base64");
  } catch (err) {
    return null;
  }
};