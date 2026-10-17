// === Module 9099: KeySerialization ===

// Module 9099 (KeySerialization)
import _modDef9100 from "module_9100" /* 9100 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9100.fromByteArray(uint8Array);
};