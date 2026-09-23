// === Module 10047: KeySerialization ===

// Module 10047 (KeySerialization)
import _modDef10048 from "module_10048" /* 10048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return _modDef10048.fromByteArray(uint8Array);
};