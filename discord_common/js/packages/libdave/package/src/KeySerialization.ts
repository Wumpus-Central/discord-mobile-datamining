// === Module 8826: KeySerialization ===

// Module 8826 (KeySerialization)
import _modDef8827 from "module_8827" /* 8827 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef8827.fromByteArray(uint8Array);
};