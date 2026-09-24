// === Module 10052: KeySerialization ===

// Module 10052 (KeySerialization)
import _modDef10053 from "module_10053" /* 10053 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef10053.fromByteArray(uint8Array);
};