// === Module 9376: KeySerialization ===

// Module 9376 (KeySerialization)
import _modDef9377 from "module_9377" /* 9377 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9377.fromByteArray(uint8Array);
};