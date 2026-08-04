// discord_app/modules/remote_auth/RemoteAuthCrypto.android.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_3 = {};
class AndroidRemoteAuthCrypto {
}
const prototype = AndroidRemoteAuthCrypto.prototype;
prototype["generateRsaKeyPair"] = function generateRsaKeyPair() {
  return callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp4;
            let obj2 = outer1_0(table[1]);
            table = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj2.generateKeyPair();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_3;
          return obj;
        }
      } catch (tmp8) {
        c2 = tmp;
        throw tmp8;
      }
    }
  })();
};
prototype["serializePublicKey"] = function serializePublicKey(c3) {
  return importDefault(14922).getEncodedPublicKey();
};
prototype["publicKeyFingerprint"] = function publicKeyFingerprint(c3) {
  return importDefault(14922).getPublicKeyFingerprint();
};
prototype["decryptEncodedCiphertext"] = function decryptEncodedCiphertext(closure_0, closure_02) {
  closure_0 = closure_02;
  return callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === closure_1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            let obj3 = outer1_0(table[1]);
            closure_1 = 1;
            c2 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj3.decrypt(outer1_0);
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          const _Uint8Array = Uint8Array;
          const _atob = atob;
          closure_1 = Uint8Array.from(atob(closure_0), (str) => str.charCodeAt(0));
          const _TextDecoder = TextDecoder;
          const textDecoder = new TextDecoder();
          c2 = 3;
          obj3 = { value: null, done: true };
          obj3[0] = textDecoder.decode(closure_1);
          return obj3;
        }
      } catch (tmp16) {
        c2 = tmp;
        throw tmp16;
      }
    }
  })();
};
prototype["decryptNonce"] = function decryptNonce(arg0, outer1_2) {
  let closure_0 = outer1_2;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj2 = v0(table[1]);
            table = 1;
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj2.decrypt(v0).then((str) => str.replace(/\//g, "_").replace(/\+/g, "-"));
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  })();
};
prototype["release"] = function release() {
  importDefault(14922).releaseKeyPair();
};
const result = require("set").fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default Object.create(AndroidRemoteAuthCrypto.prototype);