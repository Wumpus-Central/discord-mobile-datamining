// === Module 8798: KeySerialization ===

// Module 8798 (KeySerialization)
import _modDef8799 from "module_8799" /* 8799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef8799.fromByteArray(uint8Array);
};