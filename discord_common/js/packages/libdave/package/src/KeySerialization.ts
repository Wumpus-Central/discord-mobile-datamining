// === Module 9154: KeySerialization ===

// Module 9154 (KeySerialization)
import _modDef9155 from "module_9155" /* 9155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9155.fromByteArray(uint8Array);
};