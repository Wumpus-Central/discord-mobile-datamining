// discord_app/modules/remote_auth/RemoteAuthCrypto.android.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_3 = {};
class AndroidRemoteAuthCrypto {
}
const prototype = AndroidRemoteAuthCrypto.prototype;
prototype["generateRsaKeyPair"] = function generateRsaKeyPair() {
  return callback(function*() {
    let closure_0 = tmp4;
    const obj2 = outer1_0(table[1]);
    yield obj2.generateKeyPair();
    return closure_3;
  })();
};
prototype["serializePublicKey"] = function serializePublicKey(c3) {
  return importDefault(15022).getEncodedPublicKey();
};
prototype["publicKeyFingerprint"] = function publicKeyFingerprint(c3) {
  return importDefault(15022).getPublicKeyFingerprint();
};
prototype["decryptEncodedCiphertext"] = function decryptEncodedCiphertext(closure_0, closure_02) {
  closure_0 = closure_02;
  return callback(function*() {
    let closure_0 = tmp2;
    const obj3 = outer1_0(table[1]);
    closure_0 = yield obj3.decrypt(outer1_0);
    const _Uint8Array = Uint8Array;
    const _atob = atob;
    const _TextDecoder = TextDecoder;
    const textDecoder = new TextDecoder();
    return textDecoder.decode(closure_1);
  })();
};
prototype["decryptNonce"] = function decryptNonce(arg0, outer1_2) {
  let closure_0 = outer1_2;
  return callback(function*() {
    const obj2 = v0(table[1]);
    yield obj2.decrypt(v0).then((str) => str.replace(/\//g, "_").replace(/\+/g, "-"));
    return arg1;
  })();
};
prototype["release"] = function release() {
  importDefault(15022).releaseKeyPair();
};
const result = require("set").fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default Object.create(AndroidRemoteAuthCrypto.prototype);