// === Module 9231: KeySerialization ===

// Module 9231 (KeySerialization)
import _modDef9232 from "module_9232" /* 9232 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9232.fromByteArray(uint8Array);
}