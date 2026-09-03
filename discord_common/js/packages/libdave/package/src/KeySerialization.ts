// discord_common/js/packages/libdave/package/src/KeySerialization.ts
import set from "../../../../../../_runtime/00002_set.js";
import byteLengthDefault from "../../../../../../_runtime/09864_byteLength.js";

const result = set.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLengthDefault.fromByteArray(uint8Array);
};
