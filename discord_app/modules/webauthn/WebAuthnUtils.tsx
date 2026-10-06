// === Module 6095: WebAuthnUtils ===

// Module 6095 (WebAuthnUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnUtils.tsx");

export const encodeUserIdForWebAuthn = function encodeUserIdForWebAuthn(id) {
  const uint8Array = new Uint8Array(16);
  const dataView = new DataView(uint8Array.buffer);
  dataView.setUint32(0, 821232635);
  dataView.setUint16(4, 35878);
  dataView.setUint16(6, 20307);
  dataView.setBigUint64(8, BigInt(id));
  const items = [...uint8Array];
  const str = btoa(String.fromCharCode.apply(items));
  const str2 = str.replace(/\+/g, "-");
  const str3 = str2.replace(/\//g, "_");
  return str3.replace(/=/g, "");
};