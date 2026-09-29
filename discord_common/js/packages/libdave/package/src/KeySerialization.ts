// === Module 9326: KeySerialization ===

// Module 9326 (KeySerialization)
import _modDef9327 from "module_9327" /* 9327 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9327.fromByteArray(uint8Array);
};