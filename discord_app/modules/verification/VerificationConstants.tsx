// discord_app/modules/verification/VerificationConstants.tsx
import set from "../../../_runtime/00002_set.js";

const obj = { DISCORD_EMPLOYEE_ASKED_ME_TO: 0, [0]: "DISCORD_EMPLOYEE_ASKED_ME_TO", SOMEONE_ASKED_ME_TO: 1, [1]: "SOMEONE_ASKED_ME_TO", NEW_EMAIL: 2, [2]: "NEW_EMAIL", SOMETHING_ELSE: 3, [3]: "SOMETHING_ELSE" };
const items = [, , , ];
({ DISCORD_EMPLOYEE_ASKED_ME_TO: arr[0], SOMEONE_ASKED_ME_TO: arr[1], NEW_EMAIL: arr[2], SOMETHING_ELSE: arr[3] } = obj);
const items1 = [, ];
({ DISCORD_EMPLOYEE_ASKED_ME_TO: arr2[0], SOMEONE_ASKED_ME_TO: arr2[1] } = obj);
let set = new Set(items1);
const result = set.fileFinishedImporting("modules/verification/VerificationConstants.tsx");

export const ChangeEmailReasons = obj;
export const CHANGE_EMAIL_REASONS_ORDER = items;
export const SUSPICIOUS_CHANGE_EMAIL_REASONS = set;
export const COMMON_SCAMS_EDUCATION_HC_ARTICLE = "https://discord.com/safety/understanding-and-avoiding-common-scams";
export const FREE_TEXT_RESPONSE_MAX_LENGTH = 1024;
export const VERIFICATION_LAYER_KEY = "verification";
export const AGREEMENTS_MODAL_KEY = "AGREEMENTS_MODAL_KEY";
export const EMAIL_VERIFICATION_MODAL_KEY = "Email Verification";
export const PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY = "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY";