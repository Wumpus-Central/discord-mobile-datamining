// === Module 8807: KeySerialization ===

// Module 8807 (KeySerialization)
import _modDef8808 from "module_8808" /* 8808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef8808.fromByteArray(uint8Array);
};