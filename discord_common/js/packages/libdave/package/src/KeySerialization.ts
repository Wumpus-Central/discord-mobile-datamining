// === Module 9423: serializeKey ===

// Module 9423 (serializeKey)
import set from "set" /* 2 */;
import byteLengthDefault from "byteLength" /* 9424 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};