// === Module 10556: KeySerialization ===

// Module 10556 (KeySerialization)
import _modDef10557 from "module_10557" /* 10557 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef10557.fromByteArray(uint8Array);
}