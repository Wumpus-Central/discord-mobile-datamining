// === Module 16628: deleteWebAuthnCredentialWithToast ===

// Module 16628 (deleteWebAuthnCredentialWithToast)
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6742 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _deleteWebAuthnCredentialWithToast(arg0) {
  closure_2 = tmp3;
  await WebAuthnActionCreators.deleteWebAuthnCredential(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_0 = closure_3;
    closure_130_1(closure_130_2[2]).open("WEBAUTHN_CREDENTIAL_DELETE_ERROR_TOAST_KEY", { text: closure_129_0.message, variant: "critical" });
    c6 = 3;
    closure_130_1(closure_130_2[2]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const obj8 = { text: null, variant: "success" };
    const intl = closure_130_0(closure_130_2[3]).intl;
    obj8.text = intl.string(closure_130_0(closure_130_2[3]).t.ZnkeXs);
    closure_130_1(closure_130_2[2]).open("WEBAUTHN_CREDENTIAL_DELETE_SUCCESS_TOAST_KEY", obj8);
    c4 = 0;
    closure_130_1(closure_130_2[2]);
  }
  return value;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/deleteWebAuthnCredentialWithToast.tsx");

export function deleteWebAuthnCredentialWithToast() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}