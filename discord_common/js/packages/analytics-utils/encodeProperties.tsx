// === Module 662: encodeProperties ===

// Module 662 (encodeProperties)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/analytics-utils/encodeProperties.tsx");

export const encodeProperties = function encodeProperties(arg0) {
  try {
    const _Buffer = Buffer;
    const _JSON = JSON;
    return Buffer.from(JSON.stringify(arg0)).toString("base64");
  } catch (err) {
    return null;
  }
};