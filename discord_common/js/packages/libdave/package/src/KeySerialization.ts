// === Module 9180: KeySerialization ===

// Module 9180 (KeySerialization)
import _modDef9181 from "module_9181" /* 9181 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9181.fromByteArray(uint8Array);
};