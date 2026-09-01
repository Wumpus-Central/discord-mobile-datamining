// discord_app/modules/webauthn/WebAuthnUtils.tsx
import set from "../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/webauthn/WebAuthnUtils.tsx");

export const encodeUserIdForWebAuthn = function encodeUserIdForWebAuthn(c1) {
  const uint8Array = new Uint8Array(16);
  const dataView = new DataView(uint8Array.buffer);
  dataView.setUint32(0, 821232635);
  dataView.setUint16(4, 35878);
  dataView.setUint16(6, 20307);
  dataView.setBigUint64(8, BigInt(c1));
  const items = [...uint8Array];
  const str = btoa(String.fromCharCode.apply(items));
  const str2 = btoa(String.fromCharCode.apply(items)).replace(/\+/g, "-");
  return btoa(String.fromCharCode.apply(items)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};
