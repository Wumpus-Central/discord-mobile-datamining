// === Module 10625: KeySerialization ===

// Module 10625 (KeySerialization)
import _modDef10626 from "module_10626" /* 10626 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export function serializeKey(uint8Array) {
  return _modDef10626.fromByteArray(uint8Array);
}