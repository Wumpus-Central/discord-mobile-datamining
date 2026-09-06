// discord_app/modules/remote_auth/RemoteAuthCrypto.android.tsx
import NativeRemoteAuthCryptoModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeRemoteAuthCryptoModule.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

let closure_3 = {};
class AndroidRemoteAuthCrypto {}
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
    closure_128_0 = await tmp2(c1[1]).decrypt(tmp2);
    const _Uint8Array = Uint8Array;
    const _atob = atob;
    closure_128_1 = Uint8Array.from(atob(closure_128_0), (str) => str.charCodeAt(0));
    const _TextDecoder = TextDecoder;
    const decoder = new TextDecoder();
    return decoder.decode(closure_128_1);
  })();
};
prototype["decryptNonce"] = function decryptNonce(arg0, arg1) {
  closure_0 = arg1;
  return (async () => {
    await v3(c1[1])
      .decrypt(closure_0)
      .then((result) => result.replace(/\//g, "_").replace(/\+/g, "-"));
    return arg1;
  })();
};
prototype["release"] = function release() {
  NativeRemoteAuthCryptoModuleDefault.releaseKeyPair();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/RemoteAuthCrypto.android.tsx");

export default Object.create(AndroidRemoteAuthCrypto.prototype);
