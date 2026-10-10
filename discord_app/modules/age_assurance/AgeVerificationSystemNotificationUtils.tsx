// discord_app/modules/age_assurance/AgeVerificationSystemNotificationUtils.tsx
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment.tsx";
import FamilyCenterPendingConnectionStore from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

require = fn;
const MessageEmbedTypes = fn(1085).MessageEmbedTypes;
const obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
let obj2 = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen", REQUEST_MANUAL_REVIEW: "request_manual_review" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationSystemNotificationUtils.tsx");

export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj2;
export const AgeVerificationSystemNotificationContentType = {
  VERIFIED_ADULT: "verified_adult",
  VERIFIED_TEEN: "verified_teen",
  ERROR: "error",
  FAE_FAILED: "fae_failed",
  ID_FAILED: "id_failed",
  UNDERAGE: "underage",
  MANUAL_REVIEW_SUBMITTED: "manual_review_submitted",
};
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj2.RETRY);
            }
            return hasItem;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithManualReviewCta = function isAgeVerificationMessageWithManualReviewCta(
  channel_id,
  id,
) {
  const message = MessageStore.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj2.REQUEST_MANUAL_REVIEW);
            }
            let result = true === hasItem;
            if (result) {
              obj2 = ManualAgeAssuranceFallbackExperiment;
              result = obj2.isManualAgeAssuranceFallbackEnabled("isAgeVerificationMessageWithManualReviewCta");
            }
            return result;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithConnectToTeenCta = function isAgeVerificationMessageWithConnectToTeenCta(
  channel_id,
  id,
) {
  if (null == FamilyCenterPendingConnectionStore.getPendingConnection()) {
    return false;
  } else {
    const message = MessageStore.getMessage(channel_id, id);
    if (null != message) {
      if (null != message.embeds) {
        if (0 !== message.embeds.length) {
          if (null != message.embeds[0].fields) {
            if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              const fields = message.embeds[0].fields;
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj2.CONNECT_TO_TEEN);
              }
              return true === hasItem;
            }
          }
        }
      }
    }
    return false;
  }
};
