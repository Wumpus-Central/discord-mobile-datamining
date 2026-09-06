// === Module 15992: RemoteAuthUtils ===

// Module 15992 (RemoteAuthUtils)
import RemoteAuthCryptoDefault from "RemoteAuthCrypto" /* 15990 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserRecord from "UserRecord" /* 1385 */;

let closure_5 = async function _decodeEncodedUserRecord() {
  closure_3 = tmp2;
  closure_2 = tmp5;
  closure_130_0 = closure_1;
  await RemoteAuthCryptoDefault.decryptEncodedCiphertext(closure_0, closure_130_0);
  closure_130_0 = value;
  closure_130_1 = value.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
  if (null == closure_130_1) {
    const _Error = Error;
    const error = new Error("Invalid encoded user record.");
    throw error;
  }
  closure_130_2 = closure_131_2(closure_130_1, 5);
  closure_130_3 = closure_130_2[1];
  closure_130_4 = closure_130_2[2];
  closure_130_5 = closure_130_2[3];
  closure_130_6 = closure_130_2[4];
  const obj3 = { id: closure_130_3, discriminator: closure_130_4, avatar: null, username: null };
  let tmp7 = null;
  let tmp41 = closure_131_4;
  if ("0" !== closure_130_5) {
    tmp7 = closure_130_5;
  }
  obj3.avatar = tmp7;
  obj3.username = closure_130_6;
  tmp41 = new tmp41(obj3);
  return tmp41;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/RemoteAuthUtils.tsx");

export const decodeEncodedUserRecord = function decodeEncodedUserRecord() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const base64Encode = function base64Encode(arg0) {
  const uint8Array = new Uint8Array(arg0);
  const items = [...uint8Array];
  const str = btoa(String.fromCharCode.apply(items));
  const str2 = btoa(String.fromCharCode.apply(items)).replace(/\//g, "_");
  return btoa(String.fromCharCode.apply(items)).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "");
};
export const base64Decode = function base64Decode(match) {
  return Uint8Array.from(atob(match), (str) => str.charCodeAt(0));
};