// === Module 9150: KeySerialization ===

// Module 9150 (KeySerialization)
import _modDef9151 from "module_9151" /* 9151 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9151.fromByteArray(uint8Array);
};