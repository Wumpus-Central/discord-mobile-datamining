import { byteLength } from "../../../../../../_runtime/09130_byteLength.js";
// discord_common/js/packages/libdave/package/src/KeySerialization.ts
const result = require("set").fileFinishedImporting("../discord_common/js/packages/libdave/package/src/KeySerialization.ts");

export const serializeKey = function serializeKey(uint8Array) {
  return byteLength.fromByteArray(uint8Array);
};