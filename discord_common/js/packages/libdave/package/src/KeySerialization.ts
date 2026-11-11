// === Module 10558: KeySerialization ===

// Module 10558 (KeySerialization)
import _modDef10559 from "module_10559" /* 10559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef10559.fromByteArray(uint8Array);
}