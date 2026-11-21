// === Module 9705: KeySerialization ===

// Module 9705 (KeySerialization)
import _modDef9706 from "module_9706" /* 9706 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef9706.fromByteArray(uint8Array);
}