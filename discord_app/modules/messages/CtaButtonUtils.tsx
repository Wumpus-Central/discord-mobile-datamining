// === Module 11116: CtaButtonType ===

// Module 11116 (CtaButtonType)
import initialize from "initialize";

const require = arg1;
let obj = { MARK_AS_FALSE_POSITIVE: "mark_as_false_positive", AGE_VERIFICATION_RETRY: "age_verification_retry", CONNECT_TO_TEEN: "connect_to_teen" };
let result = require("useAgeVerificationRunner").fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export const CtaButtonType = obj;
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  const obj = require(11117) /* shouldRenderReportFalsePositiveButton */;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    let tmpResult = tmp(4409);
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      tmpResult = tmp(4409);
      if (tmpResult.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
    }
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = function useCtaButtonType(id, channel_id) {
  const obj = require(11117) /* shouldRenderReportFalsePositiveButton */;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = require(4409) /* useAgeVerificationRunner */.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const obj2 = require(4409) /* useAgeVerificationRunner */;
  const tmp = require;
  const items = [initialize];
  let result1 = null != require(589) /* initialize */.useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    result1 = tmp(4409).isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const tmpResult = tmp(4409);
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
};