// === Module 6860: items ===

// Module 6860 (items)
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4200 */;
import set from "set" /* 2 */;

const items = [{ field_type: MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.VERIFICATION }];
const items1 = [MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.TERMS];
let set = new Set(items1);
const items2 = [MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.MULTIPLE_CHOICE, MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.TEXT_INPUT, MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.PARAGRAPH];
const obj = { field_type: MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.VERIFICATION };
const result = set.fileFinishedImporting("modules/guild_member_verification/MemberVerificationConstants.tsx");

export const REQUIRED_FORM_FIELDS = items;
export const AUTOMATIC_APPROVAL_FORM_FIELDS = set;
export const MANUAL_APPROVAL_FORM_FIELDS = new Set(items2);
export const MAX_FORM_ELEMENTS = 5;
export const MAX_NUM_RULES = 16;
export const MAX_RULE_LENGTH = 300;
export const MAX_QUESTION_LENGTH = 300;
export const MAX_PLACEHOLDER_LENGTH = 150;
export const MAX_NUM_CHOICES = 8;
export const MAX_CHOICE_LENGTH = 150;
export const MAX_TEXT_RESPONSE_LENGTH = 150;
export const MAX_PARAGRAPH_RESPONSE_LENGTH = 1000;
export const MAX_DESCRIPTION_LENGTH = 300;
export const MEMBER_VERIFICATION_TYPE = "Membership Gating";
export const IN_APP_MEMBER_VERIFICATION_MODAL_KEY = "in-app-member-verification";
export const MemberVerificationModalStates = { VERIFICATION_INFO: "VERIFICATION_INFO" };