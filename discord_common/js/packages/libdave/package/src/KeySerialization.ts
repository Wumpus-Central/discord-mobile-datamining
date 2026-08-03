// === Module 9076: serializeKey ===

// Module 9076 (serializeKey)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(9077).fromByteArray(uint8Array);
};