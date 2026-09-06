// === Module 6951: MFAUtils ===

// Module 6951 (MFAUtils)
import _mod17 from "module_17" /* 17 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import encodeDefault from "encode" /* 6952 */;
import size from "module_2" /* 2 */;

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
let tmp6 = null != _mod17.NativeModules.DCDSecurityKeyManager;
if (tmp6) {
  const _module = MetaQuestUtils;
  tmp6 = !_module.isMetaQuest();
}
function encodeTotpSecret(totpSecret) {
  return totpSecret.replace(/[\s._-]+/g, "").toUpperCase();
}
const result = size.fileFinishedImporting("utils/MFAUtils.tsx");

export const hasCrypto = tmp5;
export const hasWebAuthn = tmp6;
export const generateTotpSecret = function generateTotpSecret() {
  const uint8Array = new Uint8Array(20);
  const randomValues = _crypto.getRandomValues(uint8Array);
  const encoder = encodeDefault;
  const str = encoder.encode(randomValues);
  const str2 = encoder.encode(randomValues).toString("utf8");
  const str3 = encoder.encode(randomValues).toString("utf8").replace(/=/g, "");
  const str4 = encoder.encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase();
  return encoder.encode(randomValues).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim();
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
export const captureWebAuthnException = function captureWebAuthnException(error, tags) {
  let obj = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj = {};
  const merged1 = Object.assign(tags);
  obj.app_context = "webauthn";
  obj.tags = obj;
  obj.captureException(error, obj);
};