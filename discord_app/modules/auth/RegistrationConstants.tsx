// discord_app/modules/auth/RegistrationConstants.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import keys from "../../ConstantsIOS.tsx";

const obj = { ACCOUNT_IDENTITY: "Account Identity", ACCOUNT_DISPLAY_NAME: "Account Display Name", ACCOUNT_INFORMATION: "Account Information", AGE_GATE: "Age Gate", AGE_GATE_UNDERAGE: "Age Gate Underage", PHONE_VERIFICATION: "Phone Verification", REGISTER: "Register", CAPTCHA: "Captcha" };
const result = obj132.fileFinishedImporting("modules/auth/RegistrationConstants.tsx");

export const RegistrationTransitionActionTypes = { VIEWED: "viewed", SUBMITTED: "submitted", RESEND_CODE: "resend_code", INPUT_ERROR: "input_error", RESPONSE_ERROR: "response_error", SUCCESS: "success" };
export const RegistrationSteps = { IDENTITY: "identity", DISPLAY_NAME: "display_name", ACCOUNT_INFORMATION: "account_information", FULL: "full", AGE_GATE: "age_gate", INVITE: "invite", SMS_VERIFY: "sms_verify" };
export const RegisterTransitionSteps = obj;
export const authStateToRegisterTransitionStep = function authStateToRegisterTransitionStep(arg0) {
  if (keys.AuthStates.REGISTER_IDENTITY === arg0) {
    return obj.ACCOUNT_IDENTITY;
  } else if (keys.AuthStates.REGISTER_DISPLAY_NAME === arg0) {
    return obj.ACCOUNT_DISPLAY_NAME;
  } else if (keys.AuthStates.REGISTER_ACCOUNT_INFORMATION === arg0) {
    return obj.ACCOUNT_INFORMATION;
  } else if (keys.AuthStates.AGE_GATE === arg0) {
    return obj.AGE_GATE;
  } else if (keys.AuthStates.VERIFY_PHONE === arg0) {
    return obj.PHONE_VERIFICATION;
  }
};