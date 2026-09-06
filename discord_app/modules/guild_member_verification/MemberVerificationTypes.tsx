// discord_app/modules/guild_member_verification/MemberVerificationTypes.tsx
import size from "../../../_runtime/metro/00002__.js";

const VerificationFormFieldTypes = {
  TERMS: "TERMS",
  TEXT_INPUT: "TEXT_INPUT",
  PARAGRAPH: "PARAGRAPH",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
  VERIFICATION: "VERIFICATION",
};
const result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationTypes.tsx");

export const MAX_RESULTS_PER_PAGE = 25;
export const MAX_VISIBLE_PAGES = 4;
export { VerificationFormFieldTypes };
export const UserVerificationFieldPlatforms = { EMAIL: "email", PHONE: "phone" };
export const GuildJoinRequestSortOrders = { TIMESTAMP_DESC: "NEWEST", TIMESTAMP_ASC: "OLDEST" };
export const GuildJoinRequestApplicationStatuses = {
  STARTED: "STARTED",
  SUBMITTED: "SUBMITTED",
  REJECTED: "REJECTED",
  APPROVED: "APPROVED",
};
export const isTermsFormField = function isTermsFormField(field_type) {
  let tmp = null != field_type;
  if (tmp) {
    tmp = field_type.field_type === obj.TERMS;
  }
  return tmp;
};
export const hasNonTermsFormField = function hasNonTermsFormField(formFields) {
  return (
    null != formFields &&
    formFields.some((field_type) => {
      let tmp = null != field_type;
      if (tmp) {
        tmp = field_type.field_type === constants.TERMS;
      }
      return !tmp;
    })
  );
};
