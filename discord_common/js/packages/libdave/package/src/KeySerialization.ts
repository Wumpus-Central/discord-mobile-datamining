// === Module 9354: KeySerialization ===

// Module 9354 (KeySerialization)
import _modDef9355 from "module_9355" /* 9355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9355.fromByteArray(uint8Array);
};