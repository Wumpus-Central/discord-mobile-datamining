// discord_app/utils/ProtoUtils.tsx
import set from "../../_runtime/00002_set.js";
import _mod1188 from "../../_runtime/metro/01188__.js";

let obj = {
  readerFactory(buf) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1188.BinaryReader(buf, textDecoder);
    return binaryReader;
  },
};
const result = set.fileFinishedImporting("utils/ProtoUtils.tsx");

export const BINARY_READ_OPTIONS = obj;
export const b64ToProto = function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    obj = _mod1188;
    fromBinaryResult = fromBinary.fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
};
export const protoToB64 = function protoToB64(toBinary, favoriteGifs) {
  return _mod1188.base64encode(toBinary.toBinary(favoriteGifs));
};
