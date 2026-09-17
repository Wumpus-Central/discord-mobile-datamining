// === Module 9302: KeySerialization ===

// Module 9302 (KeySerialization)
import _modDef9303 from "module_9303" /* 9303 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9303.fromByteArray(uint8Array);
};