// === Module 8537: KeySerialization ===

// Module 8537 (KeySerialization)
import _modDef8538 from "module_8538" /* 8538 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef8538.fromByteArray(uint8Array);
}