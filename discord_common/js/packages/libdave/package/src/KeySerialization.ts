// === Module 9974: KeySerialization ===

// Module 9974 (KeySerialization)
import _modDef9975 from "module_9975" /* 9975 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9975.fromByteArray(uint8Array);
};