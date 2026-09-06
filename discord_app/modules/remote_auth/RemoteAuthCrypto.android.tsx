// === Module 15990: RemoteAuthCrypto ===

// Module 15990 (RemoteAuthCrypto)
import NativeRemoteAuthCryptoModuleDefault from "NativeRemoteAuthCryptoModule" /* 15991 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = {};
class AndroidRemoteAuthCrypto {
}
const prototype = AndroidRemoteAuthCrypto.prototype;
prototype["generateRsaKeyPair"] = function generateRsaKeyPair() {
  return (async () => {
    closure_0 = tmp4;
    await NativeRemoteAuthCryptoModuleDefault.generateKeyPair();
    return closure_128_3;
  })();
};
prototype["serializePublicKey"] = function serializePublicKey() {
  return NativeRemoteAuthCryptoModuleDefault.getEncodedPublicKey();
};
prototype["publicKeyFingerprint"] = function publicKeyFingerprint() {
  return NativeRemoteAuthCryptoModuleDefault.getPublicKeyFingerprint();
};
prototype["decryptEncodedCiphertext"] = function decryptEncodedCiphertext(current, encrypted_token) {
  closure_0 = encrypted_token;
  return (async () => {
    await tmp2(c1[1]).decrypt(tmp2);
    closure_128_0 = value;
    const _Uint8Array = Uint8Array;
    const _atob = atob;
    closure_128_1 = Uint8Array.from(atob(closure_128_0), (str) => str.charCodeAt(0));
    const _TextDecoder = TextDecoder;
    const decoder = new TextDecoder();
    return decoder.decode(closure_128_1);
  })();
};
prototype["decryptNonce"] = function decryptNonce(arg0, encrypted_nonce) {
  closure_0 = encrypted_nonce;
  return (async () => {
    await v3(c1[1]).decrypt(closure_0).then((result) => result.replace(/\//g, "_").replace(/\+/g, "-"));
    return value;
  })();
};
prototype["release"] = function release() {
  NativeRemoteAuthCryptoModuleDefault.releaseKeyPair();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default Object.create(AndroidRemoteAuthCrypto.prototype);