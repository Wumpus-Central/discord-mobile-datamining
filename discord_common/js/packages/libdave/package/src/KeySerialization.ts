// === Module 9044: KeySerialization ===

// Module 9044 (KeySerialization)
import _modDef9045 from "module_9045" /* 9045 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9045.fromByteArray(uint8Array);
};