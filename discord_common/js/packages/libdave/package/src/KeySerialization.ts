// === Module 9362: KeySerialization ===

// Module 9362 (KeySerialization)
import _modDef9363 from "module_9363" /* 9363 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9363.fromByteArray(uint8Array);
};