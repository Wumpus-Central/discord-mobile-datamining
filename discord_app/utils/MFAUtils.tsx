// === Module 6446: MFAUtils ===

// Module 6446 (MFAUtils)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import encodeDefault from "encode" /* 6447 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
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
const tmp4 = "Uint8Array" in window;
if (tmp5) {
  let str = "getRandomValues";
  tmp5 = "getRandomValues" in _crypto;
}
if (tmp5) {
  tmp5 = tmp4;
}
function encodeTotpSecret(totpSecret) {
  const str = totpSecret.replace(/[\s._-]+/g, "");
  return str.toUpperCase();
}
const tmp6 = !MetaQuestUtils.isMetaQuest();
const result = size.fileFinishedImporting("utils/MFAUtils.tsx");

export const hasCrypto = tmp5;
export const hasWebAuthn = tmp6;
export const generateTotpSecret = function generateTotpSecret() {
  const getRandomValues = _crypto.getRandomValues;
  const uint8Array = new Uint8Array(20);
  const randomValues = getRandomValues(uint8Array);
  const encoder = encodeDefault;
  const str = encoder.encode(randomValues);
  const str2 = str.toString("utf8");
  const str3 = str2.replace(/=/g, "");
  const str4 = str3.toLowerCase();
  const str5 = str4.replace(/(\w{4})/g, "$1 ");
  return str5.trim();
};
export { encodeTotpSecret };
export const encodeTotpSecretAsUrl = function encodeTotpSecretAsUrl(arg0, str) {
  str = arg2;
  if (arg2 === undefined) {
    str = "Discord";
  }
  const encodeURIResult = encodeURI(str);
  const encodeURIResult1 = encodeURI(arg0);
  const str2 = str.replace(/[\s._-]+/g, "");
  const formatted = str2.toUpperCase();
  return "otpauth://totp/" + encodeURIResult + ":" + encodeURIResult1 + "?secret=" + formatted + "&issuer=" + encodeURIComponent(str);
};
export const captureWebAuthnException = function captureWebAuthnException(error, tags) {
  let obj2;
  const obj = { tags: obj2 };
  const captureException = SentryUtilsDefault.captureException;
  SentryUtilsDefault;
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj2 = { app_context: "webauthn" };
  const merged1 = Object.assign(tags);
  captureException(error, obj);
};