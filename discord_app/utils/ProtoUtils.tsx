// === Module 1224: ProtoUtils ===

// Module 1224 (ProtoUtils)
import _mod1188 from "module_1188" /* 1188 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(dependencyMap) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1188.BinaryReader(dependencyMap, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export const b64ToProto = function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    const obj = _mod1188;
    fromBinaryResult = fromBinary.fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
};
export const protoToB64 = function protoToB64(toBinary, favoriteGifs) {
  return _mod1188.base64encode(toBinary.toBinary(favoriteGifs));
};