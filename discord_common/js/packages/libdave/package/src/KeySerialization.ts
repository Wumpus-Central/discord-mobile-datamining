// === Module 9115: KeySerialization ===

// Module 9115 (KeySerialization)
import _modDef9116 from "module_9116" /* 9116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9116.fromByteArray(uint8Array);
};