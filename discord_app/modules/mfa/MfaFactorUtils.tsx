// discord_app/modules/mfa/MfaFactorUtils.tsx
import LoggerDefault from "../debug/Logger.tsx";
import WebAuthnActionCreators from "../webauthn/WebAuthnActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import WebAuthnStore from "../webauthn/WebAuthnStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_6 = async function _isLastRemainingMfaFactor(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: WebAuthnActionCreators.fetchWebAuthnCredentials(), done: false };
          return obj5;
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_129_2 = closure_3;
          closure_130_5.warn(closure_129_2);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
        }
        closure_129_1 = closure_130_3.getCredentials().length;
        if ("totp" !== closure_129_0) {
          if (1 === closure_129_1) {
            !closure_130_4.hasTOTPEnabled();
          }
        }
        c6 = 3;
      }
    } catch (tmp30) {
      closure_3 = tmp30;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp30;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_5 = new LoggerDefault("MfaFactorUtils");
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/MfaFactorUtils.tsx");

export function isLastRemainingMfaFactor() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
