// === Module 1234: ProtoUtils ===

// Module 1234 (ProtoUtils)
import _mod1196 from "module_1196" /* 1196 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(dependencyMap) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1196.BinaryReader(dependencyMap, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    const obj = _mod1196;
    fromBinaryResult = fromBinary.fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
}
export function protoToB64(toBinary, favoriteGifs) {
  return _mod1196.base64encode(toBinary.toBinary(favoriteGifs));
}