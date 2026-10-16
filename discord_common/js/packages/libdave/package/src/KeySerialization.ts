// === Module 9053: KeySerialization ===

// Module 9053 (KeySerialization)
import _modDef9054 from "module_9054" /* 9054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9054.fromByteArray(uint8Array);
};