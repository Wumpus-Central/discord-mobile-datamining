// === Module 15322: _decodeEncodedUserRecord ===

// Module 15322 (_decodeEncodedUserRecord)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createdAt" /* 1930 */;

function _decodeEncodedUserRecord() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, str) {
      closure_3 = tmp2;
      dependencyMap = tmp5;
      let callback = table;
      const obj2 = callback(table[3]);
      callback = yield obj2.decryptEncodedCiphertext(callback, callback);
      table = str.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
      if (null == table) {
        const _Error = Error;
        error = new Error("Invalid encoded user record.");
        throw error;
      }
      dependencyMap = dependencyMap(table, 5);
      closure_3 = 5;
      closure_6 = 2;
      const obj3 = { id: null, discriminator: null, avatar: null, username: null };
      obj3[0] = closure_3;
      obj3[1] = closure_4;
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
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/remote_auth/RemoteAuthUtils.tsx");

export const decodeEncodedUserRecord = function decodeEncodedUserRecord(arg0, closure_6) {
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