// === Module 9153: KeySerialization ===

// Module 9153 (KeySerialization)
import _modDef9154 from "module_9154" /* 9154 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9154.fromByteArray(uint8Array);
};