// discord_app/modules/webauthn/WebAuthnErrorUtils.tsx
import V6OrEarlierAPIError from "../../errors/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/webauthn/WebAuthnErrorUtils.tsx");

export function isUnknownPasskeyError(code) {
  let tmp = code instanceof V6OrEarlierAPIError.APIError;
  if (tmp) {
    tmp = 60022 === code.code;
  }
  return tmp;
}
