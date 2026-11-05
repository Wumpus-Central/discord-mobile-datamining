// === Module 9415: KeySerialization ===

// Module 9415 (KeySerialization)
import _modDef9416 from "module_9416" /* 9416 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9416.fromByteArray(uint8Array);
}