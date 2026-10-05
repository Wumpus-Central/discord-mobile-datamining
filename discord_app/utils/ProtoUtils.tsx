// === Module 1234: ProtoUtils ===

// Module 1234 (ProtoUtils)
import _mod1198 from "module_1198" /* 1198 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(buf) {
    const BinaryReader = _mod1198.BinaryReader;
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new BinaryReader(buf, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export const b64ToProto = function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    fromBinary = fromBinary.fromBinary;
    const obj = _mod1198;
    fromBinaryResult = fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
};
export const protoToB64 = function protoToB64(toBinary, favoriteGifs) {
  const obj = _mod1198;
  return obj.base64encode(toBinary.toBinary(favoriteGifs));
};