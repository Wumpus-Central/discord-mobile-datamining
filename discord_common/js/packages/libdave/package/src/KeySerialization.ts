// discord_common/js/packages/libdave/package/src/KeySerialization.ts
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import byteLengthDefault from "../../../../../../_runtime/09707_byteLength.js";

const result = obj132.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};