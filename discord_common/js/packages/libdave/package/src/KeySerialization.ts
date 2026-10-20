// === Module 9127: KeySerialization ===

// Module 9127 (KeySerialization)
import _modDef9128 from "module_9128" /* 9128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9128.fromByteArray(uint8Array);
};