// === Module 1941: UserSettingsProtoUtils ===

// Module 1941 (UserSettingsProtoUtils)
import ProtoUtils from "ProtoUtils" /* 1224 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoUtils.tsx");

export const getProtoFieldClass = function getProtoFieldClass(PreloadedUserSettings, field) {
  closure_0 = field;
  const fields = PreloadedUserSettings.fields;
  const found = fields.find((localName) => localName.localName === closure_0);
  if (null == found) {
    const _Error = Error;
    const _String = String;
    const _HermesInternal = HermesInternal;
    throw Error("Unknown proto field name " + String(field));
  } else {
    return found.T();
  }
};
export const createModifiedProto = function createModifiedProto(favoriteGifs, fn, protoFieldClass, PreloadedUserSettings, arg4) {
  if (null != favoriteGifs) {
    let fromBinaryResult = protoFieldClass.fromBinary(protoFieldClass.toBinary(favoriteGifs), ProtoUtils.BINARY_READ_OPTIONS);
    const toBinaryResult = protoFieldClass.toBinary(favoriteGifs);
  } else {
    fromBinaryResult = protoFieldClass.create();
  }
  if (false === fn(fromBinaryResult)) {
    return null;
  } else {
    const obj = PreloadedUserSettings.create();
    obj[arg4] = fromBinaryResult;
    return obj;
  }
};