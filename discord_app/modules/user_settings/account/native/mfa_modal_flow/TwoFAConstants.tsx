// === Module 13833: frozen ===

// Module 13833 (frozen)
import { AnalyticsSections } from "ME";

const frozen = Object.freeze({ LANDING: AnalyticsSections.IOS_TWO_FA_LANDING, SCAN: AnalyticsSections.IOS_TWO_FA_SCAN, ENTER_CODE: AnalyticsSections.IOS_TWO_FA_ENTER_CODE, SUCCESS: AnalyticsSections.IOS_TWO_FA_SUCCESS, ADD_SMS: AnalyticsSections.IOS_TWO_FA_ADD_SMS, VERIFY_SMS: AnalyticsSections.IOS_TWO_FA_VERIFY_SMS });
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFAConstants.tsx");

export const TwoFAModalSetupSections = frozen;