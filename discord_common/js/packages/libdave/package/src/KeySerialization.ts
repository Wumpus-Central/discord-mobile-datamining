// === Module 9148: KeySerialization ===

// Module 9148 (KeySerialization)
import _modDef9149 from "module_9149" /* 9149 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9149.fromByteArray(uint8Array);
};