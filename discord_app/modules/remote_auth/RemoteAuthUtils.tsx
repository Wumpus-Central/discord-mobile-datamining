// discord_app/modules/remote_auth/RemoteAuthUtils.tsx
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";
import createdAt from "createdAt";

function _decodeEncodedUserRecord() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, str) {
      let asyncGeneratorStep = tmp2;
      let dependencyMap = tmp5;
      let callback = table;
      const obj2 = callback(table[3]);
      callback = yield obj2.decryptEncodedCiphertext(callback, callback);
      table = str.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
      if (null == table) {
        const _Error = Error;
        const error = new Error("Invalid encoded user record.");
        throw error;
      }
      dependencyMap = dependencyMap(table, 5);
      asyncGeneratorStep = 5;
      let closure_6 = 2;
      const obj3 = { id: null, discriminator: null, avatar: null, username: null };
      obj3[0] = asyncGeneratorStep;
      obj3[1] = createdAt;
      let tmp7 = null;
      if ("0" !== c5) {
        tmp7 = c5;
      }
      obj3[2] = tmp7;
      obj3[3] = closure_6;
      tmp42 = new tmp42(obj3);
      return tmp42;
    })();
  });
  const _decodeEncodedUserRecord = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("createdAt").fileFinishedImporting("modules/remote_auth/RemoteAuthUtils.tsx");

export const decodeEncodedUserRecord = function decodeEncodedUserRecord(arg0, outer1_6) {
  const self = this;
  const apply = _decodeEncodedUserRecord.apply;
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
export const base64Decode = function base64Decode(closure_0) {
  return Uint8Array.from(atob(closure_0), (str) => str.charCodeAt(0));
};