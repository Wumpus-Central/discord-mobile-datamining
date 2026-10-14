// === Module 8831: KeySerialization ===

// Module 8831 (KeySerialization)
import _modDef8832 from "module_8832" /* 8832 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef8832.fromByteArray(uint8Array);
};