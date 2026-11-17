// === Module 6838: WebAuthnErrorUtils ===

// Module 6838 (WebAuthnErrorUtils)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  let tmp = code instanceof V6OrEarlierAPIError.APIError;
  if (tmp) {
    tmp = 60022 === code.code;
  }
  return tmp;
}