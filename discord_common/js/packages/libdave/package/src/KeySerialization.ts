// discord_common/js/packages/libdave/package/src/KeySerialization.ts
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return importDefault(8900).fromByteArray(uint8Array);
};