// === Module 9161: KeySerialization ===

// Module 9161 (KeySerialization)
import _modDef9162 from "module_9162" /* 9162 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9162.fromByteArray(uint8Array);
};