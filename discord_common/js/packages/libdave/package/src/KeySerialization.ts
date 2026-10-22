// === Module 9163: KeySerialization ===

// Module 9163 (KeySerialization)
import _modDef9164 from "module_9164" /* 9164 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9164.fromByteArray(uint8Array);
};