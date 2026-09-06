// === Module 5059: MemberVerificationConstants ===

// Module 5059 (MemberVerificationConstants)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import size from "module_2" /* 2 */;

const items = [{ field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION }];
const items1 = [MemberVerificationTypes.VerificationFormFieldTypes.TERMS];
const obj = { field_type: MemberVerificationTypes.VerificationFormFieldTypes.VERIFICATION };
const items2 = [MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE, MemberVerificationTypes.VerificationFormFieldTypes.TEXT_INPUT, MemberVerificationTypes.VerificationFormFieldTypes.PARAGRAPH];
const set = new Set(items1);
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationConstants.tsx");

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