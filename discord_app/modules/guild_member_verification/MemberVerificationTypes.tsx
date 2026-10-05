// === Module 4702: MemberVerificationTypes ===

// Module 4702 (MemberVerificationTypes)
import size from "module_2" /* 2 */;

const VerificationFormFieldTypes = { TERMS: "TERMS", TEXT_INPUT: "TEXT_INPUT", PARAGRAPH: "PARAGRAPH", MULTIPLE_CHOICE: "MULTIPLE_CHOICE", VERIFICATION: "VERIFICATION" };
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationTypes.tsx");

export const MAX_RESULTS_PER_PAGE = 25;
export const MAX_VISIBLE_PAGES = 4;
export { VerificationFormFieldTypes };
export const UserVerificationFieldPlatforms = { EMAIL: "email", PHONE: "phone" };
export const GuildJoinRequestSortOrders = { TIMESTAMP_DESC: "NEWEST", TIMESTAMP_ASC: "OLDEST" };
export const GuildJoinRequestApplicationStatuses = { STARTED: "STARTED", SUBMITTED: "SUBMITTED", REJECTED: "REJECTED", APPROVED: "APPROVED" };
export const isTermsFormField = function isTermsFormField(field_type) {
  return null != field_type && field_type.field_type === obj.TERMS;
};
export const hasNonTermsFormField = function hasNonTermsFormField(formFields) {
  const tmp = null != formFields && formFields.some((field_type) => !(null != field_type && field_type.field_type === constants.TERMS));
  return tmp;
};