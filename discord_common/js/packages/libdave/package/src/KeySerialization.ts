// === Module 9386: KeySerialization ===

// Module 9386 (KeySerialization)
import _modDef9387 from "module_9387" /* 9387 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9387.fromByteArray(uint8Array);
};