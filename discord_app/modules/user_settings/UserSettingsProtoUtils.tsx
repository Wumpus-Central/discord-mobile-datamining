// discord_app/modules/user_settings/UserSettingsProtoUtils.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsProtoUtils.tsx");

export const getProtoFieldClass = function getProtoFieldClass(PreloadedUserSettings, closure_0) {
  const fields = PreloadedUserSettings.fields;
  const found = fields.find((localName) => localName.localName === closure_0);
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
    let fromBinaryResult = closure_0.fromBinary(closure_0.toBinary(closure_1), require("UserSettingsUtils.tsx") /* b64ToProto */.BINARY_READ_OPTIONS);
    const toBinaryResult = closure_0.toBinary(closure_1);
  } else {
    fromBinaryResult = closure_0.create();
  }
  if (false === c2(fromBinaryResult)) {
    return null;
  } else {
    const obj = PreloadedUserSettings.create();
    obj[closure_02] = fromBinaryResult;
    return obj;
  }
};