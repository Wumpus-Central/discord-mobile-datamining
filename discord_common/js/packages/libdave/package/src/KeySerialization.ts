// === Module 9280: KeySerialization ===

// Module 9280 (KeySerialization)
import _modDef9281 from "module_9281" /* 9281 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef9281.fromByteArray(uint8Array);
};