// === Module 9361: KeySerialization ===

// Module 9361 (KeySerialization)
import _modDef9362 from "module_9362" /* 9362 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9362.fromByteArray(uint8Array);
}