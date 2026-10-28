// === Module 9227: KeySerialization ===

// Module 9227 (KeySerialization)
import _modDef9228 from "module_9228" /* 9228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9228.fromByteArray(uint8Array);
};