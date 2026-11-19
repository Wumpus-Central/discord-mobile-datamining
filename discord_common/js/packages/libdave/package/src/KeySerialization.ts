// === Module 9585: KeySerialization ===

// Module 9585 (KeySerialization)
import _modDef9586 from "module_9586" /* 9586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9586.fromByteArray(uint8Array);
}