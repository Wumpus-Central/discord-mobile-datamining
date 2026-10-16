// === Module 9052: KeySerialization ===

// Module 9052 (KeySerialization)
import _modDef9053 from "module_9053" /* 9053 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9053.fromByteArray(uint8Array);
};