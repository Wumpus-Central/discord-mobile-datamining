// === Module 1246: ProtoUtils ===

// Module 1246 (ProtoUtils)
import _mod1209 from "module_1209" /* 1209 */;
import size from "module_2" /* 2 */;

const BINARY_READ_OPTIONS = {
  readerFactory(dependencyMap) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1209.BinaryReader(dependencyMap, textDecoder);
    return binaryReader;
  }
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    const obj = _mod1209;
    fromBinaryResult = fromBinary.fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
}
export function protoToB64(toBinary, favoriteGifs) {
  return _mod1209.base64encode(toBinary.toBinary(favoriteGifs));
}