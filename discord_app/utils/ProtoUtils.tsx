// discord_app/utils/ProtoUtils.tsx
import _mod1197 from "../../_runtime/metro/01197__.js";
import size from "../../_runtime/metro/00002__.js";

const BINARY_READ_OPTIONS = {
  readerFactory(dependencyMap) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new _mod1197.BinaryReader(dependencyMap, textDecoder);
    return binaryReader;
  },
};
const result = size.fileFinishedImporting("utils/ProtoUtils.tsx");

export { BINARY_READ_OPTIONS };
export function b64ToProto(fromBinary, actionData) {
  let fromBinaryResult = null;
  if (null != actionData) {
    const obj = _mod1197;
    fromBinaryResult = fromBinary.fromBinary(obj.base64decode(actionData), obj);
  }
  return fromBinaryResult;
}
export function protoToB64(toBinary, favoriteGifs) {
  return _mod1197.base64encode(toBinary.toBinary(favoriteGifs));
}
