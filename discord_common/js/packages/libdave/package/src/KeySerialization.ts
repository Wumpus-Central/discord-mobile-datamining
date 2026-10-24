// === Module 9194: KeySerialization ===

// Module 9194 (KeySerialization)
import _modDef9195 from "module_9195" /* 9195 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9195.fromByteArray(uint8Array);
};