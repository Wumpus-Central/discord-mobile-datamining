// === Module 9408: KeySerialization ===

// Module 9408 (KeySerialization)
import _modDef9409 from "module_9409" /* 9409 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9409.fromByteArray(uint8Array);
}