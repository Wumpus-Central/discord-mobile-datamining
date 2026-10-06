// === Module 15951: RemoteAuthCrypto ===

// Module 15951 (RemoteAuthCrypto)
import react_nativeDefault from "react-native" /* 15952 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1;

let closure_3 = {};
class AndroidRemoteAuthCrypto {
  generateRsaKeyPair() {
    return (async () => {
      let obj3;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp3;
              c1 = 1;
              c2 = 1;
              const obj5 = { value: obj3.generateKeyPair(), done: false };
              obj3 = react_nativeDefault;
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c2 = 3;
            const obj = { value: closure_128_3, done: true };
            return obj;
          }
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    })();
  }
  serializePublicKey() {
    const obj = react_nativeDefault;
    return obj.getEncodedPublicKey();
  }
  publicKeyFingerprint() {
    const obj = react_nativeDefault;
    return obj.getPublicKeyFingerprint();
  }
  decryptEncodedCiphertext(current, encrypted_token) {
    let closure_0 = encrypted_token;
    return (async function() {
      let c2;
      let closure_0;
      let tmp;
      const obj3 = tmp(c1[1]);
      await obj3.decrypt(tmp);
      tmp = value;
      const _Uint8Array = Uint8Array;
      const _atob = atob;
      let closure_1 = Uint8Array.from(atob(tmp), (str) => str.charCodeAt(0));
      const _TextDecoder = TextDecoder;
      const self = this;
      const self2 = this;
      const decoder = new TextDecoder();
      return decoder.decode(closure_1);
    })();
  }
  decryptNonce(arg0, encrypted_nonce) {
    let closure_0 = encrypted_nonce;
    return (async () => {
      let decryptResult;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj3 = v3(c1[1]);
              c1 = 1;
              v3 = 1;
              const obj5 = {
                value: decryptResult.then((result) => {
                          const str = result.replace(/\//g, "_");
                          return str.replace(/\+/g, "-");
                        }),
                done: false
              };
              decryptResult = obj3.decrypt(encrypted_nonce);
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp7) {
          v3 = 3;
          throw tmp7;
        }
      }
    })();
  }
  release() {
    const obj = react_nativeDefault;
    obj.releaseKeyPair();
  }
}
const prototype = AndroidRemoteAuthCrypto.prototype;
const prototype2 = AndroidRemoteAuthCrypto.prototype;
const result = size.fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default Object.create(prototype2);