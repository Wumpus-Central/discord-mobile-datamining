// discord_app/modules/guild_member_verification/MemberVerificationUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import MAX_RESULTS_PER_PAGE from "MemberVerificationTypes.tsx";
import items from "MemberVerificationConstants.tsx";

({ AUTOMATIC_APPROVAL_FORM_FIELDS: obj1, MANUAL_APPROVAL_FORM_FIELDS: c3 } = items);
const GuildFeatures = ME.GuildFeatures;
const result = obj132.fileFinishedImporting("modules/guild_member_verification/MemberVerificationUtils.tsx");

export const isValidFormResponse = function isValidFormResponse(required) {
  ({ response, field_type } = required);
  if (required.required) {
    if (null == response) {
      return false;
    } else {
      if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.TERMS !== field_type) {
        if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.VERIFICATION !== field_type) {
          if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.TEXT_INPUT !== field_type) {
            if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.PARAGRAPH !== field_type) {
              if (MAX_RESULTS_PER_PAGE.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
                return typeof response === "number";
              } else {
                return isDiscordFrontendDevelopment.assertNever(field_type);
              }
            }
          }
          let tmp2 = typeof response === "string";
          if (typeof response === "string") {
            tmp2 = "" !== response.trim();
          }
          return tmp2;
        }
      }
      const _Boolean = Boolean;
      return Boolean(response);
    }
  } else {
    return true;
  }
};
export const removeInternalFields = function removeInternalFields(arr) {
  return arr.filter((item, index) => item.field_type !== callback(table[2]).VerificationFormFieldTypes.VERIFICATION);
};
export const isAutomaticApprovalFormField = function isAutomaticApprovalFormField(field_type) {
  field_type = undefined;
  if (field_type != null) {
    field_type = field_type.field_type;
  }
  return set.has(field_type);
};
export const isManualApprovalFormField = function isManualApprovalFormField(field_type) {
  field_type = undefined;
  if (field_type != null) {
    field_type = field_type.field_type;
  }
  return set2.has(field_type);
};
export const guildHasVerificationGate = function guildHasVerificationGate(guild) {
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  return hasItem;
};