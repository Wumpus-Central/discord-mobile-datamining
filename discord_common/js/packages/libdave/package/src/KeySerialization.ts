// === Module 9193: KeySerialization ===

// Module 9193 (KeySerialization)
import _modDef9194 from "module_9194" /* 9194 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9194.fromByteArray(uint8Array);
};