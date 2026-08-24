// === Module 8627: _crypto ===

// Module 8627 (_crypto)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _modDef1208 from "module_1208" /* 1208 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;
import encodeDefault from "encode" /* 8628 */;

let _crypto;
if (window != null) {
  _crypto = window.crypto;
}
if (_crypto == null) {
  let msCrypto;
  if (window != null) {
    msCrypto = window.msCrypto;
  }
  _crypto = msCrypto;
}
let tmp5 = null != _crypto;
if (tmp5) {
  tmp5 = "getRandomValues" in _crypto;
}
if (tmp5) {
  tmp5 = tmp4;
}
let tmp6 = null != get_ActivityIndicator.NativeModules.DCDSecurityKeyManager;
if (tmp6) {
  const _module = isMetaQuest;
  tmp6 = !_module.isMetaQuest();
}
function encodeTotpSecret(totpSecret) {
  return totpSecret.replace(/[\s._-]+/g, "").toUpperCase();
}
const result = set.fileFinishedImporting("utils/MFAUtils.tsx");

export const hasCrypto = tmp5;
export const hasWebAuthn = tmp6;
export const generateTotpSecret = function generateTotpSecret() {
  const uint8Array = new Uint8Array(20);
  const randomValues = _crypto.getRandomValues(uint8Array);
  const obj = encodeDefault;
  const str = encodeDefault.encode(randomValues);
  const str2 = encodeDefault.encode(randomValues).toString("utf8");
  const str3 = encodeDefault.encode(randomValues).toString("utf8").replace(/=/g, "");
  const str4 = encodeDefault.encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase();
  return encodeDefault.encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim();
};
export { encodeTotpSecret };
export const encodeTotpSecretAsUrl = function encodeTotpSecretAsUrl(arg0, str) {
  str = arg2;
  if (arg2 === undefined) {
    str = "Discord";
  }
  const encodeURIResult = encodeURI(str);
  const encodeURIResult1 = encodeURI(arg0);
  const formatted = str.replace(/[\s._-]+/g, "").toUpperCase();
  return "otpauth://totp/" + encodeURIResult + ":" + encodeURIResult1 + "?secret=" + formatted + "&issuer=" + encodeURIComponent(str);
};
export const captureWebAuthnException = function captureWebAuthnException(closure_1, tags) {
  let obj = _modDef1208;
  obj = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj = {};
  const merged1 = Object.assign(tags);
  obj.app_context = "webauthn";
  obj.tags = obj;
  obj.captureException(closure_1, obj);
};