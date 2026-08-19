// === Module 9706: serializeKey ===

// Module 9706 (serializeKey)
import obj132 from "obj132" /* 2 */;
import byteLengthDefault from "byteLength" /* 9707 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};