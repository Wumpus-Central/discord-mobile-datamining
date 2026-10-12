// === Module 8827: KeySerialization ===

// Module 8827 (KeySerialization)
import _modDef8828 from "module_8828" /* 8828 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef8828.fromByteArray(uint8Array);
};