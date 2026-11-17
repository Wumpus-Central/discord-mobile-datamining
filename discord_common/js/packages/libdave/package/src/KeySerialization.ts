// === Module 10325: KeySerialization ===

// Module 10325 (KeySerialization)
import _modDef10326 from "module_10326" /* 10326 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef10326.fromByteArray(uint8Array);
}