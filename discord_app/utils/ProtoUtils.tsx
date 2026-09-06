// === Module 1224: BINARY_READ_OPTIONS ===

// Module 1224 (BINARY_READ_OPTIONS)
import set from "set" /* 2 */;
import _mod1188 from "module_1188" /* 1188 */;

let obj = {
  readerFactory(buf) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1188.BinaryReader(buf, textDecoder);
    return binaryReader;
  }
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