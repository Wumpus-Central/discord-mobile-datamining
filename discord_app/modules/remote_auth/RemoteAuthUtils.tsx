// === Module 15914: RemoteAuthUtils ===

// Module 15914 (RemoteAuthUtils)
import RemoteAuthCryptoDefault from "RemoteAuthCrypto" /* 15912 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRecord from "UserRecord" /* 1391 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _decodeEncodedUserRecord() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj3;
    let tmp6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let id;
        let discriminator;
        let closure_5;
        let username;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = closure_1;
            closure_1 = undefined;
            closure_2 = undefined;
            id = undefined;
            discriminator = undefined;
            closure_5 = undefined;
            username = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: obj3.decryptEncodedCiphertext(closure_0, closure_0), done: false };
            obj3 = RemoteAuthCryptoDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          closure_1 = value.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
          if (null == closure_1) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            const error = new Error("Invalid encoded user record.");
            throw error;
          } else {
            closure_2 = closure_131_2(closure_1, 5);
            id = closure_2[1];
            discriminator = closure_2[2];
            closure_5 = closure_2[3];
            username = closure_2[4];
            const obj7 = { id, discriminator, avatar: tmp6, username };
            tmp6 = null;
            if ("0" !== closure_5) {
              tmp6 = closure_5;
            }
            const self = this;
            const self2 = this;
            const tmp352 = new closure_131_4(obj7);
            c5 = 3;
            obj = { value: tmp352, done: true };
            return obj;
          }
        }
      } catch (tmp20) {
        c5 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/remote_auth/RemoteAuthUtils.tsx");

export const decodeEncodedUserRecord = function decodeEncodedUserRecord() {
  return obj(...arguments);
};
export const base64Encode = function base64Encode(arg0) {
  const uint8Array = new Uint8Array(arg0);
  const items = [...uint8Array];
  const str = btoa(fromCharCode.apply(items));
  const str2 = str.replace(/\//g, "_");
  const str3 = str2.replace(/\+/g, "-");
  return str3.replace(/={1,2}$/, "");
};
export const base64Decode = function base64Decode(placeholder) {
  return Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0));
};