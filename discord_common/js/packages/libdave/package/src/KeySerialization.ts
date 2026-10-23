// === Module 9170: KeySerialization ===

// Module 9170 (KeySerialization)
import _modDef9171 from "module_9171" /* 9171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9171.fromByteArray(uint8Array);
};