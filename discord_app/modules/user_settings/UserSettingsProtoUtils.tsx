// discord_app/modules/user_settings/UserSettingsProtoUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import b64ToProto from "UserSettingsUtils.tsx";

const result = obj132.fileFinishedImporting("modules/user_settings/UserSettingsProtoUtils.tsx");

export const getProtoFieldClass = function getProtoFieldClass(PreloadedUserSettings, closure_0) {
  const fields = PreloadedUserSettings.fields;
  const found = fields.find((item, index) => item.localName === closure_0);
  if (null == found) {
    const _Error = Error;
    const _String = String;
    const _HermesInternal = HermesInternal;
    throw Error("Unknown proto field name " + String(closure_0));
  } else {
    return found.T();
  }
};
export const createModifiedProto = function createModifiedProto(closure_1, c2, closure_0, PreloadedUserSettings, closure_02) {
  if (null != closure_1) {
    let fromBinaryResult = _require.fromBinary(_require.toBinary(closure_1), b64ToProto.BINARY_READ_OPTIONS);
    const toBinaryResult = _require.toBinary(closure_1);
  } else {
    fromBinaryResult = _require.create();
  }
  if (false === callback(fromBinaryResult)) {
    return null;
  } else {
    const obj = PreloadedUserSettings.create();
    obj[closure_02] = fromBinaryResult;
    return obj;
  }
};