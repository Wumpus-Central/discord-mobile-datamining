// === Module 15947: RegistrationConstants ===

// Module 15947 (RegistrationConstants)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import size from "module_2" /* 2 */;

const RegisterTransitionSteps = { ACCOUNT_IDENTITY: "Account Identity", ACCOUNT_DISPLAY_NAME: "Account Display Name", ACCOUNT_INFORMATION: "Account Information", AGE_GATE: "Age Gate", AGE_GATE_UNDERAGE: "Age Gate Underage", PHONE_VERIFICATION: "Phone Verification", REGISTER: "Register", CAPTCHA: "Captcha" };
const result = size.fileFinishedImporting("modules/auth/RegistrationConstants.tsx");

export const RegistrationTransitionActionTypes = { VIEWED: "viewed", SUBMITTED: "submitted", RESEND_CODE: "resend_code", INPUT_ERROR: "input_error", RESPONSE_ERROR: "response_error", SUCCESS: "success" };
export const RegistrationSteps = { IDENTITY: "identity", DISPLAY_NAME: "display_name", ACCOUNT_INFORMATION: "account_information", FULL: "full", AGE_GATE: "age_gate", INVITE: "invite", SMS_VERIFY: "sms_verify" };
export { RegisterTransitionSteps };
export const authStateToRegisterTransitionStep = function authStateToRegisterTransitionStep(arg0) {
  if (ConstantsIOS.AuthStates.REGISTER_IDENTITY === arg0) {
    return obj.ACCOUNT_IDENTITY;
  } else if (tmp(1093).AuthStates.REGISTER_DISPLAY_NAME === arg0) {
    return obj.ACCOUNT_DISPLAY_NAME;
  } else if (tmp(1093).AuthStates.REGISTER_ACCOUNT_INFORMATION === arg0) {
    return obj.ACCOUNT_INFORMATION;
  } else if (tmp(1093).AuthStates.AGE_GATE === arg0) {
    return obj.AGE_GATE;
  } else if (tmp(1093).AuthStates.VERIFY_PHONE === arg0) {
    return obj.PHONE_VERIFICATION;
  }
};