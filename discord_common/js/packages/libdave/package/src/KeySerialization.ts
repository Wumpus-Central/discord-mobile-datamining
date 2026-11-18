// === Module 9606: KeySerialization ===

// Module 9606 (KeySerialization)
import _modDef9607 from "module_9607" /* 9607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9607.fromByteArray(uint8Array);
}