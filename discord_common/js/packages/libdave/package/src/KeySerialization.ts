// === Module 9967: KeySerialization ===

// Module 9967 (KeySerialization)
import _modDef9968 from "module_9968" /* 9968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9968.fromByteArray(uint8Array);
};