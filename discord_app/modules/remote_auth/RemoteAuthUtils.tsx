// === Module 14990: _decodeEncodedUserRecord ===

// Module 14990 (_decodeEncodedUserRecord)
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
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw str;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = str;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === createdAt) {
            if (arg0 === 1) {
              c5 = 3;
              throw str;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = str;
              return obj;
            } else {
              let asyncGeneratorStep = tmp2;
              let dependencyMap = tmp5;
              let callback = table;
              table = undefined;
              dependencyMap = undefined;
              asyncGeneratorStep = undefined;
              createdAt = undefined;
              c5 = undefined;
              let closure_6;
              let obj2 = callback(table[3]);
              createdAt = 1;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.decryptEncodedCiphertext(callback, callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw str;
          } else if (arg0 === 2) {
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = str;
            return obj2;
          } else {
            callback = str;
            table = str.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
            if (null == table) {
              const _Error = Error;
              const error = new Error("Invalid encoded user record.");
              throw error;
            } else {
              dependencyMap = dependencyMap(table, 5);
              asyncGeneratorStep = 5;
              createdAt = 1882;
              c5 = 14988;
              closure_6 = 2;
              const obj3 = { id: null, discriminator: null, avatar: null, username: null };
              obj3[0] = asyncGeneratorStep;
              obj3[1] = createdAt;
              let tmp7 = null;
              let tmp42 = createdAt;
              if ("0" !== c5) {
                tmp7 = c5;
              }
              obj3[2] = tmp7;
              obj3[3] = closure_6;
              tmp42 = new tmp42(obj3);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = tmp42;
              return obj;
            }
          }
        } catch (tmp25) {
          c5 = tmp;
          throw tmp25;
        }
      }
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