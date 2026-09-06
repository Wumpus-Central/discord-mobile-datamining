// discord_app/utils/ProtoUtils.tsx
import _mod1188 from "../../_runtime/metro/01188__.js";
import size from "../../_runtime/metro/00002__.js";

const BINARY_READ_OPTIONS = {
  readerFactory(dependencyMap) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1188.BinaryReader(dependencyMap, textDecoder);
    return binaryReader;
  },
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
